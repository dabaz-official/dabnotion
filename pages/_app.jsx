import { Inter } from 'next/font/google';

import './tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}