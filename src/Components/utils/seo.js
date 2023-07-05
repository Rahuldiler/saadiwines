import Head from "next/head";
import React from "react";

export default function SEO({ title, description, keywords, url, socialImg }) {
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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Shaadi Vines" />
      <meta property="og:image" content={socialImg} />
      {/* <!-- WhatsApp-specific meta tags --> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
}
