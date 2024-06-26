import React from "react";
import { useState } from "react";
import CarBrandPopUp from "./PopUp/CarBrandPopUp";
import CarPopUp from "./PopUp/CarPopUp"
import CarCoverPopUp from "./PopUp/CarCoverPopUp"
function Shop() {
  // Pop Up for Cars Brands Starts here
  const [showBrandCarPopUp, setshowBrandCarPopUp] = useState(false);
  const selectCarPopUp = () => {
    setshowBrandCarPopUp(!showBrandCarPopUp);
  };
  const [brandImageSrc, setBrandImageSrc] = useState(null);
  const handleImageSrc = (src) => {
    setBrandImageSrc(src);
  };

  const [brandName, setBrandName] = useState(null);
  const handleBrandName = (brand)=>{
    setBrandName(brand);
    
  }
  // Pop Up for Cars Brands Ends here

  // Pop Up for Cars Starts here

  const [showCarPopUp, setShowCarPopUp] = useState(false);
  const selectCar = () => {
    setShowCarPopUp(!showCarPopUp);
  };
  const [carImageSrc, setCarImageSrc] = useState(null);
  const handleCarImageSrc = (src) => {
    setCarImageSrc(src);
  };

  // Pop Up for Cars Ends here

  // Pop Up for Car Covers Starts here

  const [showCarCoverPopUp, setShowCarCoverPopUp] = useState(false);
  const selectCarCover = () => {
    setShowCarCoverPopUp(!showCarCoverPopUp);
  };
  const [carCoverImageSrc, setCarCoverImageSrc] = useState(null);
  const handleCarCoverImageSrc = (src) => {
    setCarCoverImageSrc(src);
  };

  // Pop Up for Car Covers Ends here
  return (
    <>
      <div className="text-white flex flex-col min-h-96 items-center bg-white/30 py-5 backdrop-blur-md">
        <span className="text-5xl mb-10">SHOP FOR YOUR CAR</span>
        <main className="grid grid-cols-3 w-full">
          <div className="flex flex-col items-center">
            <section
              className="border w-56 h-20 grid place-items-center cursor-pointer hover:text-black hover:bg-white"
              onClick={selectCarPopUp}
            >
              <h1 className="text-xl">Select Car Brand</h1>
            </section>
            <div className="w-3/6 p-5 h-full overflow-hidden grid place-items-center" id="imageContainer">
              <img
                src={brandImageSrc}
                alt=""
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <section
              className="border w-56 h-20 grid place-items-center cursor-pointer hover:text-black hover:bg-white"
              onClick={selectCar}
            >
              <h1 className="text-xl">Select Car</h1>
            </section>
            <div className="w-5/6 p-5 h-full overflow-hidden grid place-items-center" id="imageContainer">
              <img src={carImageSrc} alt="" className="w-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <section
              className="border w-56 h-20 grid place-items-center cursor-pointer hover:text-black hover:bg-white"
              onClick={selectCarCover}
            >
              <h1 className="text-xl">Select Car Cover</h1>
            </section>
            <div className=" w-3/6 p-5 h-full overflow-hidden grid place-items-center" id="imageContainer">
              <img
                src={carCoverImageSrc}
                alt=""
                className="w-full object-contain rounded-md shadow-[0px_0px_20px_#727272]"
              />
            </div>
          </div>
        </main>
        <div className=" bg-white">
        <button className=" bg-black py-3 px-10 outline outline-2 hover:outline-offset-4 text-xl duration-200 ease-in-out">Check Out</button>
        </div>
      </div>
      {showBrandCarPopUp && <CarBrandPopUp onImageSelect={handleImageSrc} onBrandSelect={handleBrandName} />}
      {showCarPopUp && <CarPopUp onImageSelect={handleCarImageSrc} brandName={brandName} />}
      {showCarCoverPopUp && <CarCoverPopUp onImageSelect={handleCarCoverImageSrc} />}
    </>
  );
}
export default Shop;
