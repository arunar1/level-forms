import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <div className="home-container">
    <div className="center-container">
        <h1>Let's</h1>
        <Link to='/home' style={{textDecoration:'none'}}><Button>Start</Button></Link>
    </div>
   </div>
  )
}
