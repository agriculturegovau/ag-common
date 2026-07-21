import { createContext, useContext } from 'react';
import { AppRoutes } from './routes';
import { Business } from './defs';

type LayoutContext = {
	onSignOutClick: () => void;
	routes: AppRoutes;
	selectedBusiness?: Business;
};

const LayoutContext = createContext<LayoutContext | undefined>(undefined);

export const useOpenSignOutModal = () => {
	return useContext(LayoutContext)?.onSignOutClick;
};

export const useLayoutContext = () => useContext(LayoutContext);

export const LayoutProvider = LayoutContext.Provider;
