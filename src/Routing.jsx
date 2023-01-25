import React from 'react'
import { Routes , Route} from "react-router-dom"
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Live from './Components/Live';
import Login from './Components/Login';
import Order from './Components/Order';
import Products from './Components/Products';
import Registation from './Components/Registation';
import ShowData from './Components/ShowData';



const Rounting = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/ShowData' element={<ShowData />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/order' element={<Order />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/header' element={<Header />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/registation' element={<Registation />}/>
      <Route path='/live' element={<Live />}/>
    </Routes>

    </>
  )
}

export default Rounting;