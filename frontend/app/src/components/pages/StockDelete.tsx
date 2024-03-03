import React from 'react'
import Button from '../common/Button'
import { useDeleteStock } from '../../hooks/useDeleteStock'
import { deleteParams } from '../../types/index'

type params = {
    stock_id: number,
    stock_count: number,
    count: number,
    SetisDeleted: React.Dispatch<React.SetStateAction<boolean>>
}


const StockDelete = ({ stock_id, stock_count, count, SetisDeleted }: params) => {
    const deleteStock = useDeleteStock()
    const handleClick = async () => {
        if (count > stock_count) {
            alert('在庫数以上削除できません。')
            return false
        } else {
            const confirm = window.confirm("本当に削除しますか？");
            if (confirm) {
                SetisDeleted(true)
                const res = await deleteStock(stock_id, count)
                if(res) {
                    await SetisDeleted(false)
                }
            }
        }
    }
    return (
        <>
            <Button variant='delete' onClick={handleClick}>削除</Button>
        </>
    )
}

export default StockDelete
