import { Roboto_Serif } from "next/font/google";
import { Alegreya } from "next/font/google";

export const roboto = Roboto_Serif({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '700'],
	variable: '--font-roboto',
});

export const alegreya = Alegreya({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '700'],
	variable: '--font-alegreya',
});
