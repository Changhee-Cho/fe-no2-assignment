import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Dashboard from '../Dashboard'
import Details from '../Details'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dashboard />} />
      <Route path="/pokemon-detail" element={<Details />} />
    </Routes>
  )
}

export default Router