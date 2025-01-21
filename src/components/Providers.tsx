import { PropsWithChildren, StrictMode } from 'react';

import ThemeProvider from '~/components/ThemeProvider';
import buildProvidersTree from '~/utils/buildProvidersTree';
import envConfig from '~/utils/envConfig';

export interface ProvidersProps extends PropsWithChildren {}

const Providers = ({ children }: ProvidersProps) => {
	const components = [
		{
			Provider: StrictMode,
			props: {}
		},
		{
			Provider: ThemeProvider,
			props: {}
		}
	];

	const ProviderTree = buildProvidersTree(components);

	return (
		<ProviderTree>
			{children}

			{envConfig.MODE === 'development' && <div className="debug-screens" />}
		</ProviderTree>
	);
};

export default Providers;
