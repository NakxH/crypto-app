import React from 'react'
import { Card } from '../../components/Card/Card'

export const Categories = () => {
    return (
        <React.Fragment>
            <h1 className='ml-4 mt-4 text-xl'>
                Categories
            </h1>
            <div className='my-5 px-2 shrink-0 text-white flex flex-wrap'>
                <div className='w-1/2 p-2 text-white'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-1/2 p-2'>
                    <Card>
                        Test
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
}