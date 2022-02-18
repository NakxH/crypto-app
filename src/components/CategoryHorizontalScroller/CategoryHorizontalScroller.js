import React from 'react'
import { HorizontalScroller } from '../HorizontalScroller/HorizontalScroller'
import { Card } from '../Card/Card'

export const CategoryHorizontalScroller = () => {
    return (
        <HorizontalScroller>
            <div className='w-3/4 mr-5 shrink-0 text-white p-1'>
                <Card>
                    <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
                </Card>
            </div>
            <div className='w-3/4 mr-5 shrink-0 text-white p-1'>
                <Card>
                    <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
                </Card>
            </div>
            <div className='w-3/4 mr-5 shrink-0 text-white p-1'>
                <Card>
                    <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
                </Card>
            </div>
        </HorizontalScroller>
    )
}