import { useCookies } from "react-cookie";
import axios from "../api/axios";
import { StockList } from "../types";
  
const useStockRegistration = () => {
    const [cookies] = useCookies()
    const postStockList = async (params: StockList) => {
      try {
        const res = await axios({
          method: 'post',
          url: 'stockregistration',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${cookies.access_token}`,
          },
          data: {params}
        })
        if(!res.data){
          return false;
        }
        return res.data
    } catch {
        return false;
    }
  }
  return postStockList;
}

export default useStockRegistration