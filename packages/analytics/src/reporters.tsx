import { AnalyticsEventHandler } from './Events';
import { analyticsExportServiceVars as vars } from './vars';

type onEventHandler = { onEvent: AnalyticsEventHandler };

export const gtag = (): typeof window.gtag | undefined => window?.gtag;

const eventHandler = (src: Gtag.Gtag): onEventHandler => ({
	onEvent: (...params) => src('event', ...params),
});

export const gtagEventHandler = (): onEventHandler | undefined => {
	const tag = gtag();
	return tag ? eventHandler(tag) : undefined;
};

export type ConfigParams =
	| Gtag.ControlParams
	| Gtag.EventParams
	| Gtag.ConfigParams
	| Gtag.CustomParams;

export const gtagConfig = (config: ConfigParams) =>
	gtag()?.('config', vars.googleAnalyticsMeasurementID, config);
