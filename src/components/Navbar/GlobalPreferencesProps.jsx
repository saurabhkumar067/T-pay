import { useState, useRef, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { FaMoon, FaChevronRight } from "react-icons/fa6";

export const GlobalPreferences = ({ initialTheme = "auto" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(initialTheme);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button onClick={() => setIsOpen(prev => !prev)}>
        <BsThreeDots />
      </button>

      <div
        className={`absolute top-10 -right-20 border border-zinc-700 bg-zinc-900 px-3 py-4 rounded-xl w-[350px] transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        } min-[320px]:w-[250px] xl:w-[350px]`}
      >
        <h3 className="text-xl font-semibold items-center min-[320px]:text-base xl:text-xl">Global preferences</h3>

        <div className="flex gap-5 justify-center items-center my-4 min-[320px]:my-2 xl:my-4">
          <h4 className="text-zinc-400 font-semibold min-[320px]:text-sm xl:text-base">Theme</h4>

          <div className="relative w-full max-w-xs mx-auto">
            <div className={`toggle-indicator ${active}`} />

            <ul className="flex items-center justify-around w-full py-1 rounded-full border border-zinc-700 bg-transparent relative z-10">
              <li
                className="font-semibold py-1.5 rounded-full cursor-pointer z-20 min-[320px]:text-xs xl:text-base"
                onClick={() => setActive("auto")}
              >
                Auto
              </li>
              <li
                className="text-xl text-white font-semibold rounded-full cursor-pointer z-20 min-[320px]:text-sm xl:text-xl"
                onClick={() => setActive("sun")}
              >
                <MdSunny />
              </li>
              <li
                className="text-xl text-white font-semibold rounded-full cursor-pointer z-20 min-[320px]:text-sm xl:text-xl"
                onClick={() => setActive("moon")}
              >
                <FaMoon />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-zinc-400 font-semibold min-[320px]:text-sm xl:text-base">Language</h4>
          <div className="font-semibold flex justify-center items-center gap-2 min-[320px]:text-xs min-[320px]:gap-1 xl:gap-2 xl:text-base">
            English <span className="text-base min-[320px]:text-xs xl:text-base"><FaChevronRight /></span>
          </div>
        </div>
      </div>
    </div>
  );
};
