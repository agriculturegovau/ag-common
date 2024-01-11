type JValue = string | number | boolean | null | undefined | JArr | JObj;

type JArr = Array<JValue>;
type JObj = { [key: string]: JValue };

type Value<T> = { status: 'ok'; t: T } | { status: 'err'; msg: string };

export type Decoder<T> = (v: JValue) => Value<T>;
export type Decoded<D> = D extends Decoder<infer T> ? T : never;

const ok = <T>(t: T): Value<T> => ({ status: 'ok', t });

const err = (msg: string): Value<never> => ({ status: 'err', msg });

export const decode = <T>(f: Decoder<T>, v: JValue): Value<T> => f(v);

export const resolve =
	<T>(f: Decoder<T>) =>
	(v: JValue) => {
		const t = decode(f, v);
		return t.status === 'ok' ? Promise.resolve(t.t) : Promise.reject(t.msg);
	};

export const succeed =
	<T>(t: T): Decoder<T> =>
	(v: JValue) =>
		ok(t);

export const fail =
	(msg: string): Decoder<never> =>
	(v: JValue) =>
		err(msg);

export const andthen = <T, R>(
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

export const mapDecoder = <T, R>(decoder: Decoder<T>, f: (t: T) => R) =>
	andthen(decoder, (v) => succeed(f(v)));

export const decodeWith = <T, R>(
	f: Decoder<T>,
	v: JValue,
	resultfn: (t: T) => R,
	errfn?: () => void
) => {
	const r = f(v);
	return r.status === 'ok' ? resultfn(r.t) : errfn?.() ?? undefined;
};

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

export const fieldDecoder = <T>(field: string, f: Decoder<T>) =>
	mapDecoder(record({ [field]: f }), (t) => t[field]);

export const parseDecoder = <T>(
	f: (term: string) => T | undefined
): Decoder<T> =>
	andthen(stringDecoder, (v) => {
		const r = f(v);
		return r === undefined
			? fail(`${v} failed to parse ${f.name}`)
			: succeed(r);
	});

export const arrayDecoder =
	<T>(f: Decoder<T>) =>
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

export const objDecoder =
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

export const record =
	<T>(decoders: { [K in keyof T]: Decoder<T[K]> }) =>
	(v: JValue): Value<T> => {
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

export const oneOfDecoders =
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

export const optionalDecoder = <T>(decoder: Decoder<T>) =>
	oneOfDecoders(decoder, succeed(undefined));
