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

const emptyEvent: AnalyticsEventHandler = () => {
	return;
};

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
				onEvent={(...params) => {
					/* !!! this is a load-bearing line.
					 *  we need to resolve handler here instead of inlined on one line below,
					 * otherwise it will cause runtime issues after problematic babel inlining.
					 */
					const gtagHandler = gtagEventHandler();

					// fail silently with emptyEvent if we don't have any event handlers
					return (onEvent ?? gtagHandler?.onEvent ?? emptyEvent)(...params);
				}}
			>
				{children}
			</AnalyticsListener>
		</ScriptComponentProvider>
	);
};
