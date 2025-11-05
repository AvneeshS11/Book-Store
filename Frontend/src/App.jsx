import { useState } from 'react'
import Home from './Home/Home'
import Contect from './Contect/Contect'
import Course from './Course/Course'
import { Route,Routes } from "react-router-dom"
import Singup from './components/Singup'
import About from './About/About'
function App() {

  return (
    <>
      <div className=' dark:bg-slate-700 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/Contact" element={<Contect/>} />
        <Route path="/About" element= {<About/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
