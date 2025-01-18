/* eslint-disable @next/next/no-img-element */
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
  <div>
    <main className=' relative'>
      <div>
        <img src="images/grid.png" alt="" className='absolute top-0' />
      </div>
      <Navbar/>
    <div>
   <CommunitySection/>
    </div>
    <Footer/>
    </main>
  </div>
    </>
  )
}

export default page