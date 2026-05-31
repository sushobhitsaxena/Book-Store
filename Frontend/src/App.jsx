import React from 'react'
import Home from './Home/Home'
import Courses from './components/Courses'
import {Route,Routes} from "react-router-dom"
import Signup from './components/Signup'
import Contact from './components/Contact'




function App() {
  return (
   <>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Courses" element={<Courses/>}/>
<Route path="/Signup" element={<Signup/>}/>
 <Route path="/Contact" element={<Contact/>} />

  


  </Routes>
   

    
   </>
  )
}

export default App
