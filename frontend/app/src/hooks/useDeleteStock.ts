import { useCookies } from "react-cookie";
import axios from "../api/axios";
import { deleteParams } from "../types/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
  
export const useDeleteStock = () => {
    const [cookies] = useCookies()
    const [RegFlg, setRegFlg] = useState(false)
    const deleteStock = async(stock_id:number, count:number) => {
      const res =  await axios({
        method: 'delete',
        url: '/deleteStock',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${cookies.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {'id': stock_id, 'count': count}
      }).then((res)=> {
        console.log(res.data)
        return res.status
      }).catch((e) => {
        alert('失敗！') 
        return e
      })
      return res
    } 
    return deleteStock
  }
