import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Button from '../src/components/common/Button';
import Header from '../src/components/layouts/Header';

function App() {
  const [message, setMessage] = useState('')

  const postdata = () => {
    const url: string = 'http://localhost:8080/token'
    const data: object = {
      'grant_type' : '',
      'username' : 'johndoe',
      'password' : 'secret',
      'scope' : '',
      'client_id' : '',
      'client_secret' : '',
    }

    axios({
        method: 'post',
        url: url,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
      }).then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
  }

  const getdata = () => {
    const url: string = 'http://localhost:8080/users/me'
    axios({
      url: url,
      method: 'get',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwiZXhwIjoxNzAwMjk3NDcxfQ.Bin5H5rbVrD7CjzaPjGGf3ehIHyHBeYeZ-NeNKmIu64',
      }
    }).then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
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
          <button onClick={postdata} className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ポスト</button>
          <button onClick={getdata} className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ゲット</button>
        </div>
      </div>
    </>
  );
}

export default App;
