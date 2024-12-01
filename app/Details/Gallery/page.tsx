"use client"
import NavigationBar from '@/components/Navbar/NavigationBar'
import PortfolioGallery from '@/components/Navbar/PortfolioGallery'
import { ProfileCard } from '@/components/Navbar/ProfileCard'
import React from 'react'

function page() {
    return (
        <>
            <NavigationBar />
            <ProfileCard />
            <div className='container mx-auto px-4 py-10'>
                <PortfolioGallery />

            </div>
        </>
    )
}

export default page