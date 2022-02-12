import React from 'react'
import { Card } from '../../components/Card/Card'
import { HorizontalScroller } from '../../components/HorizontalScroller/HorizontalScroller'

export const HomePage = () => {
    return (
        <div>
            <HorizontalScroller>
                <div className='w-3/4 mr-5 shrink-0 text-white'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-3/4 mr-5 shrink-0 text-white'>
                    <Card>
                        Test
                    </Card>
                </div>
                <div className='w-3/4 mr-5 shrink-0 text-white'>
                    <Card>
                        Test
                    </Card>
                </div>
            </HorizontalScroller>
        </div>
    )
}
