
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router

import React from 'react'
import { Home } from '../Home';


export const Routing = () => {
  return (
   <Router> {/* Wrap your routes with Router */}
    <Routes>
        <Route path='/' element={<Home/>}/>
       
    </Routes>
   </Router>
  )
}
