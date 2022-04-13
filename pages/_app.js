import GlobalStyle from '../src/theme/globalStyle'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <GlobalStyle />
     <Component {...pageProps} />
    </>
  )
}

export default MyApp
