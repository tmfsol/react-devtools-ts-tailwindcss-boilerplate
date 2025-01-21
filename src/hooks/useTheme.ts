import { useCallback } from 'react';
import { create } from 'zustand';
import { PersistStorage, persist } from 'zustand/middleware';

import { localStorage } from '~/utils/localStorage';

export type ThemeMode = 'dark' | 'light' | 'system';

export interface ThemeState {
	mode: ThemeMode;
}

export const useThemeStore = create<ThemeState>()(
	persist(
		() => {
			return {
				mode: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') as ThemeMode
			};
		},
		{
			name: 'theme',
			storage: localStorage as PersistStorage<ThemeState>
		}
	)
);

const useTheme = () => {
	const { mode } = useThemeStore();

	const handleModeChange = useCallback((mode: ThemeMode) => {
		if (mode === 'system') {
			useThemeStore.setState({
				mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			});
		} else {
			useThemeStore.setState({
				mode
			});
		}
	}, []);

	return {
		mode,
		handleModeChange
	};
};

export default useTheme;
