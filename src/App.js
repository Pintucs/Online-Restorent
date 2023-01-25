import React from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App(){

    return(
        <div className='App'>
        {
            <>  <h1>hiiii</h1>
                <Navbar />
                <Header />
                <Products />
                <About />
            </>
        }
            
        </div>
    );
}

export default App;