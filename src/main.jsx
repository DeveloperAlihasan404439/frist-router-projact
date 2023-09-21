import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './companent/Headers/Home/Home.jsx';
import About from './companent/About/About.jsx';
import Menu from './companent/Menu/Menu.jsx';
import Singin from './companent/Singin/Singin.jsx';
import Details from './companent/Details/Details.jsx';
import ErrorPages from './companent/ErrorPages/ErrorPages.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPages/>,
    children: [
      {
        path: '/',
        loader : ()=> fetch('https://dummyjson.com/products'),
        element: <App/>
      },
      {
        path: '/home/:userId',
        loader: (params)=> fetch(`https://dummyjson.com/products/${params.params.userId}`),
        element: <Details/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/signin',
        element: <Singin/>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
