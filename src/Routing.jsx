import React from 'react'
import { Routes , Route} from "react-router-dom"
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Products from './Components/Products';
import Registation from './Components/Registation';
import ShowData from './Components/ShowData';
import UpdateData from './Components/UpdateData';
import ContactData from './Components/ContactData';



const Rounting = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/ShowData' element={<ShowData />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/header' element={<Header />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/registation' element={<Registation />}/>
      <Route path='/updatedata/:id' element={<UpdateData />}/>
      <Route path='/contactdata' element={<ContactData />}/>
    </Routes>

    </>
  )
}

export default Rounting;