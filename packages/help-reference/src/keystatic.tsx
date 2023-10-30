import { PropsWithChildren } from 'react';

export interface DocumentElement {}

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

export const DocumentRenderer = (
	props: PropsWithChildren<{ document: DocumentElement[] }>
) => <div>doc</div>;
