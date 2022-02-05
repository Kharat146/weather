import React, { useState, useEffect } from 'react'
import { WiCelsius, WiCloudy } from 'react-icons/wi';
import { GoSearch, GoLocation } from 'react-icons/go';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiHazeFill } from 'react-icons/ri';
import axios from 'axios'
import './Wether.css'

export default function Whether() {

    const [data, setData] = useState("");
    const [city, setCity] = useState("pune");
    const [city2, setCity2] = useState("");
    const [weather, setWeather] = useState("");
    const [task, setTask] = useState([]);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa94869a3d6ab4315ca915c1538c485c&units=metric`).then((res) => {
            console.log(res.data);
            setData(res.data.main);
            // setWeather(res.data.weather);
            setWeather(res.data.weather[0].main);
            console.log(weather);
            // console.log(data);
            setTask([weather]);
        })
    }, [city])



    const onSUbmitHandler = (e) => {
        setCity(city2)


        e.preventDefault();
    }
    return (

        <>

            {/* {
                data.map((dd, i) => {
                    return <h1>{dd}</h1>
                })
         } */}




            {/* <h1>{city}</h1> */}
            {/* <h1>{city2}</h1> */}
            {/* <h1> </h1> */}
            {/* <div className="body" style={{ backgroundImage: task[0] == 'Clouds' ? `url('https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')` : task[0] == 'Haze'?  `url("https://images.pexels.com/photos/2310712/pexels-photo-2310712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` :`url("https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`, backgroundSize: "cover" }}> */}
            <div className="body">

                <div className="container">
                    <form onSubmit={onSUbmitHandler}>
                        <div className="search-bar">
                            <input type="text" value={city2} onChange={(e) => { setCity2(e.target.value) }} placeholder='Enter City Name' />
                            <button><GoSearch className='search-icon' /></button>
                        </div>
                    </form>
                    <div className="wether-format">
                        <h1>Weather Forecast</h1>
                        {/* <div className="city-name">
                        <h4>Pune</h4> 
                    </div> */}
                        <div className="weather-template">
                            <div className="wether-date">
                                <h3>Today</h3>
                                <h3>Date</h3>
                            </div>
                            <div className="temp">
                                <div className="temp-with-icon">
                                    {data.temp}<WiCelsius className='wether-icon' />
                                </div>
                                <div className="temp-logo">

                                    {/* <TiWeatherPartlySunny className='wether-icon' style={{ display: task[0] == "Mist" ? `none` : `block` }} /> */}
                                    <WiCloudy className='wether-icon' /><p> {weather}</p>
                                    {/* <RiHazeFill className='wether-icon' style={{ display: task[0] == "Haze" ? `block` : `none` }} /> */}
                                </div>
                            </div>

                            <div className="temp-minMax">
                                <div className="temp-min">
                                    <FaTemperatureLow className='wether-icons' /> <p>{data.temp_min} min temp</p>

                                </div>
                                <div className="temp-max">
                                    <FaTemperatureHigh className='wether-icons' /> <p>{data.temp_max} max temp</p>
                                </div>
                            </div>
                            <div className="location">
                                <h3><GoLocation /> {city}</h3>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}
