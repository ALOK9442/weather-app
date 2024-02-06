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
        const data = response.current
        setCurrentWeather(data)
        setIsLoading(false)

    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div className='overflow-y-hidden mt-8 space-y-4 rounded-md w-full '>

        </div>
    )
}

export default Weather