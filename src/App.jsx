/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './components/DetailPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/item/:id" element={<DetailPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App