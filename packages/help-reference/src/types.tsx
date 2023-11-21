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
	articleSlug: string;
	referenceText: string;
	content: DocumentElement[];

	article: HelpArticleT | null;
};
