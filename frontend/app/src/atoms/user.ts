import { atom, useRecoilState } from "recoil";

type userState = { id: string; name: string } | null;

const userState = atom<userState>({
    key: "user",
    default: null,
});

export const useUserState = () => {
    const [user, setUser] = useRecoilState<userState>(userState);

    return { user, setUser };
};
