import './App.css'
import Body from './components/Body'
import Footer from './components/footer';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


function App() {

  return (
    <div className="bg-slate-300">
       <Navbar/>
       <div className="px-5 pt-4 font-semibold text-lg flex gap-2">
          Cryptocurrencies 
          <MdKeyboardDoubleArrowRight className='mt-2'/>
          Bitcoin
        </div>
        <Hero/>
        <Body/> 
        <Footer/>
       <x/>
    </div>
  )
}

export default App
