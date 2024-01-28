import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import useStockRegistration from '../../hooks/useStockRegistration'
import { StockList } from '../../types'
import { useNavigate } from 'react-router-dom'

const items: Array<{ [key: string]: string }> =
    [
        // {
        //     'name': 'genre',
        //     'label_name' : 'ジャンル',
        //     'type': 'select',
        // },
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
    const navigate = useNavigate()
    const postStockList = useStockRegistration()
    const [genre, setGenre] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'genre') {
            setGenre(e.target.value)
        } else if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'deadline') {
            setDeadline(e.target.value)
        } else if (e.target.name === 'count') {
            setCount(e.target.valueAsNumber)
        }
    }

    const handleSubmit = async () => {
        const params: StockList = {
            genre,
            name,
            deadline,
            count,
        }
        try {
            const res = await postStockList(params)
            if (res.status === 200) {
                alert('登録成功！')
                navigate('/stockindex')
            } else {
                alert('登録失敗')
            }
        }
        catch {
            alert('登録失敗')
        }
    }

    return (
        <div className='bg-gray-200 min-h-screen w-full'>
            <h1 className='text-center pt-10 text-2xl font-bold text-gray-700'>在庫登録</h1>
            <form className='py-5 mt-12 text-center' onSubmit={handleSubmit}>
                <div>
                    <label className=" block mb-2 text-md font-medium text-gray-900 dark:text-white">ジャンル</label>
                    <select name="example" className='mb-8 shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500'>
                        <option>食材</option>
                        <option>調味料</option>
                        <option>その他</option>
                    </select>
                    {items.map((item, i) => {
                        return (
                            <div key={i}>
                                <label className=" block mb-2 text-md font-medium text-gray-900 dark:text-white">{item.label_name}</label>
                                <Input variant="index" placeholder={item.placeholder} name={item.name} type={item.type} className='mb-8' onChange={handleChange}></Input>
                            </div>
                        )
                    })}
                </div>
                <Button variant='squareBlue' className='mx-auto mt-5 mb-5 py-2 px-5 h-12 font-bold text-xl' >登録</Button>
            </form>
        </div>
    )
}

export default Registration