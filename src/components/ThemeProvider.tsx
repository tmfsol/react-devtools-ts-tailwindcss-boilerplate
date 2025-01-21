import { PropsWithChildren, useEffect } from 'react';

import useTheme from '~/hooks/useTheme';

export interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const { mode } = useTheme();

	useEffect(() => {
		if (mode === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [mode]);

	return children;
};

export default ThemeProvider;
