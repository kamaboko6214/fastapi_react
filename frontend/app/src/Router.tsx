import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from './components/pages/auth/Login'
import Register from './components/pages/auth/Register'
import TopPage from './components/pages/TopPage'
import Header from './components/layouts/Header';
import StockIndex from "./components/pages/StockIndex";
import useUserAuth from './hooks/useAuth';
import Page404 from './components/pages/Page404';
import Registration from "./components/pages/Registration";

const Router = () => {
    const { userStatus, fetchUser } = useUserAuth();
    // ログイン状態の確認が終わったか
    const [authChecked, setAuthChecked] = useState(false);
  
    useEffect(() => {
      const init = async () => {
          await fetchUser();
          setAuthChecked(true);
      };
      init();
    }, [userStatus]);
    
  const Authenticated = (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='/stockindex' element={<StockIndex />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
    </BrowserRouter>
  )

  const UnAuthenticated = (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )

  return (
    <>
      {
        authChecked ? userStatus() ? Authenticated : UnAuthenticated : <></>
      }
    </>
)
}

export default Router