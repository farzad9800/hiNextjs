import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local'

export const vazirFont = localFont({ src: '../../public/fonts/vazirFont/Vazir.woff2' })

export const iranYekanFont = localFont({ src: '../../public/fonts/iranYekan/IRANYekan.ttf' })

export const digikalaFont = localFont({ src: '../../public/fonts/digikala/Digikala -_font.ttf' })

export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});