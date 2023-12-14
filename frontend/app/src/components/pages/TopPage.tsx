import React, { useState } from 'react';
import logo from './logo.svg';
import '../../App.css';
import axios from 'axios';
import Button from '../common/Button';
import Header from '../layouts/Header';

const TopPage: React.FC = () => {
    return (
      <div className="App w-full relative">
        <div className="bg-top-page bg-cover min-h-screen px-40 pr-48">
            <h1 className="w-full pt-56 tracking-wide md:text-6xl text-4xl font-bold text-white shadow-sm ">
            家庭の在庫管理を、簡単に。
            </h1>
            <p className='text-gray-200 text-xl font-bold shadow-sm pt-10 flex-row w-full '>              
              家庭の食材、調味料を把握できず買い出しで困ったことはありませんか？<br/>このアプリはそんな悩みを解決します!
            </p>
            <div className='pt-60'>            
              <button>今すぐ始める</button>
              <button>ゲストでログイン</button>
            </div>
        </div>
      </div>
    );
  }

export default TopPage