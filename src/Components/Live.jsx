import React, {useEffect,useState} from 'react'
import Navbar from './Navbar';
import './reg.css'

const Live = () => {

    const [data, setData]=useState([]);

    const getCoviddata = async()=> {
        try{
            const response= await fetch('https://data.covid19india.org/data.json');
            const actualData = await response.json();
            setData(actualData.statewise[0]);
        }catch(error){
            console.log(error);
        }
                
    }

    useEffect(() => {
      getCoviddata();
    }, []);

  return (
    <>
    <Navbar />
    <div className='c'>
    <section className='formm'>
        <h2>Covid - 19 Live Watch</h2>
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
    </>
  )
}


export default Live