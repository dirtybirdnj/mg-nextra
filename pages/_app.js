// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import { NextUIProvider } from '@nextui-org/react';
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
