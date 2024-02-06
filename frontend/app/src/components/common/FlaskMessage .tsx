import { FC, ButtonHTMLAttributes } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant: keyof typeof buttonStyle;
};

// 特殊スタイルの設定
const buttonStyle = {
    "squareBlue": "bg-cyan-600 hover:bg-cyan-500 duration-100 shadow-lg text-white font-bold py-2 px-4 rounded",
    "squareRed": "bg-red-500 hover:bg-red-700 duration-100 shadow-md text-white font-bold py-2 px-4 rounded",
    "squareWhite": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
    "Black": "bg-blue-900 text-white rounded hover:bg-blue-800 duration-75",
} as const;

const FlashMeesage = () => {
    return (
        <div className="flex items-center bg-teal-600 text-white text-sm font-bold px-4 py-3 rounded shadow-lg" role="alert">
            <img src="images/check.svg" alt="" className="h-5 w-5 mr-3"/>
            <p>在庫を登録しました</p>
        </div>
    );
};

export default FlashMeesage
