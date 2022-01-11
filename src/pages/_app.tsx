import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from '../components/header'

import { theme } from '../styles/theme'

import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return( 
    <ChakraProvider theme={theme}>
      <Box as="main" maxW="1440" m="0 auto">
        <Header />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
