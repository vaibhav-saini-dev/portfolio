import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

// Initializes the font
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={ `${montserrat.variable} font-mont` }>
      <Component {...pageProps} />
    </main>
  );
}
