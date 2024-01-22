import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import Owner from './Components/Owner';
import Donater from './Components/Donater';

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />}/>
        <Route path="/owner" element={< Owner />}/>
        <Route path="/donater" element={< Donater />}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App