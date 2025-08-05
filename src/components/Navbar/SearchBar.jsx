import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function SearchBar({onClick}) {
    return (
        <div className="w-1/2 md:w-fit xl:w-1/2" onClick={onClick}>
            <div className="border border-zinc-600 flex justify-between items-center w-3/4 mx-auto py-2 px-4 bg-zinc-800 rounded-full cursor-pointer min-[320px]:bg-transparent min-[320px]:border-none md:w-fit md:px-2 md:bg-transparent md:border-none xl:border xl:bg-zinc-800 xl:px-4 xl:w-3/4">
                <IoSearch className="text-xl text-zinc-400 font-semibold min-[320px]:text-2xl min-[320px]:font-bold md:text-white  xl:text-zinc-400" />
                <input
                    type="text"
                    className="outline-none border-none w-full h-full pl-2 placeholder:text-lg placeholder:text-[#ffffffa6] font-semibold xl:block min-[320px]:hidden"
                    placeholder="Search tokens and pools"
                />
                <div className="bg-zinc-700 px-2 pb-1 text-xs rounded-sm xl:block min-[320px]:hidden">/</div>
            </div>
        </div>
    );
}

export default SearchBar;
