import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import FormHome from '../Home/FormHome'
export default function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact  path='/' element={<Home/>}/>
            <Route exact  path='/home' element={<FormHome/>}/>
        </Routes>
    </BrowserRouter>
  )
}
