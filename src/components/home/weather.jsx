import React, { useEffect, useState } from 'react'
import { getCurrentWeather } from '../api/weather_api_integration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Weather() {

  const [isLoading, setIsLoading] = useState(true)
  const [currentWeather, setCurrentWeather] = useState("")
  const [city, setCity] = useState("Delhi")


  const getWeather = async () => {
    setIsLoading(true)
    const response = await getCurrentWeather(city)
    const data = response.current
    setCurrentWeather(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className='overflow-y-hidden mt-8 space-y-4'>
      <div className='items-center flex space-x-6 mt-8'>
        <input type="text" placeholder="Enter city" className='border-2 rounded-xl p-2' onChange={(e) => setCity(e.target.value)} />
        <FontAwesomeIcon icon={faSearch} onClick={getWeather} className='rounded-lg p-4 bg-yellow-800' />
      </div>
      {
        isLoading ? <div>Loading...</div>
          :
          <div>
            <div className="bg-blue-500 text-white w-fit h-fit rounded-md p-4 flex items-center">
              <p className='pr-3'>current air quality</p>
              {
                currentWeather.air_quality.co
              }
            </div>
            <div className='flex flex-col items-center'>
              <img src={currentWeather.condition.icon} alt="weather icon" className='w-fit items-center'/>
              <p>{currentWeather.condition.text}</p>
            </div>
          </div>
      }
    </div>
  )
}

export default Weather