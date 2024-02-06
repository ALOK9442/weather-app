import React, { useEffect, useState } from 'react'
import { getCurrentWeather } from '../api/weather_api_integration'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentWeather, setCurrentWeather] = useState("")

  useEffect(() => {
    const getWeather = async () => {
      const response = await getCurrentWeather("Delhi")
      const data = response.current.air_quality.co
      setCurrentWeather(data)
      setIsLoading(false)
    }
    getWeather()
  }, [])

  return (
    <>
      {
        isLoading ? <div>Loading...</div> : <div>
        {
          currentWeather
        }
          </div>
      }
    </>
  )
}

export default Home