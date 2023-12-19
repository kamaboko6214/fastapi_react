import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const Header:React.FC = () => {
    const [visible, setVisible] = useState('visible')
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const toggleHamburger = () => {
        setVisible(visible === 'visible' ? 'hidden' : 'visible')
    }
    useEffect(() => {
        if (!isDesktopOrLaptop) setVisible('hidden')
        else setVisible('visible')
      }, [isDesktopOrLaptop])
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-4">
                <div className="flex items-center flex-shrink-0 text-white mx-6">
                    <img className='w-8 h-6 mr-2'  src="images/nav_mainlogo.svg" alt="" />
                    <NavLink to={'/'}><span className="font-bold text-3xl tracking-tight">我が家の在庫管理</span></NavLink>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggleHamburger} className="flex items-center px-3 py-2 border rounded bg-[#C2F8E711] text-[#C2F8E799] border-[#C2F8E799] hover:text-white hover:border-[#C2F8E7]">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={`${visible} w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end mx-20}`}>
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
