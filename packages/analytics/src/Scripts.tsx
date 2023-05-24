import {
	createContext,
	Fragment,
	PropsWithChildren,
	ReactElement,
	useContext,
} from 'react';

// The properties that a Script component should support
export type ScriptComponentProps = PropsWithChildren<{
	id: string;
	src?: string;
}>;

const NullScript = () => null;

export type ScriptComponentsContextType = {
	/** Provide a component that can render a script tag for your web framework such as `next/script` */
	Script: (props: ScriptComponentProps) => ReactElement;
};

const ScriptComponentsContext = createContext<ScriptComponentsContextType>({
	Script: () => <Fragment />,
});

export type ScriptComponentProviderProps =
	PropsWithChildren<ScriptComponentsContextType>;

export const ScriptComponentProvider = ({
	children,
	Script,
}: ScriptComponentProviderProps) => {
	return (
		<ScriptComponentsContext.Provider value={{ Script }}>
			{children}
		</ScriptComponentsContext.Provider>
	);
};

export const useScriptComponents = () => {
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

export type HotjarProps = { hjid: string };

export const Hotjar = ({ hjid }: HotjarProps) => {
	const { Script } = useScriptComponents();
	return (
		<Script id="ag-common-analytics:hotjar">
			{`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hjid},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`}
		</Script>
	);
};
