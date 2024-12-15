import React from 'react'
import Jobs from './Jobs'

export default function CardsTab() {

  

    return (
        <div className='w-full grid grid-cols-4 gap-7 cursor-pointer'>
            <Jobs />
            <Jobs />
            <Jobs />
            <Jobs />
            <Jobs />
        </div>
    )
}

