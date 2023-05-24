import { PropsWithChildren } from 'react';
import { AnalyticsEventHandler, AnalyticsListener } from './Events';
import {
	GoogleAnalytics,
	Hotjar,
	ScriptComponentProvider,
	ScriptComponentsContextType,
} from './Scripts';
import { analyticsExportServiceVars as vars } from './vars';
import { gtagEventHandler } from './reporters';

export type AnalyticsProps = PropsWithChildren<{
	/** Callback that will be invoked with fired analytics events. */
	onEvent?: AnalyticsEventHandler;
	/** When false, prevent the Google Analytics gtag script from being loaded */
	googleAnalytics?: boolean;
	/** When false, prevent the Hotjar script from being loaded */
	hotjar?: boolean;
	/** Provide components that can render a script tag based on your web framework of choice */
	scriptComponents: ScriptComponentsContextType;
}>;

const emptyEvent = () => undefined;

export const Analytics = ({
	children,
	onEvent,
	googleAnalytics,
	hotjar,
	scriptComponents,
}: AnalyticsProps) => {
	return (
		<ScriptComponentProvider {...scriptComponents}>
			{googleAnalytics === false ? null : (
				<GoogleAnalytics measurementID={vars.googleAnalyticsMeasurementID} />
			)}
			{hotjar === false ? null : <Hotjar hjid={vars.hotjarID} />}
			<AnalyticsListener
				// Just fail silently if we don't have any event handlers
				onEvent={onEvent ?? gtagEventHandler()?.onEvent ?? emptyEvent}
			>
				{children}
			</AnalyticsListener>
		</ScriptComponentProvider>
	);
};
