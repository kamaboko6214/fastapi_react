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
      'name':'user_name',
      'type': 'text'
    },  
    { 
      'id': '2',
      'placeholder': 'メールアドレス', 
      'name':'mailaddress',
      'type': 'email'
    },  
    { 
      'id': '3',  
      'placeholder': 'パスワード', 
      'name': 'password',
      'type': 'password'
    },  
    {
      'id': '4',
      'placeholder': 'パスワード（確認用）', 
      'name': 'password_confirm',
      'type': 'password'
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
      <div className='flex flex-col items-center justify-center py-32'>
        <form className='bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 max-w-xl w-full'>
        <h1 className='font-bold text-gray-600 mb-10 text-3xl'>新規登録</h1>
          {items.map((item) => {
            return (
            <div className='mb-8' key={item.id}>
              <Input variant="auth" placeholder={item.placeholder} name={item.name} type={item.type} onChange={handleChange} className='h-12'></Input>
            </div>
            )
          })}
          <div className='mb-8'>
            <Button variant='Black' className='w-full py-2 px-3 h-12 font-bold text-xl'>新規登録</Button>
          </div>
          <div className='mb-8 text-center'>
            <p className='w-full py-2 px-3 font-bold text-gray-600' >会員登録済みの方は<a href='/login' className='text-emerald-600 duration-100 hover:text-emerald-400'>こちら</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register