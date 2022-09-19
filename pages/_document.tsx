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
        <body className="selection:text-[#F05454] selection:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
