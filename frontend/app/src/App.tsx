import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Register'
import TopPage from './components/pages/TopPage'
import Header from './components/layouts/Header';
import AuthProvider from "../src/contexts/Auth";
import Test from "../src/components/pages/Test";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<TopPage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            {/* <Route path="/app/*">
              <AuthProvider>
                <Route path="test" element={<Test />} />
              </AuthProvider>
            <Route/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
