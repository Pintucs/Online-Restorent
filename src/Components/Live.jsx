import React, {useEffect,useState} from 'react'
import Navbar from './Navbar';
import './reg.css'

const Live = () => {
    const [data, setData]=useState([]);
    const getCovidData = async()=> {
        try{
            const response= await fetch('https://data.covid19india.org/data.json');
            const actualData = await response.json();
            setData(actualData.statewise[0]);
        }catch(error){
            console.log(error);
        }
                
    }

    useEffect(() => {
      getCovidData();
    }, []);

  return (
    <>
    <Navbar />
    <div className='bodyy'>
    <div className='c'>
    <section className='formm'>
        <center><h1>Covid - 19 Live Watch</h1></center>
        <ul className='line'>
            <li className='form-in'>
                <div>
                    <div>
                        <p>INDIA</p>
                    </div>
                </div> 
            </li>

            <li className='form-in'>
                <div>
                    <div>
                        <p>RECOVERED</p>
                        <p>{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className='form-in'>
                <div>
                    <div>
                        <p>CONFIRMED</p>
                        <p>{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className='form-in'>
                <div>
                    <div>
                        <p>DEATHS</p>
                        <p>{data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className='form-in'>
                <div>
                    <div>
                        <p>ACTIVE</p>
                        <p>{data.active}</p>
                    </div>
                </div>
            </li>

            <li className='form-in'>
                <div>
                    <div>
                        <p>UPDATED</p>
                        <p>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
    </div>
    </div>
    </>
  )
}


export default Live