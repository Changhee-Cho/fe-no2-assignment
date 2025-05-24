import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Dex from '../Dex'
import Details from '../Details'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dex" element={<Dex/>}/>
        <Route path="/pokemon-detail" element={<Details/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default Router