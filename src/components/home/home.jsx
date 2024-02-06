import React from 'react'
import Weather from './weather'
import UserTable from '../user_table/user_table'
import Navbar from '../navbar/navbar'

function Home() {
  return (
    <div className='h-fit flex flex-col justify-around shadow-lg m-16 shadow-black border mt-2 rounded-md bg-gradient-to-b from-blue-600 to-pink-600'>
      <Navbar />
      <Weather />
      <UserTable />
    </div>
  )
}

export default Home