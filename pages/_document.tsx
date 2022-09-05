import Document, { Html, Head, Main, NextScript } from "next/document";
var metaDetails = {
  title: "Ishaan Bedi",
  description:
    "Portfolio website of Ishaan Bedi, a developer from New Delhi, India.",
};
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content={metaDetails.title} />
          <meta name="description" content={metaDetails.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ishaanbedi.in/" />
          <meta property="og:title" content="Ishaan Bedi" />
          
          <meta
            property="og:description"
            content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India."
          />
          <meta property="og:image" content="/meta.png" />
          <meta
            name="google-site-verification"
            content="yEAyX24NQpFNFN9tBd3Isct51jdK8humRcf_OhTCVlg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ishaanbedi.in/" />
          <meta property="twitter:title" content="Ishaan Bedi" />
          <meta
            property="twitter:description"
            content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India."
          />
          <meta
            property="twitter:image"
            content="https://pbs.twimg.com/profile_banners/1048137349811593217/1649585518/1500x500"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"
          ></script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://queue.simpleanalyticscdn.com/noscript.gif"
              alt=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </noscript>
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
