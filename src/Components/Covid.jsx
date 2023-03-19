import React, { useState } from 'react'
const Covid = () => {
    const [get, setGet] = useState()
    const [fs, setFs] = useState(false)
    const getData = (e) => {
        setGet(e.target.value)
        setFs(false)

    }

    return (
        <>
        <div>
            <center><input type="text" onChange={getData} style={{ border: "2px solid black", margin: "5px" }} placeholder="enter here" />
                <br />
                <button onClick={(() => setFs(true))}>Click me</button>
                <br />
                <br />
                {
                    fs ?
                        <button style={{border:"2px solid green"}}>{get}</button>
                        : null
                }
            </center>
        </div>
        </>
    )
}
export default Covid