import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Navbar from '../components/Navbar'
import DashboardShell from '../components/DashboardShell'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <DashboardShell>
        <Component {...pageProps} />
      </DashboardShell>
    </GeistProvider>
  )

}

export default MyApp
