import React from 'react'

export const HorizontalScroller = ({children}) => {
    return (
        <div className='overflow-x-auto flex'>
            {children}
        </div>
    )
}
