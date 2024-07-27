import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Headphones from "./CategoriesPages/Headphones"
import Speakers from "./CategoriesPages/Speakers"
import Earphones from "./CategoriesPages/Earphones"
import Xx99Mark1 from "./ProductsPages/Xx99Mark1"
import Xx59 from "./ProductsPages/Xx59"
import Yx1 from "./ProductsPages/Yx1"
import Zx9Speaker from "./ProductsPages/Zx9Speaker"
import Zx7Speaker from "./ProductsPages/Zx7Speaker"
import Xx99Mark2 from "./ProductsPages/Xx99Mark2"
import Checkout from "./components/Checkout"
import ScrollToTop from "./components/Scrolltotop"


function App() {

  return (
    <Router >
      <ScrollToTop/>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/earphones" element={<Earphones/>}/>
          <Route path="/xx99mark2" element={<Xx99Mark2/>}/>
          <Route path="/xx99mark1" element={<Xx99Mark1/>}/>
          <Route path="/xx59" element={<Xx59/>}/>
          <Route path="/zx9speaker" element={<Zx9Speaker/>}/>
          <Route path="/zx7speaker" element={<Zx7Speaker/>}/>
          <Route path="/yx1" element={<Yx1/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router> 
  )
}

export default App
