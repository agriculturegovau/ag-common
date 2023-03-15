import * as React from 'react';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { Tags } from '@ag.ds-next/react/tags';
import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import { FC } from './FC';

type Values<T> = T[keyof T];

type Union<T> = Values<{
	[Prop in keyof T]: [Prop, T[Prop]];
}>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;

export const supportedSubnavs = {
	sidenav: SideNav,
	progressindicator: ProgressIndicator,
	custom: ({ render: Render }: { render: FC }) => <Render />,
} as const;

export type SupportedSubnavs = typeof supportedSubnavs;

export type Subnav = Values<{
	[C in keyof SupportedSubnavs]: { c: C } & React.ComponentProps<
		SupportedSubnavs[C]
	>;
}>;

export const Subnav = ({ c, ...props }: Subnav) => {
	const C = supportedSubnavs[c] as any;
	return (<C {...props} />) as ReactElement;
};

export type Identifier = string;

export type SubnavState = { [K in Identifier]: Subnav };

export const createSubnavContext = () => {
	const Ctx = createContext({
		navs: {} as SubnavState,
		storeNav: (identifier: string, n: Subnav) => {},
		removeNav: (identifier: string) => {},
	});

	const useSubnavs = () => {
		const { navs } = useContext(Ctx);
		return navs;
	};

	const Provider: FC = ({ children }) => {
		const [navs, setNav] = useState<SubnavState>({});

		return (
			<Ctx.Provider
				value={{
					navs,
					storeNav: (identifier, e) => {
						setNav((ec) => ({ ...ec, [identifier]: e }));
					},
					removeNav: (identifier) => {
						setNav((ec) => {
							const { [identifier]: x, ...rest } = ec;
							return rest;
						});
					},
				}}
			>
				{children}
			</Ctx.Provider>
		);
	};

	const Subnavs = () => {
		const navs = useSubnavs();

		return (
			<>
				{Object.entries(navs).map(([identifier, subnav]) => (
					<Subnav key={identifier} {...subnav} />
				))}
			</>
		);
	};

	const SetSubnav = ({
		identifier,
		...e
	}: Subnav & { identifier: Identifier }) => {
		const { storeNav, removeNav } = useContext(Ctx);

		useEffect(() => {
			storeNav(identifier, e);
			return () => {
				removeNav(identifier);
			};
		}, [identifier]);

		return null;
	};

	return {
		useSubnavs,
		Provider,
		Subnavs,
		SetSubnav,
	};
};
