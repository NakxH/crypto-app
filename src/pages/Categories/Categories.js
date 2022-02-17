import React from 'react'
import { CategoryList } from '../../components/CategoryList'

export const Categories = () => {
    return (
        <React.Fragment>
            <h1 className='ml-4 mt-4 text-xl'>
                Categories
            </h1>
            <CategoryList>
                
            </CategoryList>
        </React.Fragment>
    )
}