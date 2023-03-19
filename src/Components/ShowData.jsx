import React, { useState } from 'react'
import axios from 'axios'
import './reg.css'
import Navbar from './Navbar'
import PosstData from './PosstData'

const ShowData = () => {
    const [user, setUser] = useState([]);
    const [fs, setFs] = useState(false)
    const [fk, setFk] = useState(false)
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [userId,setUserId]=useState(null)
    
    // show data
    const showData = () => {
        axios.get("http://localhost:3000/get").then((res) => setUser(res.data))
    }

    //delete data 
    const deleteData = (id) => {
        fetch(`http://localhost:3000/get/${id}`, { method: "DELETE" }).then((result) => {
            result.json().then((response) => showData(response)
            )
        })
    }

    //select data from the database
    const selectData = (get) => {
        setName(get.name)
        setGmail(get.gmail)
        setPassword(get.password)
        setCPassword(get.cpassword)
        setUserId(get.id)
    }

    //update data
    function updateData() {
        let item = { name, gmail, password, cpassword}
        fetch(`http://localhost:3000/get/${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then((result) => {
                result.json().then((response) => showData(response.data))
            })
    }


    return (
        <>
            <div><Navbar /></div>
            <div className='body' align="center" style={{ margin: "100px" }}>
                <br></br>
                <button className='header-btnn' onClick={showData}>Click Here to Show Data</button>
                <div>
                    <br></br>
                    <table border="1px" >
                        {
                            user.map((get, index) =>
                                <tr key={index}>
                                    <td>{get.id}</td>
                                    <td>{get.name}</td>
                                    <td>{get.gmail}</td>
                                    <td>{get.password}</td>
                                    <td>{get.cpassword}</td>
                                    <td><button onClick={(() => {
                                        selectData(get)
                                        setFk(true)
                                    })}>Update Data</button></td>
                                    <td><button onClick={(() => deleteData(get.id))} >Delete Data</button></td>
                                </tr>
                            )
                        }
                    </table>
                    <button className='header-btnn' onClick={(() => setFs(true))}><p>New User Click Here</p></button>
                </div>
                <br />
            </div>
            {
                fs ? <PosstData /> : null
            }
            <div >
                {
                    fk ? <div className='body'>
                        <div>
                            <div>
                                <div className='form-body'>
                                    <div className='form-body'>
                                        <input type="text" value={name} onChange={((e)=>setName(e.target.value))}/>
                                    </div>
                                    <div className='form-body'>
                                        <input type="text" value={gmail} onChange={((e)=>setGmail(e.target.value))}/>
                                    </div>
                                    <div className='form-body'>
                                        <input type="text" value={password} onChange={((e)=>setPassword(e.target.value))}/>
                                    </div>
                                    <div className='form-body'>
                                        <input type="text" value={cpassword} onChange={((e)=>setCPassword(e.target.value))}/>
                                    </div>
                                    <div className='header-btn'>
                                        <button onClick={updateData}>Update Data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }</div>

        </>
    )
}

export default ShowData