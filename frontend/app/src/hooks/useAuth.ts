import { useUserState } from "../atoms/user";
import axios from "../api/axios";
import { useCookies } from 'react-cookie';

const useUserAuth = () => {
    const [cookies] = useCookies()
    const { user, setUser } = useUserState();
    //ログイン済みか確認
    const userStatus = () => {
        return user ? true : false;
    };

    //backendに認証情報を投げる
    const fetchUser = async (): Promise<boolean> => {
        if (user) {
            return true;
        }
        try {
            const res = await 
            axios({
                url: "/users/me",
                method: 'get',
                headers: {
                  'accept': 'application/json',
                  'Authorization': `Bearer ${cookies.access_token}`,
                }
              })
            if (!res.data) {
                setUser(null);
                return false;
            }
            setUser(res.data);
            return true;
        } catch {
            return false;
        }
    };

    return { userStatus, fetchUser };
};
export default useUserAuth;