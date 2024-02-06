import { useCookies } from "react-cookie";
import axios from "../api/axios";
import { StockList } from "../types";
import { useNavigate } from "react-router-dom";
  
export const useStockRegistration = () => {
    const [cookies] = useCookies()
    const navigate = useNavigate()
    const postRegistration = async(params: StockList) => {
      await axios({
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
      }).catch(() => {
        alert('失敗！') 
      })
    } 
    return postRegistration
  }
