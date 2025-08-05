import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Logo from "/src/assets/logo.png";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showMenu = toggle || windowWidth >= 765;
    const showToggleIcon = windowWidth < 765;

    return (
        <nav className="flex justify-between items-center py-1 px-3 min-[320px]:py-3 min-[320px]:px-0 min-[320px]:pt-0 sm:px-3 xl:py-1 xl:px-3">
            <div className="flex items-center gap-10 w-1/3 md:w-1/2 xl:w-1/3 min-[320px]:gap-0 xl:gap-10 relative">
                <div className="logo w-1/6 min-[320px]:w-full min-[425px]:w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6">
                    <img src={Logo} alt="Logo" />
                </div>

                {showToggleIcon && (
                    <div className="text-3xl cursor-pointer" onClick={() => setToggle((prev) => !prev)}>
                        {toggle ? <RxCross2 /> : <IoReorderThreeOutline />}
                    </div>
                )}

                <ul
                    className={`fixed top-0 left-0 w-screen h-screen z-[100] bg-zinc-800 flex flex-col justify-center items-center gap-6 font-bold text-lg text-[#ffffffa6]
            md:relative md:flex-row md:bg-transparent md:w-auto md:h-auto md:z-auto
            transition-all duration-1000 ease-in-out transform
            ${showMenu ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
          `}
                >
                    <li>Trade</li>
                    <li>Explore</li>
                    <li>Pool</li>
                </ul>
            </div>

            <div className="w-2/3 flex justify-between items-center md:gap-3 md:justify-end xl:justify-between xl:gap-0 min-[425px]:w-1/2 sm:w-1/3 md:w-1/2 xl:w-2/3">
                <div className="w-1/2 md:w-fit xl:w-1/2">
                    <div className="border border-zinc-600 flex justify-between items-center w-3/4 mx-auto py-2 px-4 bg-zinc-800 rounded-full cursor-pointer min-[320px]:bg-transparent min-[320px]:border-none md:w-fit md:px-2 md:bg-transparent md:border-none xl:border xl:bg-zinc-800 xl:px-4 xl:w-3/4">
                        <IoSearchOutline className="text-xl text-zinc-400 font-semibold md:text-white xl:text-xl xl:text-zinc-400" />
                        <input
                            type="text"
                            className="outline-none border-none w-full h-full pl-2 placeholder:text-lg placeholder:text-[#ffffffa6] font-semibold xl:block min-[320px]:hidden"
                            placeholder="Search tokens and pools"
                        />
                        <div className="bg-zinc-700 px-2  pb-1 text-xs rounded-sm xl:block min-[320px]:hidden">/</div>
                    </div>
                </div>

                <div className="w-1/3 flex justify-end gap-8 md:w-fit md:gap-5 xl:gap-8 xl:w-1/3 min-[320px]:gap-5">
                    <button className="border border-zinc-600 px-3 py-1 rounded-xl text-sm bg-transparent font-bold min-[320px]:hidden md:block">
                        Get the app
                    </button>
                    <button><BsThreeDots /></button>
                    <button className="bg-[#508dc7] py-1 text-sm font-bold tracking-wide px-4 rounded-xl min-[320px]:mr-2">
                        Connect
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
