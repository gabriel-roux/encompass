import type { AppProps } from 'next/app'
import { ThemeProvider } from 'react-bootstrap'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Component {...pageProps} />
  </ThemeProvider>
}
