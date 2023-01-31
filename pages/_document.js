import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}
          <link rel="shortcut icon" href="/img/favicon_io/favicon.ico" />
          <NextScript src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></NextScript>
          <NextScript src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="M2IyMmNmYTEtNjQ0Yi00MjI2LTkwOTMtZGIxOWY0MDZlNTgzNjM3MTI0MDkxNTc3MzgyMDA3" id="snipcart"></NextScript>
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;