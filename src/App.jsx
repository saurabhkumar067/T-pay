import React from "react";
import Navbar from "./components/Navbar";
import SwapCard from "./components/SwapCard";

function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <main className="flex flex-col justify-center items-center h-[85vh] md:h-full xl:h-[90vh]">
        <div className="text-center text-4xl font-semibold min-[320px]:text-3xl xl:text-4xl">
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
    </div>
  );
}

export default App;
