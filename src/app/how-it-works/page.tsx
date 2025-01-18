/* eslint-disable @next/next/no-img-element */
import EcosystemSection from '@/components/EcosystemSection'
import Footer from '@/components/Footer'
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

          <div className='headerm px-6 py-16 rounded-2xl mt-12 mx-2 sm:mx-0'>

            <h1 className=' text-center text-4xl sm:text-8xl font-semibold lh-1_3 mx-2 sm:mx-0'>
            Get Started with <br />
            Seed AI
            </h1>

            <p className=' text-center text-xl sm:text-2xl font-semibold lh-1_2 mt-5'>
            Learn how Seed AI’s technology connects everything from AI agents <br /> to its token-powered ecosystem.
            </p>

          </div>
            <h1 className='text-4xl font-bold text-center my-12'>How it works</h1>

            <div className='relative'>
            <img src="images/seedblur.png" alt="" className='absolute top-[-100px] left-[-200px]  ' />
              <img src="images/flowchart.png" alt="how-it-works" className='mx-auto ' />
              <img src="images/eco.png" alt="" className="absolute top-[-100px] right-[0px]   " />
            </div>

            <div className=''>
              <EcosystemSection/>
            </div>
        </div>
        <Footer/>
       </main>
    </div>
  )
}

export default page