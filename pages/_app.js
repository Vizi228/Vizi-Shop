import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'
import '../styles/main/slider.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='main__container'>
      <Header/>
        <Component {...pageProps} />
      <Footer/>  
    </div>
  )
}
console.log();
export default MyApp
