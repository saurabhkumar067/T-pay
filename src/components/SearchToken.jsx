import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { RiTokenSwapLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
function SearchToken() {



  const [individualTokens, setIndividualTokens] = useState(
    [
      {
        image: "src/assets/token icon/tether.png",
        title: "Tether",
        currency: "USDT",
        address: "0xdAC1...1ec7",
      },
      {
        image: "src/assets/token icon/usdc.png",
        title: "USDC",
        currency: "USDC",
        address: "0xdAC1...2ec9",
      },
      {
        image: "src/assets/token icon/eth.png",
        title: "Ethereum",
        currency: "eth",
        address: "",
      },
    ],
  )
  const [tokenPairs, setTokenPairs] = useState([
    {
      image1: "src/assets/token icon/tether.png",
      image2: "src/assets/token icon/usdc.png",
      title1: "USDC",
      title2: "USDT",
      address: "ox8aa...4e47",
      version: "v4",
      volume: "0.001%",
    },
    {
      image1: "src/assets/token icon/eth.png",
      image2: "src/assets/token icon/usdc.png",
      title1: "WETH",
      title2: "USDC",
      address: "ox7Da...E8CE",
      version: "v3",
      volume: "0.005%",
    },
    {
      image1: "src/assets/token icon/tether.png",
      image2: "src/assets/token icon/eth.png",
      title1: "ETH",
      title2: "USDC",
      address: "ox3Da...E98E",
      version: "v4",
      volume: "0.05%",
    },
  ])
  const [openMenuIdx, setOpenMenuIdx] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);

const dropdownRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenMenuIdx(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);




  const handleCopy = (address, idx) => {
    navigator.clipboard.writeText(address);
    setCopiedIdx(idx);
    setTimeout(() => {
      setCopiedIdx(null);
    }, 2000); // Reset after 2 seconds
  };


  return (
     <div className="absolute border-zinc-600 border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-700 w-2/5 rounded-2xl overflow-hidden h-4/6">
        <div className="  flex justify-center items-center  w-full py-2 px-4 bg-zinc-800  cursor-pointer h-16 border-b border-zinc-600">
          <IoSearchOutline className="text-2xl text-zinc-400 font-bold" />
          <input
            type="text"
            className="outline-none border-none w-full h-full pl-2 placeholder:text-base placeholder:text-[#ffffffa6] font-semibold"
            placeholder="Search tokens and pools"
          />
          <div className="bg-zinc-700 px-2 pb-1 text-xs rounded-sm">/</div>
        </div>
        <div className="bg-zinc-800 px-3 py-3">
          <div className="font-bold flex gap-4">
            <button className="text-white ">All</button>
            <button className="text-zinc-400">Token</button>
            <button className="text-zinc-400">Pools</button>
          </div>
          <div className="max-h-95 overflow-y-auto pr-2 custom-scroll">
            <div>
              <div className=" mt-2 mb-4 font-semibold text-zinc-400 flex items-center gap-2"><span><IoMdTrendingUp /></span>Tokens by 24H volume</div>
              {/* {
                individualTokens.map((token, idx) => (
                  <div key={idx} className="group relative flex items-center justify-between gap-3 mt-5 duration-300 hover:bg-zinc-900 px-3 py-2 rounded-xl">
                    <div className="flex items-center gap-3 ">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img src={token.image} alt={token.title} className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg leading-6">{token.title}</h2>
                        <div className="flex items-center gap-2 text-sm">
                          <h4 className="font-semibold text-zinc-400 uppercase">{token.currency}</h4>
                          <p className="text-zinc-500 font-semibold">{token.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer hover:border p-1 rounded-md border-zinc-600 text-zinc-400 hidden group-hover:block"><BsThreeDots /></div>
                  </div>
                ))
              } */}

              {individualTokens.map((token, idx) => (
                <div
                  key={idx}
                  onMouseLeave={()=>  setOpenMenuIdx(null)}
                  className="group relative flex items-center justify-between gap-3 mt-5 duration-300 hover:bg-zinc-900 px-3 py-2 rounded-xl"
                >
                  {/* Left - Token Info */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src={token.image}
                        alt={token.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg leading-6">{token.title}</h2>
                      <div className="flex items-center gap-2 text-sm">
                        <h4 className="font-semibold text-zinc-400 uppercase">
                          {token.currency}
                        </h4>
                        <p className="text-zinc-500 font-semibold">{token.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Three Dots & Dropdown */}
                  <div className="relative">
                    <div
                      className="cursor-pointer hover:border p-1 rounded-md border-zinc-600 text-zinc-400 hidden group-hover:block"
                      onClick={() => setOpenMenuIdx(openMenuIdx === idx ? null : idx)}
                    >
                      <BsThreeDots />
                    </div>

                   {openMenuIdx === idx && (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-10 z-10 w-48 bg-zinc-800 border border-zinc-600 py-3 px-2 rounded-2xl flex flex-col shadow-xl"
    >
      {/* Copy Address */}
      <div
        className={`flex items-center gap-2 font-semibold px-3 py-2 rounded-xl duration-200 ${
          token.address
            ? "cursor-pointer hover:bg-zinc-900"
            : "cursor-not-allowed text-zinc-500"
        }`}
        onClick={() => {
          if (token.address) {
            handleCopy(token.address, idx);
          }
        }}
      >
        {copiedIdx === idx ? (
          <>
            <span className="text-green-500">
              <IoCheckmarkOutline />
            </span>
            Address copied!
          </>
        ) : (
          <>
            <span>
              <IoCopyOutline title="Copy address" />
            </span>
            Copy address
          </>
        )}
      </div>

      {/* Swap */}
      <div className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-zinc-900 px-3 py-2 rounded-xl duration-200">
        <span><RiTokenSwapLine /></span>
        Swap
      </div>

      {/* Send */}
      <div className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-zinc-900 px-3 py-2 rounded-xl duration-200">
        <span><RiSendPlaneFill /></span>
        Send
      </div>

      {/* Share */}
      <div className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-zinc-900 px-3 py-2 rounded-xl duration-200">
        <span><FaShare /></span>
        Share
      </div>
    </div>
  )}
                  </div>
                </div>
              ))}



            </div>
            <div>
              <div className="mt-8 mb-4 font-semibold text-zinc-400 flex items-center gap-2"><span><IoMdTrendingUp /></span>Pools by 24H volume</div>
              {
                tokenPairs.map((tokenPair, idx) => (
                  <div key={idx} className="group relative flex items-center justify-between gap-3 mt-5 duration-300 hover:bg-zinc-900 px-3 py-2 rounded-xl">
                    <div className="flex items-center gap-3 ">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex">
                        <div className="w-1/2 h-full bg-black">
                          <img src={tokenPair.image1} alt={tokenPair.title1} className="h-full w-full object-cover" />
                        </div>
                        <div className="w-1/2 h-full bg-black">
                          <img src={tokenPair.image2} alt={tokenPair.title2} className="h-full w-full object-cover" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">

                          <h2 className="font-semibold text-lg leading-6"><span>{tokenPair.title1}</span>/<span>{tokenPair.title2}</span></h2>

                          <div className="flex justify-center text-xs font-bold gap-2">
                            <p className="bg-zinc-600 px-2 py-0.5 rounded-sm text-zinc-400">{tokenPair.version}</p>
                            <p className="bg-zinc-600 px-2 py-0.5 rounded-sm text-zinc-400">{tokenPair.volume}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">

                          <p className="text-zinc-400 font-semibold">{tokenPair.address}</p>
                        </div>
                      </div>
                    </div>

                    <div className="cursor-pointer hover:border p-1 rounded-md border-zinc-600 text-zinc-400 hidden group-hover:block"><BsThreeDots /></div>


                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
  )
}

export default SearchToken