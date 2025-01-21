import { withFluid } from '@fluid-tailwind/tailwind-merge';
import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

export const twMerge = (...inputs: ClassValue[]) => {
	return extendTailwindMerge(withFluid)(clsx(...inputs));
};
