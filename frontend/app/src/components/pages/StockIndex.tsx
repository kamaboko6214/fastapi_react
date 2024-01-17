import React from 'react'
import Tab from '../common/Tab'
import Button from '../common/Button'
import { NavLink } from 'react-router-dom'

const menus: string[] = ['食材', '調味料', 'その他']
const StockIndex = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
    <h1 className='text-center pt-10 text-2xl font-bold text-gray-700'>在庫一覧</h1>
      <div className='flex flex-col items-center justify-center py-5 mx-32'>
        <NavLink to={'/registration'} className='ml-auto'><Button variant='squareBlue' className='mb-5 py-2 px-5 h-12 font-bold text-xl' >➕  在庫の登録  </Button></NavLink>
          <div className='w-full'> 
              {menus.map((menu) => {
                return (
                  <Tab name={menu} />
                )
              })}
          </div>
          <table className='w-full'>
            <thead className='border border-collapse '>
              <tr>
                <th className='bg-gray-700 text-white py-2 px-4 text-2xl  w-1/3'>
                  名前
                </th>
                <th className='bg-gray-700 text-white py-2 px-4 text-2xl  '>
                  消費期限
                </th>
                <th className='bg-gray-700 text-white py-2 px-4 text-2xl  '>
                  個数
                </th>
                <th className='bg-gray-700 text-white py-2 px-4 text-2xl  '>
                  メッセージ
                </th>
                <th className='bg-gray-700 text-white py-2 px-4 text-2xl   '>
                  消費
                </th>
              </tr>
            </thead>
            <tbody className='border border-collapse border-gray-300'>
              <tr>
                <td className='text-center bg-gray-300 py-2 px-4 text-xl'>
                  お肉
                </td>
                <td className='text-center bg-gray-300 py-2 px-4 text-xl'>
                  2024/12/31
                </td>
                <td className='text-center bg-gray-300 py-2 px-4 text-xl'>
                  3
                </td>
                <td className='text-center bg-gray-300 py-2 px-4 text-xl'> 
                  
                </td>
                <td className='text-center bg-gray-300 py-2 px-4 text-xl'>
                  <input type="number" className='w-12 px-1' />
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default StockIndex