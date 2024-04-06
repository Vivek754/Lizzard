import { useState, useEffect, useCallback, memo } from "react";
import "./CarBrandPopUp.css";

const brandData = {
  TATA: [
    {
      carImage: "src/assets/cars/tata/altroz.png",
      carName: "TATA ALTROZ",
    },
  ],
  MAHINDRA: [
    {
      carImage: "src/assets/cars/mahindra/xuv700.webp",
      carName: "XUV 700",
    },
    {
      carImage: "src/assets/cars/mahindra/xuv 300.png",
      carName: "XUV 300",
    },
  ],
  KIA: [
    {
      carImage: "src/assets/cars/kia/seltos.png",
      carName: "Seltos",
    },
  ],
  MARUTI_SUZUKI: [
    {
      carImage: "src/assets/cars/maruti suzuki/dzire.png",
      carName: "Desire",
    },
  ],
  // Add more brands here...
};

function CarPopUp({ onImageSelect, brandName }) {
  const [isOpen, setIsOpen] = useState(true);
  const [brandSelected, setBrandSelected] = useState([]);

  useEffect(() => {
    setBrandSelected(brandData[brandName] || []);
  }, [brandName]);

  const closePopUp = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleImageClick = useCallback(
    (src) => {
      closePopUp();
      onImageSelect(src);
    },
    [closePopUp, onImageSelect]
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="popContainer bg-white/10 backdrop-blur-lg duration-200 z-30"
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
              {brandSelected.map((car) => {
                return (
                  <div
                    className="grid grid-cols-2 place-items-center w-full brandContainer"
                    key={car.carName}
                    onClick={() => {
                      handleImageClick(car.carImage);
                    }}
                  >
                    <div className="brands">
                      <img src={car.carImage} className="brandImage" alt="" />
                    </div>
                    <div className="flex items-center">
                      <h1>{car.carName}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(CarPopUp);
