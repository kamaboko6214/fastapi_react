import React, { useState,FormEvent } from 'react'
import { useCookies } from 'react-cookie';
import axios from '../../../api/axios'

import Button from '../../common/Button'
import Input from '../../common/Input'


const items: Array<{[key: string]: string}> = 
  [
    { 
      'id': '1',
      'placeholder': 'メールアドレス', 
      'name':'email',
      'type':'email'
    },  
    {
      'id': '2',
      'placeholder': 'パスワード', 
      'name': 'password',
      'type': 'password'
    },
  ]

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cookies, setCookie] = useCookies()

  interface Props {
    handleChange: (event: React.ChangeEvent<{}>) => void;
  }
  
  const postdata = (event: FormEvent) => {
    event.preventDefault();
  
    const url: string = 'http://localhost:8080/token'
    const data: object = {
      'username' : email,
      'password' : password,
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
        console.log(res.data.access_token)
        setCookie('access_token', res.data.access_token);
        alert('ログイン成功')
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
        'Authorization': `Bearer ${cookies.access_token}`,
      }
    }).then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'email') {
      setEmail (event.target.value);
    } else if (event.target.name === 'password') {
      setPassword (event.target.value);
    } 
  }

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='flex flex-col items-center justify-center py-32 max-w-full' >
        <form className='bg-white shadow-md rounded px-16 pt-6 pb-8 mb-4 max-w-xl w-full'>
          <h1 className='font-bold text-gray-600 mb-10 text-3xl mt-10'>ログイン</h1>     
            {items.map((item) => {
              return (
              <div className='mb-8' key={item.id}>
                <Input variant="auth" placeholder={item.placeholder} name={item.name} type={item.type} onChange={handleChange} className='h-12'></Input>
              </div>
              )
            })}
          <div className='mb-8'>
            <Button variant='Black' className='w-full py-2 px-3 h-12 font-bold text-xl' onClick={postdata}>ログイン</Button>
          </div>
          <button onClick={getdata} type='button'>test</button>
          <div className='mb-8 text-center'>
            <a className='w-full py-2 px-3 text-gray-600 font-bold' href='#'>パスワードをお忘れの方</a>
          </div>
          <div className='mb-8 text-center'>
            <p className='w-full py-2 px-3 font-bold text-gray-600' >アカウントをお持ちでない方は<a href='/register' className='text-emerald-600 duration-100 hover:text-emerald-400'>こちら</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login