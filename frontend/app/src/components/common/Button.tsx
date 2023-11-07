import { FC, ButtonHTMLAttributes } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: keyof typeof buttonStyle;
};

// 特殊スタイルの設定
const buttonStyle = {
  "squareBlue": "bg-sky-400 hover:bg-sky-600 duration-100 shadow-lg text-white font-bold py-2 px-4 rounded",
  "squareRed": "bg-red-500 hover:bg-red-700 duration-100 shadow-md text-white font-bold py-2 px-4 rounded",
  "squareWhite": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
  "squareBlack": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
  "squareSearch": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
  "roundFullBlue": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
} as const;

const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button
      className={`rounded border-0 p-2 ${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button
