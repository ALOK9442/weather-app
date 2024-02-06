import React from 'react'
import Weather from './weather'
import UserTable from '../user_table/user_table'

function Home() {
  return (
    <div className='h-screen flex justify-around shadow-lg m-16 shadow-black border mt-0 rounded-md'>
        <Weather />
        <UserTable />
    </div>
  )
}

export default Home