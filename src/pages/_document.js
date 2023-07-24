import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="p:domain_verify" content="16cb29b8246289202 a47eea747bf917" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <meta property="og:image" itemProp="image" content="/favicon.png" />
          <link itemProp="thumbnailUrl" href="/favicon.png" />
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
