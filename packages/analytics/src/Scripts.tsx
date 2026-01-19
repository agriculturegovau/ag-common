import { createContext, Fragment, PropsWithChildren, useContext } from 'react';

// The properties that a Script component should support
export type ScriptComponentProps = PropsWithChildren<{
	id: string;
	src?: string;
}>;

export type ScriptComponentsContextType = {
	/** Provide a component that can render a script tag for your web framework such as `next/script` */
	Script: (props: ScriptComponentProps) => JSX.Element | null;
};

const ScriptComponentsContext = createContext<ScriptComponentsContextType>({
	Script: () => null,
});

export type ScriptComponentProviderProps =
	PropsWithChildren<ScriptComponentsContextType>;

export const ScriptComponentProvider = ({
	children,
	Script = () => null,
}: ScriptComponentProviderProps) => {
	return (
		<ScriptComponentsContext.Provider value={{ Script }}>
			{children}
		</ScriptComponentsContext.Provider>
	);
};

const useScriptComponents = () => {
	const context = useContext(ScriptComponentsContext);
	return { Script: context.Script };
};

export type GoogleAnalyticsProps = { measurementID: string };

export const GoogleAnalytics = ({ measurementID }: GoogleAnalyticsProps) => {
	const { Script } = useScriptComponents();
	return (
		<Fragment>
			<Script
				id="ag-common-analytics:google-src"
				src={`https://www.googletagmanager.com/gtag/js?id=${measurementID}`}
			/>
			<Script id="ag-common-analytics:google-init">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementID}');
        `}
			</Script>
		</Fragment>
	);
};
