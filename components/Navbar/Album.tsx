import React from 'react'
import AlbumCard from './AlbumCard'

function Album() {
    return (
        <div className='w-full grid grid-cols-4 gap-7'>
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
        </div>
    )
}

export default Album