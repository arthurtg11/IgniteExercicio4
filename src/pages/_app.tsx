import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Header from '../components/Header'
import '../styles/index.css'
import 'swiper/css/bundle'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header props={router}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
