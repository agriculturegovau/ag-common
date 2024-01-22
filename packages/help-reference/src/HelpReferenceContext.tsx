import { createContext } from 'react';

export const HelpReferenceContext = createContext({
	contentAPI: 'https://api.agriculture.gov.au/exports/content/v1/help',
	exportServiceURL: 'https://exports.agriculture.gov.au',
});

export const HelpReferenceProvider = HelpReferenceContext.Provider;
