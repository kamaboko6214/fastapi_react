import React, { useState } from 'react'
import axios from '../../../api/axios'
import Button from '../../common/Button'
import Input from '../../common/Input'


const items: Array<{[key: string]: string}> = 
  [
    { 
      'id': '1',
      'placeholder': 'メールアドレス', 
      'name':'mailaddress'
    },  
    {
      'id': '2',
      'placeholder': 'パスワード', 
      'name':'password'
    },
  ]

const Login: React.FC = () => {
  const [mailaddress, setMailaddress] = useState('')
  const [password, setPassword] = useState('')
  interface Props {
    handleChange: (event: React.ChangeEvent<{}>) => void;
  }
  const postdata = () => {
    const url: string = 'http://localhost:8080/token'
    const data: object = {
      'grant_type' : '',
      // 'username' : 'johndoe',
      // 'password' : 'secret',
      'username' : mailaddress,
      'password' : password,
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwiZXhwIjoxNzAyOTEzMTc3fQ.36jojliKnmHdljWRz7eJzzJLqVRof29FbA_3Hrrzsvg',
      }
    }).then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'mailaddress') {
      setMailaddress (event.target.value);
    } else if (event.target.name === 'password') {
      setPassword (event.target.value);
    } 
  }

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-32'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3'>
          <h1 className='font-bold text-gray-600 mb-8 text-2xl'>ログイン</h1>     
            {items.map((item) => {
              return (
              <div className='mb-4' key={item.id}>
                <Input variant="auth" placeholder={item.placeholder} name={item.name} onChange={handleChange}></Input>
              </div>
              )
            })}
          <div className='mb-4'>
            <Button variant='squareBlack' className='w-full py-2 px-3' onClick={postdata}>ログイン</Button>
          </div>
          <button onClick={getdata}>test</button>
          <div className='mb-4'>
            <a className='w-full py-2 px-3 text-gray-600 font-bold' href='#'>パスワードをお忘れの方</a>
          </div>
          <div className='mb-4'>
            <p className='w-full py-2 px-3 font-bold text-gray-600' >アカウントをお持ちでない方は<a href='/register' className='text-cyan-500'>こちら</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login