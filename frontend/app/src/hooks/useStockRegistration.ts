import { useCookies } from "react-cookie";
import axios from "../api/axios";
import { StockList } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
  
export const useStockRegistration = () => {
    const [cookies] = useCookies()
    const navigate = useNavigate()
    const [RegFlg, setRegFlg] = useState(false)
    const postRegistration = async(params: StockList) => {
      const res =  await axios({
        method: 'post',
        url: '/stockregistration',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${cookies.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: params
      }).then((res)=> {
        console.log(res.data)
        return res.status
      }).catch((e) => {
        alert('失敗！') 
        return e
      })
      return res
    } 
    return postRegistration
  }
