// @types/react broke this in v18
export type PropsWithChildren<P> = P & {
	children?: React.ReactNode | undefined;
};

export type BaseFC<P> = { [k in keyof React.FC<P>]: React.FC<P>[k] };

export interface FunctionComponent<P = {}> extends BaseFC<P> {
	(props: PropsWithChildren<P>, context?: any): React.ReactElement<
		any,
		any
	> | null;
}

export type FC<P = {}> = FunctionComponent<P>;
