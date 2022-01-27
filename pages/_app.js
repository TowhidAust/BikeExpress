import Layout from '../components/common/layout/layout'
import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const THEME = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});
function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Head>
        <>
          <title>BikeHub</title>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </>
      </Head>
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>

    </Layout>
  )
}

export default MyApp
