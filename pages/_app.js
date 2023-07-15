import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/components/context/LanguageContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  )
}
