import React, { useEffect, useState } from 'react'
import { getCurrentWeather } from '../api/weather_api_integration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Sunny from '../../assets/clear.png'
import cloud from '../../assets/cloud.png'
import rain from '../../assets/rain.png'
import wind from '../../assets/wind.png'
import snow from '../../assets/snow.png'
import humidity from '../../assets/humidity.png'

function Weather() {

  const [isLoading, setIsLoading] = useState(true)
  const [currentWeather, setCurrentWeather] = useState("")
  const [city, setCity] = useState("Delhi")
  const [weatherIcon, setWeatherIcon] = useState("");

  const getWeather = async () => {
    setIsLoading(true)
    const response = await getCurrentWeather(city)
    const data = response
    setCurrentWeather(data)
    setIsLoading(false)

  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className='overflow-y-hidden mt-8 space-y-4 rounded-md w-full '>
      <div className='items-center flex space-x-2 md:space-x-6 mt-8 justify-center'>
        <input type="text" placeholder="Enter city" className='w-1/2 border-2 rounded-xl p-2' onChange={(e) => setCity(e.target.value)} />
        <button className='p-0'>
          <FontAwesomeIcon icon={faSearch} onClick={getWeather} className='rounded-lg p-4 bg-yellow-800' />
        </button>
      </div>
      {
        isLoading ? <div>Loading...</div>
          :
          <div>
            <div className='flex flex-col items-center'>
              <span className='bg-blue-500 text-white w-fit h-fit rounded-md p-4 flex items-center font-mono text-3xl'>CURRENT WEATHER</span>
              <div className='flex items-center justify-around pt-4 pb-4 w-full'>
                <div className='flex flex-col items-center p-2 space-y-4'>
                  <p className='font-semibold flex items-center text-mono sm:text-lg text-white'>
                    <img src={humidity} className='w-4 h-4'/>
                    Humidity
                  </p>
                  <p className='text-mono font-semibold text-white'>
                    {currentWeather.current.humidity}%
                  </p>
                </div>
                <div className='flex flex-col items-center p-2 space-y-4'>
                  <p className='font-bold sm:text-lg text-white'>{currentWeather.location.name}</p>
                  <p className='text-md font-medium text-white'>{currentWeather.location.localtime}</p>
                </div>
                <div className='flex items-center p-2 flex-col'>
                  <img src={currentWeather.current.condition.icon} className='p-0' />
                  <p className='sm:text-lg font-mono text-white'>{currentWeather.current.condition.text}</p>
                </div>
              </div>
              <div className="bg-blue-500 flex-col text-white w-fit h-fit rounded-md p-4 flex items-center">
                <p className='pr-3 font-mono text-3xl'>AIR CONDITIONS</p>
              </div>
              <div className='md:flex items-center space-y-4 justify-around pt-4 pb-4 w-full'>
                <div className='flex flex-col space-y-1 items-center'>
                  <p className='font-mono sm:text-lg text-white'>Feels like</p>
                  <p className='text-mono font-semibold text-white'>
                    {currentWeather.current.feelslike_c} °C
                  </p>
                </div>
                <div className='flex flex-col space-y-1 items-center'>
                  <div className='font-mono flex space-x-2 text-white'>
                    <img src={wind} className='sm:visible' alt="Wind Icon" />
                    <p className='sm:text-lg'>Wind</p>
                  </div>
                  <p className='text-mono font-semibold text-white'>
                    {currentWeather.current.gust_kph} kph
                  </p>
                </div>
                <div className='flex flex-col items-center p-2 space-y-4'>
                  <p className='font-semibold text-mono sm:text-lg text-white'>
                    Clouds
                  </p>
                  <p className='text-md font-medium text-white'>{currentWeather.current.cloud}%</p>
                </div>
                <div className='flex items-center p-2 flex-col'>
                  <p className='font-semibold text-mono sm:text-lg text-white'>Air Quality Index</p>
                  <p className='text-lg font-mono text-white'>{currentWeather.current.air_quality.co}</p>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Weather