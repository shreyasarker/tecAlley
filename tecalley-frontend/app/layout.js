import { Urbanist } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata = {
  title: 'TecAlley',
  description: 'Shop you favorite tech gadgets with ease.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans`} suppressHydrationWarning={true}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
