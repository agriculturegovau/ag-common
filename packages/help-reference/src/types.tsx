import { Decoder, withDecoders } from './decoder';
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

export const { articleDecoder, referenceDecoder } = withDecoders((t) => {
	const documentelement = t.map(t.json, (v) => v as DocumentElement);
	const documentelements = t.array(documentelement);

	const data = <T,>(decoder: Decoder<T>) =>
		t.map(t.record({ data: decoder }), (t) => t.data);

	const article_ = t.record({
		slug: t.string,
		title: t.string,
		intro: documentelements,
		content: documentelements,
	});

	const articleDecoder = data(article_);
	const referenceDecoder = data(
		t.record({
			slug: t.string,
			label: t.string,
			article: t.string,
			referenceText: t.string,
			content: documentelements,
			helpArticle: t.oneOf(article_, t.null, t.undefined),
		})
	);

	return { articleDecoder, referenceDecoder };
});