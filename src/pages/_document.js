import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* Meta Pixel Code */}
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '936481154280642');
              fbq('track', 'PageView');`
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
                      src="https://www.facebook.com/tr?id=936481154280642&ev=PageView&noscript=1" />`
            }}
          />
          {/* End Meta Pixel Code */}
          <meta name="p:domain_verify" content="16cb29b8246289202 a47eea747bf917" />
          <meta name="facebook-domain-verification" content="4t3jvt4m9q6j2vq729xsachpebkgiu" />
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
