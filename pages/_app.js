// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import { NextUIProvider } from '@nextui-org/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
