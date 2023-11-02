import { Element } from './renderer';

export type DocumentElement = Element;

export interface HelpReferenceT {
	slug: string;
	label: string;
	referenceText: string;
	content: DocumentElement[];

	article?: HelpArticleT;
}

export interface HelpArticleT {
	slug: string;
	title: string;
	intro: DocumentElement[];
	content: DocumentElement[];
}
