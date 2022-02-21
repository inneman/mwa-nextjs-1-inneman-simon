import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </div>

  );
}

export default MyApp
