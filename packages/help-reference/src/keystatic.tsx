import { Element } from './renderer';

export type DocumentElement = Element;

export interface HelpReferenceT {
	slug: string;
	label: string;
	articleSlug: string;
	referenceText: string;
	content: DocumentElement[];

	article?: HelpArticleT | null;
}

export interface HelpArticleT {
	slug: string;
	title: string;
	intro: DocumentElement[];
	content: DocumentElement[];
}
