import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/auth/signin'
import Navbar from './components/navbar/navbar'
import { Outlet, useLocation } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  console.log(location)
  return (
    <div className='h-screen'>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="255, 95, 61"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      {
        location.pathname === "/" ? (
          <Home />
        ) : (
          <div className='bg-gradient-to-b from-blue-600 to-pink-600'>
          <Outlet />
          </div>
        )
      }
    </div>
  )
}

export default App
