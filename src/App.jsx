import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowDown } from "react-icons/fi";
import Logo from "/src/assets/logo.png"
import ETH from "/src/assets/ETH.png"

function App() {
  return (
    <div>
      <nav className='flex justify-between items-center py-1 px-3'>
        <div className='flex  items-center gap-10 w-1/3'>
          <div className="logo w-1/6 ">
            <img src={Logo} alt="" />
          </div>
          <ul className='flex justify-center items-center gap-6 font-bold text-lg text-[#ffffffa6]'>
            <li>Trade</li>
            <li>Explore</li>
            <li>Pool</li>
          </ul>
        </div>
        <div className='w-1/3'>

        <div className='border border-zinc-600 flex justify-between items-center w-3/4 mx-auto py-2 px-4 bg-zinc-800 rounded-full cursor-pointer'>
          <div className='font-semibold'><IoSearchOutline className='text-xl text-zinc-400 font-semibold'/></div>
          <input type="text" className='outline-none border-none w-full h-full pl-2 placeholder:text-lg placeholder:text-[#ffffffa6] font-semibold' placeholder='Search tokens and pools' />
          <div className='bg-zinc-700 px-2  pb-1 text-xs rounded-sm'>/</div>
        </div>
        </div>

        <div className=' w-1/3 flex justify-end gap-8'>
          <button className='border border-zinc-600 px-3 py-1 rounded-xl text-sm bg-transparent font-bold'>Get the app </button>
          <button><BsThreeDots/></button>
          <button className='bg-[#508dc7] py-1 text-sm font-bold tracking-wide px-4 rounded-xl'>Connect</button>
        </div>
      </nav>

      <main className='flex flex-col justify-end items-center h-[85vh]'>
        <div className='text-center text-4xl font-semibold'>
        <h1>Swap anytime</h1>
        <h1>anywhere.</h1>
        </div>

        <div className='bg-[#1F1F1F] w-1/3 rounded-2xl h-[50vh] p-2  my-6'>
        <div className='relative flex flex-col gap-y-1 h-[83%]'>

          <div className='border border-zinc-600 h-1/2 rounded-2xl py-3 px-4 flex justify-between items-center'>
            <div className="left flex flex-col justify-between h-full">
              <h3 className='font-semibold text-lg text-[#ffffffa6]'>Sell</h3>
              <input type="text" className='outline-none border-none w-full placeholder:text-[#ffffffa6] font-semibold text-3xl placeholder:my-auto ' placeholder='0' />
              <div className='text-[#ffffffa6] mt-1'>$0</div>
            </div>
            <div className="right w-1/4">
              <div className='border border-[#ffffffa6] cursor-pointer w-full flex rounded-full justify-center items-center gap-1 px-4 py-1'>
                <img src={ETH} alt="" className='h-full w-1/2 pl-1' />
                <span className='font-semibold text-lg'>
                  ETH
                  </span>
                <span className='pr-2'><IoIosArrowDown /></span>
              </div>
            </div>
          </div>
          <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-zinc-800 border-4 cursor-pointer border-[#1F1F1F] text-2xl rounded-xl p-2'><FiArrowDown/></button>
          <div className='bg-[#161615] h-1/2 rounded-2xl py-3 px-4 flex justify-between items-center'>
            <div className="left h-full">
              <h3 className='font-semibold text-lg text-[#ffffffa6]'>Sell</h3>
              <input type="text" className='outline-none border-none w-full placeholder:text-[#ffffffa6] font-semibold text-3xl ' placeholder='0' />
            </div>
            <div className="right flex flex-col justify-end items-end w-2/3">
             
              <button className='bg-[#508dc7] py-1  font-bold tracking-wide px-4 rounded-full flex items-center justify-center gap-2 text-lg'>Select token

                <span className=''><IoIosArrowDown /></span>
              </button>
            </div>
          </div>
        </div>

          <button className='bg-[#251521] py-3 rounded-2xl font-bold text-blue-500 text-lg w-full mt-1 cursor-pointer'>Get started</button>
        </div>
        <div className='w-1/3 text-center'>
          <p className='font-semibold text-[#ffffffa6] w-full text-center'>The largest onchain marketplace. Buy and sell crypto on Ethereum and 12+ other chains.</p>
        </div>
      </main>
    </div>
  )
}

export default App