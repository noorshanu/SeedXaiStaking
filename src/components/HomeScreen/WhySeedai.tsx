/* eslint-disable @next/next/no-img-element */
import React from 'react'

function WhySeedai() {
  return (
 <section className='my-10 py-10 relative '>
  <img src="images/seedblur.png" alt="" className='absolute top-[-100px] left-[-200px]  ' />
  <img src="images/lineer.png" alt="" className='absolute top-[-150px] right-0  h-[200px] sm:h-auto ' />
    <div className=' container mx-auto'>
        <h2 className=' text-4xl font-bold text-center mb-7'>Why <span className='text-[#A77DFF]'>SeedAI?</span> </h2>

        <div>
            <img src="images/seedai.png" alt="" className=' mx-auto'/>
        </div>

    </div>
 </section>
  )
}

export default WhySeedai