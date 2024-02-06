import axios from "axios"

const BASE_URL = "http://api.weatherapi.com/v1"
const KEY = "6ae00b6090bc4d589a2115036240602"


export const getCurrentWeather = async (city) => {
    //http://api.weatherapi.com/v1/current.json?key=6ae00b6090bc4d589a2115036240602&q=London&aqi=no


    try {
        const response = await axios.get(`${BASE_URL}/current.json?key=${KEY}&q=${city}&aqi=yes`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getForecastWeather = async (city) => {
    //http://api.weatherapi.com/v1/forecast.json?key=6ae00b6090bc4d589a2115036240602&q=London&days=3&aqi=no&alerts=no

    try {
        const response = await axios.get(`${BASE_URL}/forecast.json?key=${KEY}&q=${city}&days=3&aqi=yes`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getAstronomy = async (city) => {
    //http://api.weatherapi.com/v1/astronomy.json?key=6ae00b6090bc4d589a2115036240602&q=Delhi&dt=2024-02-06

    try {
        const response = await axios.get(`${BASE_URL}/astronomy.json?key=${KEY}&q=${city}&dt=2021-10-14`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const searchLocation = async (city) => {
    //http://api.weatherapi.com/v1/search.json?key=6ae00b6090bc4d589a2115036240602&q=Delhi

    try {
        const response = await axios.get(`${BASE_URL}/search.json?key=${KEY}&q=${city}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}