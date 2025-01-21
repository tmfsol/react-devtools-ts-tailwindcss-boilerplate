import React, { type ReactNode } from 'react';

export interface ProviderProps {
	children?: ReactNode;
	[key: string]: any;
}

export interface ComponentWithProps {
	Provider: React.ComponentType<any>;
	props?: ProviderProps;
}

const buildProvidersTree = (componentsWithProps: ComponentWithProps[]) => {
	const initialComponent = ({ children }: { children: ReactNode }) => {
		return <>{children}</>;
	};

	return componentsWithProps.reduce((AccumulatedComponents, { Provider, props = {} }) => {
		return ({ children, ...restProps }: { children: ReactNode }) => {
			return (
				<AccumulatedComponents>
					<Provider
						{...props}
						{...restProps}
					>
						{children}
					</Provider>
				</AccumulatedComponents>
			);
		};
	}, initialComponent);
};

export default buildProvidersTree;
