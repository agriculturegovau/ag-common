import { AnalyticsEventHandler } from './Events';
import { analyticsExportServiceVars as vars } from './vars';

export const gtag = (): typeof window.gtag | undefined => window?.gtag;

export const gtagEventHandler = ():
	| { onEvent: AnalyticsEventHandler }
	| undefined => ({
	onEvent: (...params) => gtag()?.('event', ...params),
});

export type ConfigParams =
	| Gtag.ControlParams
	| Gtag.EventParams
	| Gtag.ConfigParams
	| Gtag.CustomParams;

export const gtagConfig = (config: ConfigParams) =>
	gtag()?.('config', vars.googleAnalyticsMeasurementID, config);
