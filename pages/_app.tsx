import '../styles/globals.css'
import '../styles/main.css';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp
