import { Element } from './renderer';

export type DocumentElement = Element;

export interface HelpReference {
	slug: string;
	label: string;
	referenceText: string;
	content: DocumentElement[];

	article?: HelpArticle;
}

export interface HelpArticle {
	slug: string;
	title: string;
	intro: DocumentElement[];
	content: DocumentElement[];
}
