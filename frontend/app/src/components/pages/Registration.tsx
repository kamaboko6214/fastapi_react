import React from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

const items: Array<{ [key: string]: string }> =
    [
        {
            'name': 'ジャンル',
            'type': 'select',
        },
        {
            'name': '名前',
            'type': 'text',
            'placeholder': '例）　トマト'
        },
        {
            'name': '賞味期限',
            'type': 'date',
        },
        {
            'name': '数量',
            'type': 'number',
            'placeholder': '3'
        }
    ]

const Registration = () => {
    return (
        <div className='bg-gray-200 min-h-screen w-full'>
            <h1 className='text-center pt-10 text-2xl font-bold text-gray-700'>在庫登録</h1>
            <form className='py-5 mt-12 text-center'>
                <div>
                    {items.map((item, i) => {
                        return (
                            <>
                                <label className=" block mb-2 text-md font-medium text-gray-900 dark:text-white">{item.name}</label>
                                <Input key={i} variant="index" placeholder={item.placeholder} name={item.name} type={item.type} className='mb-8'></Input>
                            </>
                        )
                    })}
                </div>
                <Button variant='squareBlue' className='mx-auto mt-5 mb-5 py-2 px-5 h-12 font-bold text-xl' >登録</Button>
            </form>
        </div>
    )
}

export default Registration