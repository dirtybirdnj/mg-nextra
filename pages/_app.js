// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import 'the-new-css-reset/css/reset.css'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
