import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import {css} from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';
import Navbar from './Components/Navbar';

function App(){
    const [loading,setLoading] = useState(false);
    const override=css`
    display:block;
    border-color:red;
    margin-top:20%;
    `;

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[])

    return(
        <div className='App'>
        {
            loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40}/>
            :
            <>  
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