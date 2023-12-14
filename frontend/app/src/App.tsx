import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Register'
import TopPage from './components/pages/TopPage'
import Header from './components/layouts/Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<TopPage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
