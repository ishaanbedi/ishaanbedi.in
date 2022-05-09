import '../styles/globals.css'
import '../styles/main.css';
import NextNProgress from "nextjs-progressbar";
import Zoom from 'react-reveal/Zoom';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Zoom left cascade>
        <NextNProgress
          color="#FFF"
          startPosition={0.3}
          stopDelayMs={200}
          height={1}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Zoom>
    </>
  );
}

export default MyApp
