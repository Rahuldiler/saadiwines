import Head from "next/head";
import React from "react";

export default function SEO({ title, description, keywords, url, ogImage }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* <link rel="shortcut icon" href="/logo.ico" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Shaadi Vines" />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={ogImage} />
      <link itemProp="thumbnailUrl" href={ogImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="300" />

      {/*<!-- Google / Search Engine Tags -->*/}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={ogImage} />

      {/*<!-- Facebook Meta Tags -->*/}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/*<!-- Twitter Meta Tags -->*/}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
