import React, { useState, MouseEvent, FormEvent } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../common/Button'
import Input from '../common/Input'
import { useStockRegistration } from '../../hooks/useStockRegistration'
import { StockList } from '../../types'
import { useNavigate } from 'react-router-dom'
import FlashMeesage from '../common/FlashMessage '
import Require from '../common/Require'

const items: Array<{ [key: string]: string }> =
    [
        {
            'name': 'name',
            'type': 'text',
            'label_name': '名前',
            'placeholder': '例）　トマト'
        },
        {
            'name': 'deadline',
            'label_name': '有効期限',
            'type': 'date',
        },
        {
            'name': 'count',
            'label_name': '数量',
            'type': 'number',
            'placeholder': '3'
        }
    ]

const Registration = () => {
    const [genre_id, setGenre_id] = useState<number>(1)
    const [name, setName] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [count, setCount] = useState<number>(0)
    const [isRegister, setIsRegister] = useState<boolean>(false)
    const postRegistration = useStockRegistration()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'genre') {
            if (e.target.value = '食材') {
                setGenre_id(1)
            } else if (e.target.value = '調味料') {
                setGenre_id(2)
            } else if (e.target.value = 'その他') {
                setGenre_id(3)
            }

        } else if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'deadline') {
            setDeadline(e.target.value)
        } else if (e.target.name === 'count') {
            setCount(e.target.valueAsNumber)
        }
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params: StockList = {
            name,
            genre_id,
            deadline,
            count,
        }
        try {
            const res = await postRegistration(params)
            if(res == 200) {
                setIsRegister(true)
                setTimeout(() => {
                    window.location.reload()
                }, 3000);            
            }
        }
        catch(e) {
            alert(e)
        }
    }

    return (
        <div className='bg-gray-200 min-h-screen w-full flex flex-col items-center'>
            <h1 className='text-center pt-10 text-2xl font-bold text-gray-700'>在庫登録</h1>
            {
                isRegister ? <FlashMeesage /> : <></>
            }
            <form className='w-96 py-5 mt-12' onSubmit={handleSubmit}>
                    <p className="mb-2 text-md font-medium text-gray-900 dark:text-white"><Require/>ジャンル</p>
                    <select name="example" className='w-full mb-8 shadw appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500'>
                        <option>食材</option>
                        <option>調味料</option>
                        <option>その他</option>
                    </select>
                    {items.map((item, i) => {
                        return (
                            <div key={i} className='mb-8'>
                                <p className="w-full mb-2 text-md font-medium text-gray-900 dark:text-white"><Require/>{item.label_name}</p>
                                <Input id={item.name} variant="index" placeholder={item.placeholder} name={item.name} type={item.type} onChange={handleChange}></Input>
                           </div>
                        )
                    })}
                <Button type='submit' variant='squareBlue' className='mx-auto mt-5 mb-5 py-2 px-5 h-12 font-bold text-xl'>登録</Button>
            </form>
        </div>
    )
}

export default Registration