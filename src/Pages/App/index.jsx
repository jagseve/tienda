import {useRoutes, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import Myorders from '../Myorders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import {Navbar} from '../../Components/Navbar'
import { CartProvider } from '../../Context'
import './App.css'

const AppRoutes =()=>{
  let routes = useRoutes([
    {path:'/',element: <Home/>},
    {path:'/my-account',element: <MyAccount/>},
    {path:'/my-order',element: <MyOrder/>},
    {path:'/my-orders',element: <Myorders/>},
    {path:'/sign-in',element: <Signin/>},
    {path:'/*',element: <NotFound/>}
  ])
  return routes
}

const App =() => {
  
  return (
    <CartProvider>
      <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
