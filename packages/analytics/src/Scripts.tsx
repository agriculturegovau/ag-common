import {
	createContext,
	Fragment,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

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

export type QualtricsScriptProps = { zone: string; zoneID: `ZN_${string}` };

export const Qualtrics = ({ zone, zoneID }: QualtricsScriptProps) => {
	const { Script } = useScriptComponents();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const target = <div id={zoneID} aria-hidden="true" />;
	return (
		<Fragment>
			<Script id="ag-common-analytics:qualtrics">
				{`(function(){var g=function(g){
      this.go=function(){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)};
      this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
      try{(new g("https://${zone}.siteintercept.qualtrics.com/SIE/?Q_ZID=${zoneID}")).start()}catch(i){}})();`}
			</Script>
			{createPortal(target, document.body)}
		</Fragment>
	);
};
