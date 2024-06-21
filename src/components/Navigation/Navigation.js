import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
export default function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact  path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
