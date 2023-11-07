import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Button from '../src/components/common/Button';
import Header from '../src/components/layouts/Header';

function App() {
  const [message, setMessage] = useState('')
  const url: string = 'http://localhost:8080'
  const getdata = () => {
    axios.get(url).then((res) => {
      console.log(res.data)
      setMessage(res.data.message)
    })
  }

  return (
    <>
    <Header/>
      <div className="App">
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
          <h1 className="text-3xl font-bold underline">
            Hello Tailwind CSS!
          </h1>
          <p>{message}</p>
          <Button variant="squareBlue">登録</Button>
          <p className="m-0 text-gray-400">Tailwind CSSです</p>
          <button onClick={getdata} className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ボタン</button>
        </div>
      </div>
    </>
  );
}

export default App;
