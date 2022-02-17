import React from 'react'
import { Card } from '../Card/Card'

export const HorizontalScroller = ({children}) => {
    return (
        <div className='overflow-x-auto flex'>
            <Card>
               <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
           </Card>
           <Card>
               <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
           </Card>
           <Card>
               <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
           </Card>
           <Card>
               <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
           </Card>
           <Card>
               <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
           </Card>
           <Card>
               <h1>Crypto</h1><span></span><p>CryptoPrice</p><span></span><p>percetnage</p>
           </Card>
        </div>
    )
}
