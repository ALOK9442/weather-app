import React from 'react'
import Weather from './weather'
import UserTable from '../user_table/user_table'

function Home() {
  return (
    <div className='h-screen flex justify-around'>
        <Weather />
        <UserTable />
    </div>
  )
}

export default Home