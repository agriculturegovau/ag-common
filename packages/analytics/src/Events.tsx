import { createContext, useContext, PropsWithChildren } from 'react';

export type AnalyticsEventData = Record<string, string | number>;

export type AnalyticsEventName = string;

export type AnalyticsEventHandler = (
	eventName: AnalyticsEventName,
	eventData: AnalyticsEventData
) => void;

const AnalyticsListenerContext = createContext<AnalyticsEventHandler>(
	() => null
);

const AnalyticsContextContext = createContext<AnalyticsEventData>({});

export type AnalyticsContextProps = PropsWithChildren<{
	/** Data will be merged and sent with each event's data when fired */
	data: AnalyticsEventData;
}>;

export type AnalyticsListenerProps = PropsWithChildren<{
	/** Callback that will be invoked with fired analytics events. */
	onEvent: AnalyticsEventHandler;
}>;

/** Invoke this callback with any events triggered inside this provider */
export const AnalyticsListener = ({
	children,
	onEvent,
}: AnalyticsListenerProps) => {
	const parentContext = useContext<AnalyticsEventHandler>(
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
	const parentContext = useContext(AnalyticsContextContext) || {};
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
export const useAnalytics = () => {
	const analyticsContext = useContext(AnalyticsContextContext);
	const listenerContext = useContext(AnalyticsListenerContext);
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
