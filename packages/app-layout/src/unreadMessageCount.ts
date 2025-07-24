import { z, type ZodType } from 'zod';
import useSWR from 'swr';
import { createContext, useContext } from 'react';

type AuthToken = {
	accessToken: string;
};

type RemoteDetails = {
	messageCentreBaseURL: string;
};

export const authHeaders = (token: AuthToken) => {
	const headers = new Headers();
	headers.set('Authorization', `Bearer ${token.accessToken}`);

	return { headers };
};

export const unreadCountSchema = z.object({
	totalUnreadMessageCount: z.number(),
	individual: z.object({
		unreadMessageCount: z.number(),
	}),
	businesses: z.array(
		z.object({
			partyUniqueId: z.string().uuid(),
			unreadMessageCount: z.number(),
		})
	),
});

type UnreadCounts = z.infer<typeof unreadCountSchema>;

export const resolveSchema =
	<Output>(schema: ZodType<Output>) =>
	(data: any) => {
		const result = schema.safeParse(data);
		return result.success
			? Promise.resolve(result.data)
			: Promise.reject(result.error);
	};

const resolveUnreadCount = resolveSchema(unreadCountSchema);

type MessageCentreConfig = AuthToken & RemoteDetails;

/*
type CountContext = AuthToken & RemoteDetails;

const defaults = {
	messageCentreURL:
		'https://accounts.exports.agriculture.gov.au/message-centre',
};

const ClientContext = createContext<Partial<CountContext>>(defaults);
const useClientContext = () => useContext(ClientContext);
*/

const resolveJSON = (res: Response) =>
	res.ok
		? res.json()
		: Promise.reject(new Error('Invalid response: ' + res.statusText));

const fetchUnreadCountDetails = async (config: MessageCentreConfig) => {
	const { headers } = authHeaders(config);

	return fetch(`${config.messageCentreBaseURL}/inbox/unread-count-detail`, {
		headers,
	})
		.then(resolveJSON)
		.then(resolveUnreadCount);
};

const fetchUnreadMessageCount = async (config: MessageCentreConfig) =>
	fetchUnreadCountDetails(config).then(
		(details) => details.totalUnreadMessageCount
	);

type MessageCentreFetcher<Response> = (
	params: MessageCentreConfig
) => Promise<Response>;

export const useUnreadMessageDetails = (
	params: MessageCentreConfig,
	fetcher: MessageCentreFetcher<UnreadCounts> = fetchUnreadCountDetails
) => {
	return useSWR(params, fetcher);
};

export const useUnreadMessageCount = (
	params: MessageCentreConfig,
	fetcher: MessageCentreFetcher<number> = fetchUnreadMessageCount
) => {
	return useSWR(params, fetcher).data;
};
