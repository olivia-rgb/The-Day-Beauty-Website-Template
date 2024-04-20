import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="w-full max-w-[1336px] max-md:max-w-full ">
    <header className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-5 mt-14 max-md:mt-10 max-md:max-w-full">
          <Logo />
          <h1 className="mt-32 text-6xl font-bold tracking-wider text-emerald-500 leading-[80px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
            <span className="font-black">Be </span>
            <span className="font-black text-emerald-500"> Beautiful </span> <br />
            <span className="font-black">You need time for Perfection</span>
          </h1>
          <div className="flex gap-2 mt-20 text-lg font-medium leading-6 max-md:flex-wrap max-md:mt-10">
            <button className="grow justify-center px-7 py-3.5 text-white w-fit max-md:px-5">Become a member</button>
            <button className="justify-center px-7 py-3.5 text-emerald-500 border border-emerald-500 border-solid max-md:px-5">
              See pricing
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
        <Image
          loading="lazy"
          src={'/images/heroo.png'}
          width = {1197}
          height = {798}
          className="grow w-full aspect-[0.97] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </header>
  </div>
  )
}

export default Header