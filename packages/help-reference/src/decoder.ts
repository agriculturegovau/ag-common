type JValue = string | number | boolean | null | undefined | JArr | JObj;

type JArr = Array<JValue>;
type JObj = { [key: string]: JValue };

type Value<T> = { status: 'ok'; t: T } | { status: 'err'; msg: string };

export type Decoder<T> = (v: JValue) => Value<T>;
export type Decoded<D> = D extends Decoder<infer T> ? T : never;

const ok = <T>(t: T): Value<T> => ({ status: 'ok', t });
const err = (msg: string): Value<never> => ({ status: 'err', msg });

// Primitive decoders, simply check type of value and decode or fail accordingly
export const stringDecoder: Decoder<string> = (v: JValue) =>
	typeof v === 'string' ? ok(v) : err(`${v} is not a string`);

export const numberDecoder: Decoder<number> = (v: JValue) =>
	typeof v === 'number' ? ok(v) : err(`${v} is not a number`);

export const booleanDecoder: Decoder<boolean> = (v: JValue) =>
	v === true || v === false ? ok(v) : err(`${v} is not a bool`);

export const nullDecoder: Decoder<null> = (v: JValue) =>
	v === null ? ok(v) : err(`${v} is not null`);

export const undefinedDecoder: Decoder<undefined> = (v: JValue) =>
	v === undefined ? ok(v) : err(`${v} is not undefined`);

export const jsonDecoder = (v: JValue) => ok(v);

// A decoder that always succeeds with the provided value
export const succeed =
	<T>(t: T): Decoder<T> =>
	(v: JValue) =>
		ok(t);

// A decoder that always fails with the provided message
export const fail =
	(msg: string): Decoder<never> =>
	(v: JValue) =>
		err(msg);

// Decode a json value
export const decode = <T>(f: Decoder<T>, v: JValue): Value<T> => f(v);

// Decode a json value and resove or reject a promise with the result
export const resolve =
	<T>(f: Decoder<T>) =>
	(v: JValue) => {
		const t = decode(f, v);
		return t.status === 'ok' ? Promise.resolve(t.t) : Promise.reject(t.msg);
	};

// Decode a json value and trigger an appropriate callback in response
export const decodeWith = <T, R>(
	f: Decoder<T>,
	v: JValue,
	resultfn: (t: T) => R,
	errfn?: () => void
) => {
	const r = f(v);
	return r.status === 'ok' ? resultfn(r.t) : errfn?.() ?? undefined;
};

/* Higher order decoders. These decoders compose decoders to create new decoders */

// Decode a value. If successful, use that decoded result as input to a new decoder
export const decodeAndThen = <T, R>(
	decoder: Decoder<T>,
	then_: (t: T) => Decoder<R>
): Decoder<R> => {
	return (value: JValue): Value<R> => {
		const callback = (v: JValue) => {
			const decoded = decode(decoder, v);
			return decoded.status === 'err' ? fail(decoded.msg) : then_(decoded.t);
		};

		return callback(value)(value);
	};
};

// Map the result of a successful decoder to a new type
export const decodeMap = <T, R>(decoder: Decoder<T>, f: (t: T) => R) =>
	decodeAndThen(decoder, (v) => succeed(f(v)));

// Decode a nested field in an object
// ex: decodeField('name', stringDecoder)
export const decodeField = <T>(field: string, f: Decoder<T>) =>
	decodeMap(decodeRecord({ [field]: f }), (t) => t[field]);

// Decode a string and use some function to parse it
export const decodeParser = <T>(
	parser: (term: string) => T | undefined
): Decoder<T> =>
	decodeAndThen(stringDecoder, (v) => {
		const parsed = parser(v);
		return parsed === undefined
			? fail(`${v} failed to parse ${parser.name}`)
			: succeed(parsed);
	});

// Decode an array based on another decoder.
// This could be an array of primitives or more complicated structures.
//
// example:
// const names = decodeArray(decodeRecord({ name: stringDecoder }))
export const decodeArray =
	<T>(f: Decoder<T>): Decoder<T[]> =>
	(v: JValue): Value<T[]> => {
		if (!Array.isArray(v)) {
			return err(`${v} is not an array`);
		}

		const result = [];
		for (const e of v) {
			const decoded = decode(f, e);
			if (decoded.status === 'ok') {
				result.push(decoded.t);
			} else {
				return err(`issue decoding ${e}`);
			}
		}

		return ok(result);
	};

// Create a key-value decoder. This is distinct from the `decodeRecord` decoder in that each decoder
// will receive the root object as their argument rather than the named field.
//
// These two decoders are equivalent, example:
// const userRecordDecoder = decodeRecord({ name: stringDecoder }))
// const userObjectDecoder = decodeObject({ name: decodeField('name', stringDecoder) }))
export const decodeObject =
	<T>(decoders: { [K in keyof T]: Decoder<T[K]> }) =>
	(v: JValue): Value<T> => {
		if (typeof v !== 'object' || v === null || Array.isArray(v)) {
			return err(`${v} is not an object`);
		}

		const result: Partial<T> = {};
		for (const field in decoders) {
			const decoded = decode(decoders[field], v);
			if (decoded.status === 'ok') {
				result[field] = decoded.t;
			} else {
				return err(`issue decoding 'obj.${field}': ${decoded.msg}`);
			}
		}

		return ok(result as T);
	};

// Create a key-value decoder
//
// example:
// const userDecoder = decodeRecord({ name: stringDecoder, age: numberDecoder }))
export const decodeRecord =
	<T>(decoders: { [K in keyof T]: Decoder<T[K]> }): Decoder<T> =>
	(v: JValue): Value<T> => {
		// TODO: this could be implemented by composing decodeObject and decodeField; but need to first rewrite decodeField
		if (typeof v !== 'object' || v === null || Array.isArray(v)) {
			return err(`${v} is not an object`);
		}

		const result: Partial<T> = {};

		for (const field in decoders) {
			const decoded = decode(decoders[field], v[field]);
			if (decoded.status === 'ok') {
				result[field] = decoded.t;
			} else {
				return err(
					`issue decoding 'record.${field}' ${v[field]}: ${decoded.msg}`
				);
			}
		}

		return ok(result as T);
	};

// Try a series of decoders until one succeeds. If they all fail, the decoder fails to decode.
// You can use `succeed` as a final case to provide a "default" value, such as:
// decodeOneOf(decodeRecord({ name: stringDecoder }), stringDecoder, succeed(null))
export const decodeOneOf =
	<T>(...decoders: Decoder<T>[]): Decoder<T> =>
	(v: JValue) => {
		for (const decoder of decoders) {
			const result = decode(decoder, v);
			if (result.status === 'ok') {
				return result;
			}
		}

		return err(`None of the decoders succeeded for ${v}`);
	};

// If a decoder fails, succeed with undefined instead
export const decodeOptional = <T>(decoder: Decoder<T>) =>
	decodeOneOf(decoder, succeed(undefined));

// re-export with tidier namespacing
export const decoders = {
	null: nullDecoder,
	bool: booleanDecoder,
	undefined: undefinedDecoder,
	number: numberDecoder,
	string: stringDecoder,
	json: jsonDecoder,

	array: decodeArray,
	record: decodeRecord,
	object: decodeObject,
	field: decodeField,

	map: decodeMap,
	andthen: decodeAndThen,
	oneOf: decodeOneOf,
	optional: decodeOptional,
	fail: fail,
	succeed: succeed,

	parse: decodeParser,
	decode: decode,
	resolve: resolve,
	with: decodeWith,
};

// A closure where you can set up your decoders with minimal imports
export const withDecoders = <T>(f: (t: typeof decoders) => T): T => f(decoders);
