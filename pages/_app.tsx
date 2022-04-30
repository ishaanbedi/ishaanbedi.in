import '../styles/globals.css'
import '../styles/main.css';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#FFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
