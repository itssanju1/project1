import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashnav from '../Navbaar/Dashnav'
import Dashboard from '../Allfiels/Dashboard'

const Dashrouting = () => {
  return (
    <>
    <BrowserRouter>
    <Dashnav/>
    <Routes>
        <Route path='/Home' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Dashrouting