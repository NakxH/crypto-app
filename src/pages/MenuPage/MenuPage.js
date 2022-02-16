import React from 'react'
import { Card } from '../../components/Card/Card'

export const MenuPage = () => {
    return (
        <React.Fragment>
            <h1 className='ml-4 mt-4 text-xl'>
                Menu
            </h1>
            <div className='w-9/12 px-4 py-6 text-white'>
                <Card>
                    Reset Application Data
                </Card>
            </div>
        </React.Fragment>
    )
}
