import React from 'react'
import ShortenForm from './ShortenForm'

export default function Statistics() {
  return (
    <section className='bg-[#f0f1f6] pt-20 pb-20 relative'>
      <ShortenForm />
      <div className="w-5/6 md:w-6/12 lg:w-5/12 mx-auto text-center space-y-3 pt-20">
        <h2 className='text-2xl md:text-4xl font-bold capitalize' >advanced Statistics</h2>
        <p className=' text-md text-slate-500'>Track how your links are performing across the web with our advanced Statistics dashboard</p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 gap-9 pt-20 pb-24 before:content-[''] box-section  ">
        <div className="bg-white rounded-md py-5 px-8 relative space-y-14">
          <div className="bg-[#42385d] size-20 p-4 rounded-full absolute left-[40%] sm:left-[10%] -inset-9 grid place-items-center">
            <img src="/images/icon-brand-recognition.svg" alt="" loading='lazy' />
          </div>

          <div className="space-y-4">
            <h3 className='capitalize text-xl font-bold'>Brand Recognition</h3>
            <p className='text-sm text-[#9e9aa7] leading-6'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
        </div>
        <div className="bg-white rounded-md py-5 px-8 space-y-14 relative translate-y-10 ">
          <div className="bg-[#42385d] size-20 p-4 rounded-full absolute left-[40%] sm:left-[10%] -inset-9 grid place-items-center">
            <img src="/images/icon-detailed-records.svg" alt="" loading='lazy' />
          </div>
          <div className="space-y-4">
            <h3 className='capitalize text-xl font-bold'>Detailed Records</h3>
            <p className='text-sm text-[#9e9aa7] leading-6'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
        </div>
        <div className="bg-white rounded-md py-5 px-8 space-y-14 relative translate-y-20 ">
          <div className="bg-[#42385d] size-20 p-4 rounded-full absolute left-[40%] sm:left-[10%] -inset-9 grid place-items-center">
            <img src="/images/icon-fully-customizable.svg" alt="" loading='lazy' />
          </div>
          <div className="space-y-4">
            <h3 className='capitalize text-xl font-bold'>Fully Customizable</h3>
            <p className='text-sm text-[#9e9aa7] leading-6'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>

    </section>
  )
}


