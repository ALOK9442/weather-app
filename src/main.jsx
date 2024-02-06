import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './components/auth/signup.jsx'
import SignIn from './components/auth/signin.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
