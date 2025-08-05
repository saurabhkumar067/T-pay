import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoReorderThreeOutline, IoCard, IoArrowUpCircle } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots, BsTwitterX, BsFillBarChartFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import Logo from "/src/assets/logo.png";
import DropdownMenu from "./DropdownList";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { GlobalPreferences } from "./GlobalPreferencesProps";


function Navbar({ handleSearchToken }) {
    const [toggle, setToggle] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [legalToggle, setLegalToggle] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [active, setActive] = useState("auto");
    const [isOpen, setIsOpen] = useState(false);

    const handleLegalToggle = () => setLegalToggle(prev => !prev);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showMenu = toggle || windowWidth >= 765;
    const showToggleIcon = windowWidth < 765;

    return (
        <nav className="flex justify-between items-center py-1 px-3 min-[320px]:pb-3 min-[320px]:px-0 min-[320px]:pt-3 sm:px-3 lg:pt-0 xl:py-1 xl:px-3">
            <div className="flex items-center gap-1 w-1/3 md:w-1/2 md:gap-10 xl:w-1/3 min-[320px]:gap-5 xl:gap-10 relative">
                <div
                    className="w-1/6 min-[320px]:w-1/2 md:w-1/5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="group logo w-1/6 min-[320px]:w-full  sm:w-3/4 md:w-full xl:w-full flex items-center">
                        <img src={Logo} alt="Logo" />
                        <span className="text-gray-400 group-hover:text-gray-100 min-[320px]:text-xs">
                            <FaCaretDown />
                        </span>
                    </div>

                    <DropdownMenu
                        isHovered={isHovered}
                        legalToggle={legalToggle}
                        handleLegalToggle={handleLegalToggle}
                    />
                </div>

                {showToggleIcon && (
                    <div className="text-3xl cursor-pointer text-zinc-400" onClick={() => setToggle(prev => !prev)}>
                        {toggle ? <RxCross2 /> : <IoReorderThreeOutline />}
                    </div>
                )}

                <MobileMenu showMenu={showMenu} />
            </div>

            <div className="w-2/3 flex justify-between items-center min-[320px]:justify-end min-[320px]:gap-7  md:gap-3 md:justify-end xl:justify-between xl:gap-0 min-[425px]:w-1/2 sm:w-1/3 md:w-1/2 xl:w-2/3">
                <SearchBar onClick={handleSearchToken} />

                <div className="w-1/3 flex justify-end gap-8 md:w-fit md:gap-5 xl:gap-8 xl:w-1/3 min-[320px]:gap-5 items-center">
                    <button className="border border-zinc-600 px-3 py-1 rounded-xl text-sm bg-transparent font-bold min-[320px]:hidden md:block">
                        Get the app
                    </button>


                    {/* <div className="relative">
                        <button onClick={() => setIsOpen(prev => !prev)}>
                            <BsThreeDots />
                        </button>

                        <div
                            className={`absolute top-10 -right-20 border border-zinc-700 bg-zinc-900 px-3 py-4 rounded-xl w-[350px] transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                                }`}
                        >
                            <h3 className="text-xl font-semibold items-center">Global preferences</h3>

                            <div className="flex gap-5 justify-center items-center my-4">
                                <h4 className="text-zinc-400 font-semibold">Theme</h4>

                                <div className="relative w-full max-w-xs mx-auto">
                                    <div className={`toggle-indicator ${active}`} />

                                    <ul className="flex items-center justify-around w-full py-1 rounded-full border border-zinc-700 bg-transparent relative z-10">
                                        <li
                                            className="font-semibold py-1.5 rounded-full cursor-pointer z-20"
                                            onClick={() => setActive("auto")}
                                        >
                                            Auto
                                        </li>
                                        <li
                                            className="text-xl text-white font-semibold rounded-full cursor-pointer z-20"
                                            onClick={() => setActive("sun")}
                                        >
                                            <MdSunny />
                                        </li>
                                        <li
                                            className="text-xl text-white font-semibold rounded-full cursor-pointer z-20"
                                            onClick={() => setActive("moon")}
                                        >
                                            <FaMoon />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <h4 className="text-zinc-400 font-semibold">Language</h4>
                                <div className="font-semibold flex justify-center items-center gap-2">
                                    English <span className="text-base"><FaChevronRight /></span>
                                </div>
                            </div>
                        </div>



                    </div> */}

                    <GlobalPreferences initialTheme="auto" />


                    <button className="bg-[#508dc7] py-1 text-sm font-bold tracking-wide px-4 rounded-xl min-[320px]:mr-2">
                        Connect
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
