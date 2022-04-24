import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>
                        Ishaan Bedi - Developer
                    </title>


                    <meta name="title" content="Ishaan Bedi" />
                    <meta name="description" content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India." />


                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://ishaanbedi.in/" />
                    <meta property="og:title" content="Ishaan Bedi" />
                    <meta property="og:description" content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India." />
                    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />


                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://ishaanbedi.in/" />
                    <meta property="twitter:title" content="Ishaan Bedi" />
                    <meta property="twitter:description" content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India." />
                    <meta property="twitter:image" content="https://pbs.twimg.com/profile_banners/1048137349811593217/1649585518/1500x500" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
                    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
                    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
                </Head>
                < body >
                    <Main />
                    < NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument