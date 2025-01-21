import useTheme, { ThemeMode } from '~/hooks/useTheme';

export interface ThemeSwitcherProps {}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { mode, handleModeChange } = useTheme();

	return (
		<div
			className="flex h-screen w-full items-center justify-center bg-blue-300 dark:bg-slate-900"
			{...props}
		>
			<label className="inline-flex cursor-pointer items-center">
				<select
					value={mode}
					onChange={(event) => {
						handleModeChange(event.target.value as ThemeMode);
					}}
				>
					<option value="light">Sáng</option>
					<option value="dark">Tối</option>
					<option value="system">Hệ thống</option>
				</select>
			</label>
		</div>
	);
};

export default ThemeSwitcher;
