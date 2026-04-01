import { PropsWithChildren } from 'react';
import { AnalyticsEventHandler, AnalyticsListener } from './Events';
import {
	GoogleAnalytics,
	Qualtrics,
	QualtricsScriptProps,
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

	/** When false or missing, prevent the Qualtrics script from being loaded */
	qualtrics?: QualtricsScriptProps | false;

	/** Provide components that can render a script tag based on your web framework of choice */
	scriptComponents: ScriptComponentsContextType;

	/**
	 * @deprecated Hotjar is no longer supported, setting this to true will have no effect.
	 * This property is for compatibility and will be removed in a future version.
	 */
	hotjar?: boolean;
}>;

const emptyEvent: AnalyticsEventHandler = () => {
	return;
};

export const Analytics = ({
	children,
	onEvent,
	googleAnalytics,
	qualtrics,
	scriptComponents,
}: AnalyticsProps) => {
	return (
		<ScriptComponentProvider {...scriptComponents}>
			{googleAnalytics === false ? null : (
				<GoogleAnalytics measurementID={vars.googleAnalyticsMeasurementID} />
			)}

			{qualtrics ? (
				<Qualtrics zone={qualtrics.zone} zoneID={qualtrics.zoneID} />
			) : null}

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
