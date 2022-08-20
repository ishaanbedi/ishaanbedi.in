
import '../styles/globals.css'
import '../styles/main.css';
import { AnimatePresence, motion } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="content">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

    </>
  );
}

export default MyApp
