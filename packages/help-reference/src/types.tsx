import {
	Decoder,
	arrayDecoder,
	jsonDecoder,
	mapDecoder,
	nullDecoder,
	objDecoder,
	oneOfDecoders,
	stringDecoder,
	undefinedDecoder,
} from './decoder';
import { Element } from './renderer';

export type DocumentElement = Element;

export type HelpArticleT = {
	slug: string;
	title: string;
	intro: DocumentElement[];
	content: DocumentElement[];
};

export type HelpReferenceT = {
	slug: string;
	label: string;
	article: string;
	referenceText: string;
	content: DocumentElement[];
	helpArticle?: HelpArticleT | null;
};

const documentElementDecoder = arrayDecoder(
	mapDecoder(jsonDecoder, (v) => v as DocumentElement)
);

const dataDecoder = <T,>(decoder: Decoder<T>) =>
	mapDecoder(objDecoder({ data: decoder }), (t) => t.data);

const articleDecoder_ = objDecoder({
	slug: stringDecoder,
	title: stringDecoder,
	intro: documentElementDecoder,
	content: documentElementDecoder,
});

export const articleDecoder = dataDecoder(articleDecoder_);
export const referenceDecoder = dataDecoder(
	objDecoder({
		slug: stringDecoder,
		label: stringDecoder,
		article: stringDecoder,
		referenceText: stringDecoder,
		content: documentElementDecoder,
		helpArticle: oneOfDecoders(articleDecoder_, nullDecoder, undefinedDecoder),
	})
);
