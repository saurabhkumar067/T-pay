
import React from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenu = ({ isHovered, legalToggle, handleLegalToggle }) => (
    <div
        className={`absolute top-24 left-0 border border-zinc-700 bg-zinc-900 px-6 py-4 rounded-xl w-1/2 transition-all duration-300 ease-in-out transform ${
            isHovered ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        } min-[320px]:w-[250px] min-[320px]:z-100 min-[320px]:top-18 min-[320px]:left-2 md:top-20 xl:top-24`}
    >
        <div>
            <h4 className="text-md font-semibold mb-3 min-[320px]:text-base xl:text-lg">Company</h4>
            <ul className="text-gray-400 font-medium flex flex-col gap-1 min-[320px]:text-sm xl:text-base">
                <li className="hover:text-gray-600 cursor-pointer duration-300">About</li>
                <li className="hover:text-gray-600 cursor-pointer duration-300">Careers</li>
                <li className="hover:text-gray-600 cursor-pointer duration-300">Blog</li>
            </ul>
        </div>
        <div>
            <h4 className="text-md font-semibold mb-3 mt-5 min-[320px]:text-base xl:text-lg">Protocol</h4>
            <ul className="text-gray-400 font-medium flex flex-col gap-1 min-[320px]:text-sm xl:text-base">
                <li className="hover:text-gray-600 cursor-pointer duration-300">Vote</li>
                <li className="hover:text-gray-600 cursor-pointer duration-300">Governance</li>
                <li className="hover:text-gray-600 cursor-pointer duration-300">Developers</li>
            </ul>
        </div>
        <div>
            <h4 className="text-md font-semibold mb-3 mt-5 min-[320px]:text-base xl:text-lg">Need help?</h4>
            <ul className="text-gray-400 font-medium flex flex-col gap-1 min-[320px]:text-sm xl:text-base">
                <li className="hover:text-gray-600 cursor-pointer duration-300">Help center</li>
                <li className="hover:text-gray-600 cursor-pointer duration-300">Contact us</li>
            </ul>
        </div>
        <div className="border-t border-zinc-700 my-7 pt-7 min-[320px]:my-5 min-[320px]:pt-5 xl:pt-7 xl:my-7 ">
            <ul className="flex items-center gap-8 text-xl min-[320px]:text-lg xl:text-xl">
                <li className="cursor-pointer hover:scale-110 duration-200 hover:text-green-600"><FaGithub /></li>
                <li className="cursor-pointer hover:scale-110 duration-200 hover:text-blue-400"><BsTwitterX /></li>
                <li className="cursor-pointer hover:scale-110 duration-200 hover:text-blue-600"><FaDiscord /></li>
            </ul>
        </div>
        <div>
            <div
                className="text-xs font-semibold text-gray-400 flex items-center gap-2 cursor-pointer"
                onClick={handleLegalToggle}
            >
                Legal & Privacy <span><IoIosArrowDown /></span>
            </div>
            {legalToggle && (
                <ul className="text-gray-400 font-semibold mt-3 flex flex-col gap-2 text-xs">
                    <li className="hover:text-[#508DC7] cursor-pointer duration-200">Your Privacy Choices</li>
                    <li className="hover:text-[#508DC7] cursor-pointer duration-200">Privacy Policy</li>
                    <li className="hover:text-[#508DC7] cursor-pointer duration-200">Terms of Service</li>
                </ul>
            )}
        </div>
    </div>
);

export default DropdownMenu;
