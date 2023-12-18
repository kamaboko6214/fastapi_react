import { FC, HTMLAttributes } from "react";

type Props = React.HTMLAttributes<HTMLInputElement> & {
  variant: keyof typeof inputStyle
  placeholder: string
  name: string
};

  const inputStyle = {
    "auth": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500",
  } as const;


  const Input = ({ variant, placeholder, name, ...props }: Props) => {
  return (
    <input 
    className={`${inputStyle[variant]}`} 
    name={name} 
    placeholder={placeholder} 
    type="text"
    {...props}
    />
  );
};

export default Input