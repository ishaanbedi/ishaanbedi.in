
import NavBar from '../components/Navbar';
import '../styles/globals.css'
import '../styles/main.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
