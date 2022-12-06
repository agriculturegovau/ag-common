import * as React from 'react';

// The properties that a Script component should support
export interface ScriptComponentProps {
	id?: string | undefined;
	src?: string | undefined;
	children?: React.ReactNode;
	strategy?:
		| 'afterInteractive'
		| 'lazyOnload'
		| 'beforeInteractive'
		| undefined;
}

const NullScript: React.FunctionComponent<ScriptComponentProps> = () => null;

export interface ScriptComponents {
	/** Provide a component that can render a script tag for your web framework such as `next/script` */
	Script: React.FunctionComponent<ScriptComponentProps>;
}

export interface ScriptComponentProviderProps extends ScriptComponents {
	children: React.ReactNode;
}

const ComponentsContext = React.createContext<Partial<ScriptComponents>>({});

export const ScriptComponentProvider = (t: ScriptComponentProviderProps) => {
	const parentContext = React.useContext(ComponentsContext);

	return (
		<ComponentsContext.Provider
			value={{ Script: t.Script ?? parentContext.Script }}
		>
			{t.children}
		</ComponentsContext.Provider>
	);
};

export const useScriptComponents = (): ScriptComponents => {
	const t = React.useContext(ComponentsContext);
	return { Script: t.Script ?? NullScript };
};

export const GoogleAnalytics = (t: { measurementID: string }) => {
	const { Script } = useScriptComponents();

	return (
		<>
			<Script
				id="ag-common-analytics:google-src"
				src={`https://www.googletagmanager.com/gtag/js?id=${t.measurementID}`}
				strategy="afterInteractive"
			/>
			<Script id="ag-common-analytics:google-init" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t.measurementID}');
        `}
			</Script>
		</>
	);
};

export const Hotjar = (t: { hjid: string }) => {
	const { Script } = useScriptComponents();

	return (
		<>
			<Script id="ag-common-analytics:hotjar">
				{`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${t.hjid},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`}
			</Script>
		</>
	);
};
