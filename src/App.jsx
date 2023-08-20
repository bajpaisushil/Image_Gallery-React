import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ImageView from './components/ImageView'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/image-view/:id`} element={<ImageView />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

