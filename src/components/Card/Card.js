import React from 'react'

export const Card = ({ children }) => {
    return (
        <div className='bg-gray-700 rounded-md p-4 text-white'>
            {children}
        </div>
    )
}