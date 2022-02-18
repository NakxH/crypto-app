import React from 'react'
import { Card } from '../Card/Card'

export const HorizontalScroller = ({children}) => {
    return (
        <div className='overflow-x-auto flex'>
           {children}
        </div>
    )
}
