import React, { useState } from 'react'
import axios from 'axios'
const ShowData = () => {
    const [user, setUser] = useState([]);
    const [update, setUpdate] = useState([]);
    const [name, setName] = useState([]);
    const [gmail, setGmail] = useState([]);
    const [password, setPassword] = useState([]);

    // show data
    const show = () => {
        axios.get("http://localhost:3000/get").then((res) => setUser(res.data))

    }
    //delete data 
    const deleteData = (id) => {
        fetch(`http://localhost:3000/get/${id}`, { method: "DELETE" }).then((result) => {
            result.json().then((response) => show(response)
            )
        })
    }
    // Update data
    const select = (get) => {
        setName(get.name)
        setGmail(get.gmail)
        setPassword(get.password)
    }
    const upDate=()=>{
        const item={name,gmail,password,ids}
        fetch(`http://localhost:3000/get/${ids}`,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)})
            .then((result) => {
            result.json().then((response) => show(response))
        })
    }
    return (
        <>
            <div className='container' >
                <button onClick={show}>show data</button>
            </div>
            <div>
                <table border="1px">
                    {
                        user.map((get, index) =>
                            <tr key={index}>
                                <td>{get.id}</td>
                                <td>{get.name}</td>
                                <td>{get.gmail}</td>
                                <td>{get.password}</td>
                                <td>{get.cpassword}</td>
                                <td><button onClick={(() => deleteData(get.id))}>Delete data</button></td>
                                <td><button onClick={(() => select(get))}>Select data for updata</button></td>
                            </tr>
                        )
                    }

                </table>

            </div>
            <br />
            <br />
            <div>
                <div className='input'>
                    <input type="text" value={name} onChange={((e) => setName(e.target.value))} />
                </div>
                <div className='input'>
                    <input type="text" value={gmail} onChange={((e) => setGmail(e.target.value))} />
                </div>
                <div className='input'>
                    <input type="text" value={password} onChange={((e) => setPassword(e.target.value))} />
                </div>
                <div>
                    <button onClick={upDate}>Update</button>
                </div>
            </div>

        </>
    )
}

export default ShowData