import { FC, HTMLAttributes } from "react";
import { useForm } from 'react-hook-form'
import { StockList } from '../../types/index'

type Props = React.HTMLAttributes<HTMLInputElement> & {
  variant: keyof typeof inputStyle
  placeholder: string
  name: string
  type: string
};
const inputStyle = {
  "auth": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500",
  "index": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500",
} as const;

const Input = ({ variant, placeholder, name, type, className, ...props }: Props) => {

  const rules: Record<string, any> = {
    genre_id: { required: 'ジャンルを選択してください' },
    name: { required: '名前は必須入力です', maxLength: { value: 50, message: '最大50文字です' } },
    deadline: { required: '有効期限は必須入力です' },
    count: { required: '数量は必須入力です', },
  }

  return (
    <>
      <input
        {...props}
        { ...rules[name]}
        className={`${inputStyle[variant]} ${className}`}
        name={name}
        placeholder={placeholder}
        type={type}
        min={-1}
      />
    </>
  );
};

export default Input