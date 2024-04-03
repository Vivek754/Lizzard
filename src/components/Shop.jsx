import React from "react";
import { useState } from "react";
import PopUp from "./PopUp";
function Shop() {
  const [showPopUp, setShowPopUp] = useState(false);

  const selectCarPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      <div className="text-white flex flex-col items-center">
        <span className="text-5xl mb-10">SHOP FOR YOUR CAR</span>
        <main className="grid grid-cols-3 w-full place-items-center">
          <section className="border p-10 cursor-pointer hover:text-black hover:bg-white" onClick={selectCarPopUp}>
            <h1 className="text-xl">Select Car Brand</h1>
          </section>
          <section className="border p-10 cursor-pointer hover:text-black hover:bg-white">
            <h1 className="text-xl">Select Car</h1>
          </section>
          <section className="border p-10 cursor-pointer hover:text-black hover:bg-white">
            <h1 className="text-xl">Select Car Cover</h1>
          </section>
        </main>
      </div>
      {showPopUp && <PopUp />}
    </>
  );
}
export default Shop;
