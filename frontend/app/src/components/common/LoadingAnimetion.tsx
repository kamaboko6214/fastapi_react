import React from 'react'

const LoadingAnimetion = () => {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className="pt-20 flex justify-center" aria-label="読み込み中">
                <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
                <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
            </div>
        </div>
    )
}

export default LoadingAnimetion
