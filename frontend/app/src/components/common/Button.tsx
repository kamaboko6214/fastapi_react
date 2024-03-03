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
  "delete": "bg-red-500 hover:bg-red-700 duration-100 shadow-md text-white font-bold rounded",
} as const;

const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button
      className={`border-0 p-2 ${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button
