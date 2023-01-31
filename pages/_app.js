// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      link: '#10253E'
    }
  }
})

console.log('lightTheme', lightTheme);

// const darkTheme = createTheme({
//   type: 'dark',
//   theme: {...} //optional
// })

export default function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className
      }}
    >
      <NextUIProvider theme={lightTheme} >
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}
