import Link from "next/link";
import Navbar from '../app/components/Home/Navbar';
import Footer from "./components/Footer";
import HomePage from './components/Home/HomePage';
function Home() {
  return (
  <>
   <Navbar></Navbar>
   <HomePage />
   <Footer></Footer>
  </>
  )
}

export default Home