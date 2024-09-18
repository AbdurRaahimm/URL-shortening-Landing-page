import React from 'react'
import Button from './Button'

export default function Boost() {
  const goShortenForm = () => {
    document.getElementById('shorten').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="bg-[url('/images/bg-boost-mobile.svg')] bg-no-repeat bg-cover md:bg-[url('/images/bg-boost-desktop.svg')] md:bg-no-repeat md:bg-cover py-16 bg-[#3A3053] grid place-items-center space-y-3">
      <h1 className='text-white text-3xl font-bold text-center'>Boost your links today</h1>
      <span onClick={goShortenForm}><Button >get started</Button></span>
    </section>
  )
}
