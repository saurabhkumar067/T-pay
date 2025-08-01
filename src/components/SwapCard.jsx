import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowDown } from "react-icons/fi";
import ETH from "/src/assets/ETH.png";

function SwapCard() {
    return (
        <div className="bg-[#1F1F1F] w-1/3 rounded-2xl h-[50vh] p-2  my-6 md:w-3/5 md:my-4 md:h-3/5 lg:w-1/2 xl:w-1/3 xl:h-[55%] xl:my-6 min-[320px]:w-[90%]">
            <div className="relative flex flex-col gap-y-1 h-[83%] md:h-[82%]">
                <div className="border border-zinc-600 h-1/2 rounded-2xl py-3 px-4 flex justify-between items-center">
                    <div className="left flex flex-col justify-between h-full">
                        <h3 className="font-semibold text-lg text-[#ffffffa6]">Sell</h3>
                        <input
                            type="text"
                            className="outline-none border-none w-full placeholder:text-[#ffffffa6] font-semibold text-3xl placeholder:my-auto"
                            placeholder="0"
                        />
                        <div className="text-[#ffffffa6] mt-1">$0</div>
                    </div>
                    <div className="right w-1/4 min-[320px]:w-1/2 sm:w-1/4 md:w-[35%] lg:w-1/4 min-[2000px]:w-[15%]">
                        <div className="border border-[#ffffffa6] cursor-pointer w-full flex rounded-full justify-center items-center gap-1 px-4 py-1 sm:py-0.5 sm:px-0 md:p-0 xl:py-1 xl:px-4">
                            <img src={ETH} alt="ETH token" className="h-full w-1/2 pl-1 sm:h-12 sm:object-contain sm:w-2/5 xl:w-1/2 xl:h-full" />
                            <span className="font-semibold text-lg">ETH</span>
                            <span className="pr-2"><IoIosArrowDown /></span>
                        </div>
                    </div>
                </div>

                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 border-4 cursor-pointer border-[#1F1F1F] text-2xl rounded-xl p-2">
                    <FiArrowDown />
                </button>

                <div className="bg-[#161615] h-1/2 rounded-2xl py-3 px-4 flex justify-between items-center">
                    <div className="left h-full flex justify-between items-start flex-col">
                        <h3 className="font-semibold text-lg text-[#ffffffa6]">Buy</h3>
                        <input
                            type="text"
                            className="outline-none border-none w-full placeholder:text-[#ffffffa6] font-semibold text-3xl"
                            placeholder="0"
                        />
                        <div className="text-[#ffffffa6] mt-1">$0</div>
                    </div>

                    <div className="right flex flex-col justify-end items-end w-2/3 min-[320px]:w-[170%] sm:w-[35%] md:w-3/5 xl:w-2/3">
                        <button className="bg-[#508dc7] py-1 font-bold tracking-wide px-4 rounded-full flex items-center justify-center gap-2 text-lg min-[320px]:text-xs min-[320px]:py-[7px] sm:text-lg md:text-[1rem] 2xl:text-lg xl:py-1">
                            Select token
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>

            <button className="bg-[#251521] py-3 rounded-2xl font-bold text-blue-500 text-lg w-full mt-1 cursor-pointer">
                Get started
            </button>
        </div>
    );
}

export default SwapCard;
