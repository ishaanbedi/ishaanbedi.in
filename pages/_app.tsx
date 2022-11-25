import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <ThemeProvider enableSystem={true} attribute="class">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="content"
          >
            <Header />
            <Component {...pageProps} />
            <footer>
              <Footer />
            </footer>
            <Analytics />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
