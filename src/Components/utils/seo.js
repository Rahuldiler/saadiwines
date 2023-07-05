import Head from "next/head";
import React from "react";

export default function SEO({ title, desc, keywords, url, socialImg }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <link rel="shortcut icon" href="/logo.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Shaadi Vines" />
      <meta property="og:image" content={socialImg} />
    </Head>
  );
}
