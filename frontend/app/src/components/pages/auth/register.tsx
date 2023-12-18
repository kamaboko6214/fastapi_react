import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../common/Button';
import Header from '../../layouts/Header';
import Input from '../../common/Input';

const Register: React.FC = () => {

  const getdata = () => {
    const url: string = 'http://localhost:8080/users/me'
    axios({
      url: url,
      method: 'get',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwiZXhwIjoxNzAwMzc5MzU2fQ.EpS2FrGVHM1ytcBATNEyOY_6v2iIMeuiEWFMHL2b3ng',
      }
    }).then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
  }

  const items: Array<{[key: string]: string}> = 
  [
    { 
      'id': '1',
      'placeholder': 'ユーザー名', 
      'name':'user_name'
    },  
    { 
      'id': '2',
      'placeholder': 'メールアドレス', 
      'name':'mailaddress'
    },  
    { 
      'id': '3',  
      'placeholder': 'パスワード', 
      'name':'password'
    },  
    {
      'id': '4',
      'placeholder': 'パスワード（確認用）', 
      'name':'password_confirm'
    },
  ]
  const handleChange = () => {
    console.log('test')

    // if(event.target.name === 'mailaddress') {
    //   setMailaddress (event.target.value);
    //   console.log(event)
    // } else if (event.target.name === 'password') {
    //   setPassword (event.target.value);
    // } 
  }


  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-32'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3'>
        <h1 className='font-bold text-gray-600 mb-8 text-2xl'>新規登録</h1>
          {items.map((item) => {
            return (
            <div className='mb-4' key={item.id}>
              <Input variant="auth" placeholder={item.placeholder} name={item.name} onChange={handleChange}></Input>
            </div>
            )
          })}
          <div className='mb-4'>
            <Button variant='squareBlack' className='w-full py-2 px-3'>新規登録</Button>
          </div>
          <div className='mb-4'>
            <p className='w-full py-2 px-3 font-bold text-gray-600' >会員登録済みの方は<a href='/login' className='text-cyan-500'>こちら</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register