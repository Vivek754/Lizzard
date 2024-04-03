import { useState } from "react";
import "./CarBrandPopUp.css";
function CarBrandPopUp({ onImageSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopUp = () => {
    setIsOpen(false);
  };

  const handleImageClick = (src) => {
    closePopUp();
    onImageSelect(src);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="popContainer bg-white/10 backdrop-blur-lg duration-200"
        onClick={closePopUp}
      >
        <div
          className="mainContainer p-0 text-3xl overflow-y-auto bg-white/30 backdrop-blur-md animate-zoomIn"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-center sticky mt-0 top-0 p-5 bg-black/80 backdrop-blur-sm text-white">
            Select Your Car Brand
          </h1>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 place-items-center">
              <div className="grid grid-cols-2 place-items-center w-full brandContainer">
                <div className="brands">
                  <img
                    src="src/assets/brands/ms.png"
                    className="brandImage"
                    alt=""
                    onClick={(e) => handleImageClick(e.target.src)}
                  />
                </div>
                <div className="flex items-center">
                  <h1>MARUTI SUZUKI</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 place-items-center w-full brandContainer">
                <div
                  className="brands"
                  onClick={(e) => handleImageClick(e.target.src)}
                >
                  <img
                    src="src/assets/brands/mahindra.png"
                    className="brandImage"
                    alt=""
                    onClick={(e) => handleImageClick(e.target.src)}
                  />
                </div>
                <div className="flex items-center">
                  <h1>MAHINDRA</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 place-items-center w-full brandContainer">
                <div className="brands">
                  <img
                    src="src/assets/brands/tata.png"
                    className="brandImage"
                    alt=""
                    onClick={(e) => handleImageClick(e.target.src)}
                  />
                </div>
                <div className="flex items-center">
                  <h1>TATA</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 place-items-center w-full brandContainer">
                <div className="brands">
                  <img
                    src="src/assets/brands/kia.png"
                    className="brandImage"
                    alt=""
                    onClick={(e) => handleImageClick(e.target.src)}
                  />
                </div>
                <div className="flex items-center">
                  <h1>KIA</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 place-items-center w-full brandContainer">
                <div className="brands">
                  <img
                    src="src/assets/brands/kia.png"
                    className="brandImage"
                    alt=""
                    onClick={(e) => handleImageClick(e.target.src)}
                  />
                </div>
                <div className="flex items-center">
                  <h1>KIA</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CarBrandPopUp;
