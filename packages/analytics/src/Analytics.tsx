import * as React from 'react';

import { AnalyticsEventHandler, AnalyticsListener } from './Events';
import {
	GoogleAnalytics,
	Hotjar,
	ScriptComponentProvider,
	ScriptComponents,
} from './Scripts';
import { analyticsExportServiceVars as vars } from './vars';
import { gtagEventHandler } from './reporters';

export interface AnalyticsProps {
	/** Callback that will be invoked with fired analytics events. */
	onEvent?: AnalyticsEventHandler;

	/** When false, prevent the Google Analytics gtag script from being loaded */
	googleAnalytics?: boolean;

	/** When false, prevent the Hotjar script from being loaded */
	hotjar?: boolean;

	children: React.ReactNode;
}

interface ScriptComponentProps {
	/** Provide components that can render a script tag based on your web framework of choice */
	scriptComponents: ScriptComponents;
}

export const Analytics = (t: AnalyticsProps & ScriptComponentProps) => {
	// Just fail silently if we don't have any event handlers
	const emptyEvent = () => {};

	return (
		<ScriptComponentProvider {...t.scriptComponents}>
			{t.googleAnalytics === false ? null : (
				<GoogleAnalytics measurementID={vars.googleAnalyticsMeasurementID} />
			)}
			{t.hotjar === false ? null : <Hotjar hjid={vars.hotjarID} />}

			<AnalyticsListener
				onEvent={t.onEvent ?? gtagEventHandler()?.onEvent ?? emptyEvent}
			>
				{t.children}
			</AnalyticsListener>
		</ScriptComponentProvider>
	);
};
