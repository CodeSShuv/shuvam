import React from 'react'
import './main.css'
import Navbar from './Navbar'
import Home from './Home'
import Offcanvas from './Offcanvas'
import Skills from './Skills'
const Main = (props) => {
  return (
    <>
        <div className="main-container">
            <Navbar method = {props.method}/>
            <Offcanvas state = {props.state}/>
            <main className='display-container'>
                <Home/>
                <Skills/>
            </main>
        </div>
    </>
  )
}

export default Main