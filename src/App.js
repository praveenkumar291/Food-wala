import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Order from './components/Order'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
