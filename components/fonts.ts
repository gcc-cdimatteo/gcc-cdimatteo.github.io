import { Lusitana, Merriweather } from 'next/font/google';

export const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});
