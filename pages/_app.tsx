import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { App } from '../components/App';
import { CssBaseline } from '@mui/material'
import { UiProvider } from '../context';


function MyApp({ Component, pageProps }: AppProps) {



  return (
    <UiProvider>
      {/* Envolvemos en Componente App para acceder al context del UI y usar los themes */}
      <App >
        <CssBaseline />
        <Component {...pageProps} />
      </App>
    </UiProvider>
  )
}

export default MyApp
