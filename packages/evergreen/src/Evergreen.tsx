import React, { useState } from 'react';
import Script from 'next/script';

export type EvergreenProps = {
	authenticated?: boolean;
	activePath?: string;
	handleSignIn?: () => void;
	handleSignOut?: () => void;
	mainNavId?: string;
};

export const EvergreenHeader = ({
	authenticated,
	activePath,
	handleSignIn,
	handleSignOut,
	mainNavId = 'main-nav',
}: EvergreenProps) => (
	<>
		<ag-common-header
			ref={node => {
				if (node === null) {
					return;
				}

				Object.assign(node, {
					activePath,
					handleSignIn,
					handleSignOut,
					isAuthenticated: authenticated,
					mainNavId,
				});
			}}
		></ag-common-header>
	</>
);

export const EvergreenFooter = () => <ag-common-footer></ag-common-footer>;

export const Evergreen = (props: EvergreenProps) => {
	return (
		<>
			<Script
				type="module"
				src="https://unpkg.com/@ag.labs/custom-elements@^1"
			/>
			<EvergreenHeader {...props} />
		</>
	);
};

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['ag-common-header']: EvergreenProps;
			['ag-common-footer']: {};
		}
	}
}
