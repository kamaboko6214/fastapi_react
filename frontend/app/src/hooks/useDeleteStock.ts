import { useCookies } from "react-cookie";
import axios from "../api/axios";


const useStockList = () => {
    const [cookies] = useCookies()
    const getStockList = async () => {
      try {
        const res = await axios({
          method: 'delete',
          url: 'stockindex',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${cookies.access_token}`,
          }
        })
        if(!res.data){
          return false;
        }
        return res.data
    } catch {
        return false;
    }
  }
  return getStockList;
}

export default useStockList