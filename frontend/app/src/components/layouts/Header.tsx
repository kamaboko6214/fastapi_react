import React from 'react'
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-4">
                <div className="flex items-center flex-shrink-0 text-white mx-6">
                    <img className='w-8 h-6 mr-2'  src="images/nav_mainlogo.svg" alt="" />
                    <NavLink to={'/'}><span className="font-bold text-3xl tracking-tight">我が家の在庫管理</span></NavLink>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end mx-20">
                    <ul className='flex list-none space-x-8'>
                        <li><NavLink to={'/login'} className="font-bold inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:text-teal-500 hover:border-transparent hover:bg-white mt-4 lg:mt-0 shadow-lg duration-200">ログイン</NavLink></li>
                        <li><NavLink to={'/register'} className="font-bold inline-block text-sm px-4 py-2 leading-none border rounded hover:border-white hover:bg-gray-300 hover:border-transparent text-teal-600 bg-white mt-4 lg:mt-0 shadow-lg duration-200">新規登録</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
