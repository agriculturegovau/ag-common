import * as React from 'react';

export type AnalyticsEventData = Record<string, string | number>;

export type AnalyticsEventName = string;

export type AnalyticsEventHandler = (
	eventName: AnalyticsEventName,
	eventData: AnalyticsEventData
) => void;

const AnalyticsListenerContext = React.createContext<AnalyticsEventHandler>(
	() => null
);

const AnalyticsContextContext = React.createContext<AnalyticsEventData>({});

export type AnalyticsContextProps = {
	/** Data will be merged and sent with each event's data when fired */
	data: AnalyticsEventData;

	children: React.ReactNode;
};

export type AnalyticsListenerProps = {
	/** Callback that will be invoked with fired analytics events. */
	onEvent: AnalyticsEventHandler;

	children: React.ReactNode;
};

/** Invoke this callback with any events triggered inside this provider */
export const AnalyticsListener = ({
	children,
	onEvent,
}: AnalyticsListenerProps) => {
	const parentContext = React.useContext<AnalyticsEventHandler>(
		AnalyticsListenerContext
	);

	return (
		<AnalyticsListenerContext.Provider
			value={(name, data) => {
				onEvent(name, data);
				parentContext?.(name, data);
			}}
		>
			{children}
		</AnalyticsListenerContext.Provider>
	);
};

/** Create a context that merges its data with parent contexts and each triggered event */
export const AnalyticsContext = ({ data, children }: AnalyticsContextProps) => {
	const parentContext = React.useContext(AnalyticsContextContext) || {};
	const childContext = { ...parentContext, ...data };

	return (
		<AnalyticsContextContext.Provider value={childContext}>
			{children}
		</AnalyticsContextContext.Provider>
	);
};

export type AnalyticsHookType = {
	/** Fire an event to the `AnalyticsListener` context. Data will be merged with current AnalyticsContext */
	trackEvent: (name: AnalyticsEventName, data?: AnalyticsEventData) => void;
};

/** Track an event with merged context data to all listeners  */
export const useAnalytics = (): AnalyticsHookType => {
	const analyticsContext = React.useContext(AnalyticsContextContext);
	const listenerContext = React.useContext(AnalyticsListenerContext);
	const trackEvent = (
		name: AnalyticsEventName,
		data?: AnalyticsEventData
	): void => {
		if (!listenerContext) return;
		listenerContext(name, { ...analyticsContext, ...data });
	};

	return {
		trackEvent,
	};
};
