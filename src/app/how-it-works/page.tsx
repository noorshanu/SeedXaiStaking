/* eslint-disable @next/next/no-img-element */
import EcosystemSection from '@/components/EcosystemSection'
import Footer from '@/components/Footer'
import LaunchpadCards from '@/components/LaunchPadCard'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
       <main className=' relative'>
       <img src="images/hero.png" alt=""  className=' absolute top-[-400px] right-0 left-0 sm:left-[400px] bottom-0 h-auto sm:h-[700px]'/>
        <div>
          <img src="images/grid.png" alt="" className='absolute top-0' />
        </div>
        <Navbar/>
        <div className='max-w-7xl mx-auto relative'>

<LaunchpadCards/>
      
        </div>
        <Footer/>
       </main>
    </div>
  )
}

export default page