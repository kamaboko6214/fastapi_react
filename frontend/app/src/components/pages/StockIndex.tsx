import React, { useEffect, useState } from 'react'
import Tab from '../common/Tab'
import Button from '../common/Button'
import { NavLink } from 'react-router-dom'
import { StockList } from '../../types/index'
import useStockList from '../../hooks/useStockList'

const menus: string[] = ['食材', '調味料', 'その他']
const StockIndex = () => {
  const getStockList = useStockList()
  const [stockList, setStockList] = useState<StockList[]>([])
  useEffect(() => {
    const init = async () => {
      const result = await getStockList()
      setStockList(result)
    }
    init()
  }, [])    
  return (
    <div className='bg-gray-200 min-h-screen'>
      <h1 className='text-center pt-10 text-2xl font-bold text-gray-700'>在庫一覧</h1>
      <div className='flex flex-col items-center justify-center py-5 mx-32'>
        <NavLink to={'/registration'} className='ml-auto'><Button variant='squareBlue' className='mb-5 py-2 px-5 h-12 font-bold text-xl' >➕  在庫の登録  </Button></NavLink>
        <div className='w-full'>
          {menus.map((menu, i) => {
            return (
              <Tab name={menu} key={i} />
            )
          })}
        </div>
        <table className='w-full'>
          <thead className='border border-collapse '>
            <tr>
              <th className='bg-gray-500 text-white py-2 px-4 text-2xl  w-1/3'>
                名前
              </th>
              <th className='bg-gray-500 text-white py-2 px-4 text-2xl  '>
                消費期限
              </th>
              <th className='bg-gray-500 text-white py-2 px-4 text-2xl  '>
                個数
              </th>
              <th className='bg-gray-500 text-white py-2 px-4 text-2xl  '>
                メッセージ
              </th>
              <th className='bg-gray-500 text-white py-2 px-4 text-2xl   '>
                消費
              </th>
            </tr>
          </thead>
          <tbody className='border border-collapse border-gray-300'>
              {stockList.map((stockItem, i) => {
                return (
                    <tr key={i} className="hover:bg-gray-300 bg-gray-200 dark:hover:bg-gray-700 border-b border-gray-300">
                      <td className='text-center py-2 px-4 text-xl'>
                        {stockItem.name}
                      </td>
                      <td className='text-center py-2 px-4 text-xl'>
                        {stockItem.deadline}
                      </td>
                      <td className='text-center py-2 px-4 text-xl'>
                        {stockItem.count}
                      </td>
                      <td className='text-center py-2 px-4 text-xl'>
                        {stockItem.message}
                      </td>
                      <td className='text-centerpy-2 px-4 text-xl'>
                        <input type="number" className='w-12 px-1' />
                      </td>
                    </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StockIndex