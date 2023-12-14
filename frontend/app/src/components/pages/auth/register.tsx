import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../common/Button';
import Header from '../../layouts/Header';

const Register = () => {
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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwiZXhwIjoxNzAwMzc5MzU2fQ.EpS2FrGVHM1ytcBATNEyOY_6v2iIMeuiEWFMHL2b3ng',
      }
    }).then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
  }


  return (
    <div>register</div>
  )
}

export default Register