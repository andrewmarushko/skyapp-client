import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// INFO: this utility will takes all tailwind classes and make optimization for it.
// For example => 'px-2 py-2' will create one class 'p-2'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
