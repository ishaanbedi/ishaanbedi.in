import "../styles/globals.css";
import "../styles/main.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="content"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
