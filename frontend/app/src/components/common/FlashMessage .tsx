import { FC, ButtonHTMLAttributes, useState } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

// 特殊スタイルの設定
const FlashMeesage = () => {
    const [isDisp, setIsDisp] = useState(true)
    setTimeout(() => {
        setIsDisp(false)
    }, 2000);
    return (
        isDisp ? 
        <a href = "/stockindex" >
                    <button className="animate-tracking-in-expand flex mx-auto mt-10 bg-teal-600 text-white text-sm font-bold px-4 py-3 rounded shadow-lg w-52" role="alert">
                        <img src="images/check.svg" alt="" className="h-5 w-5 mr-3" />
                        <p>在庫を登録しました</p>
                    </button>
        </a >
        : 
        <a href = "/stockindex" >
                    <button className="animate-tracking-out-contract flex mx-auto mt-10 items-center bg-teal-600 text-white text-sm font-bold px-4 py-3 rounded shadow-lg w-52" role="alert">
                        <img src="images/check.svg" alt="" className="h-5 w-5 mr-3" />
                        <p>在庫を登録しました</p>
                    </button>
        </a >
    );
};

export default FlashMeesage
