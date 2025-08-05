
import React, { useState } from "react";
import { MdOutlineSwapCalls } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoCard, IoArrowUpCircle } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function MobileMenu({ showMenu }) {
    const [isHoveredTrade, setIsHoveredTrade] = useState(false);
    const [isHoveredExplore, setIsHoveredExplore] = useState(false);
    const [isHoveredPool, setIsHoveredPool] = useState(false);

    return (
      <ul
  className={`fixed bottom-0 left-0 w-screen h-screen z-[100] bg-zinc-800 flex flex-col justify-center items-center gap-8 font-semibold text-lg text-[#ffffffa6]
      md:relative md:flex-row md:bg-transparent md:w-auto md:h-auto md:z-auto
      transition-all duration-1000 ease-in-out transform
      ${showMenu ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"}
  min-[320px]:-bottom-24 min-[320px]:rounded-t-4xl md:top-0`}
>

            <li className="relative hover:text-zinc-200 cursor-pointer min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:gap-3"
                onMouseEnter={() => setIsHoveredTrade(true)}
                onMouseLeave={() => setIsHoveredTrade(false)}
            >
                Trade <span className="min-[320px]: md:hidden"><FaAngleDown/></span>
                <ul className={`absolute bg-zinc-800 rounded-xl p-1 -left-10 flex flex-col gap-0.5 top-10 transition-all duration-300 ease-in-out transform ${isHoveredTrade ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    <MenuItem icon={<MdOutlineSwapCalls className="rotate-90 text-xl" />} label="Swap" />
                    <MenuItem icon={<BsFillBarChartFill />} label="Limit" />
                    <MenuItem icon={<IoCard />} label="Buy" />
                    <MenuItem icon={<IoArrowUpCircle />} label="Sell" />
                </ul>
            </li>

            <li className="relative hover:text-zinc-200 cursor-pointer min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:gap-3"
                onMouseEnter={() => setIsHoveredExplore(true)}
                onMouseLeave={() => setIsHoveredExplore(false)}
            >
                Explore <span className="min-[320px]: md:hidden"><FaAngleDown/></span>
                <ul className={`absolute bg-zinc-800 rounded-xl p-1 -left-10 flex flex-col gap-0.5 top-10 transition-all duration-300 ease-in-out transform ${isHoveredExplore ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    <MenuItem icon={<MdOutlineSwapCalls className="rotate-90 text-xl" />} label="Tokens" />
                    <MenuItem icon={<BsFillBarChartFill />} label="Pools" />
                    <MenuItem icon={<IoCard />} label="Buy" />
                    <MenuItem icon={<IoArrowUpCircle />} label="Transactions" />
                </ul>
            </li>

            <li className="relative hover:text-zinc-200 cursor-pointer min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:gap-3"
                onMouseEnter={() => setIsHoveredPool(true)}
                onMouseLeave={() => setIsHoveredPool(false)}
            >
                Pool <span className="min-[320px]: md:hidden"><FaAngleDown/></span>
                <ul className={`absolute bg-zinc-800 rounded-xl p-1 -left-10 flex flex-col gap-0.5 top-10 transition-all duration-300 ease-in-out transform ${isHoveredPool ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    <MenuItem icon={<MdOutlineSwapCalls className="rotate-90 text-xl" />} label="View positions" />
                    <MenuItem icon={<BsFillBarChartFill />} label="Create position" />
                </ul>
            </li>
        </ul>
    );
}

const MenuItem = ({ icon, label }) => (
    <li className="flex gap-2 items-center rounded-xl bg-zinc-900 pl-3 pr-14 py-3 text-base hover:bg-zinc-950 cursor-pointer duration-200">
        <span className="font-semibold text-xl">{icon}</span>
        {label}
    </li>
);

export default MobileMenu;
