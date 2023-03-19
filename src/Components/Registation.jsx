import React, { useState } from 'react'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'
import './reg.css'
import Covid from './Covid';
function Registation() {
    const [user, setUser] = useState([]);
    const getData = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });

    } 
    const postData = () => {
        fetch("http://localhost:3000/get", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((result) => {
                result.json()
                    .then((response) => response)
            })

        alert("Thank You For Registration")
        window.location.reload(false)
    }

    return (
        <>
            <Navbar />

            <div className='body'>
                <div>
                    <div className='form'>
                        <div className='form-body'>
                            <div className='form-body'>
                                <h2 >Register now</h2>
                                <input type="text" className='form_input' placeholder="Full Name" name="name" onChange={getData} />
                            </div>
                            <div className='form-body'>
                                <input type="gmail" className='form_input' placeholder="Email" name="gmail" onChange={getData} />
                            </div>
                            <div className='form-body'>
                                <input type="password" className='form_input' placeholder="Password" name="password" onChange={getData} />
                            </div>
                            <div className='form-body'>
                                <input type="password" className='form_input' placeholder="Confirm Password" name="cpassword" onChange={getData} />
                            </div>
                            <div className='header-btn'>
                                <Link to='/registation' onClick={postData}><p>Registation</p></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Covid />
        </>
    )
}

export default Registation