import React, { useState, useEffect, useRef } from "react";
import SwapCard from "./components/SwapCard";
import Navbar from "./components/Navbar/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { RiTokenSwapLine } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import SearchBar from "./components/Navbar/SearchBar";
import SearchToken from "./components/searchToken";


function App() {
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
  const [showSearchToken, setShowSearchToken] = useState(false)

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

  const handleSearchToken = (e) => {
    setShowSearchToken(prev => !prev)
  }


  const handleCopy = (address, idx) => {
    navigator.clipboard.writeText(address);
    setCopiedIdx(idx);
    setTimeout(() => {
      setCopiedIdx(null);
    }, 2000);
  };

  return (
    <div className="h-screen w-full relative">
      <Navbar handleSearchToken={handleSearchToken} />
      <main className="flex flex-col justify-center items-center h-[85vh] md:h-full lg:h-[85vh] lg:gap-3 xl:h-[90vh]">
        <div className="text-center text-4xl font-semibold min-[320px]:text-3xl  xl:text-4xl">
          <h1>Swap anytime</h1>
          <h1>anywhere.</h1>
        </div>

        <SwapCard />

        <div className="w-1/3 text-center md:w-1/2 xl:w-1/3 min-[320px]:w-[90%]">
          <p className="font-semibold text-[#ffffffa6] w-full text-center">
            The largest onchain marketplace. Buy and sell crypto on Ethereum and
            12+ other chains.
          </p>
        </div>
      </main>
      {showSearchToken && <SearchToken />}
    </div>
  );
}

export default App;
