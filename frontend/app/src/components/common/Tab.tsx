import React from 'react'

type Props = { name: string }

const Tab = ({ name }: Props) => {
  return (
    <button className='bg-cyan-700 text-gray-400 py-2 px-4 text-3xl w-full border border-white mb-5'>{name}</button>
  )
}

export default Tab