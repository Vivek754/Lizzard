import { useState, useCallback, memo } from "react";
import "./CarBrandPopUp.css";

const brands = [
  {
    brandImage: "src/assets/brands/tata.png",
    brandName: "TATA",
  },
  {
    brandImage: "src/assets/brands/mahindra.png",
    brandName: "MAHINDRA",
  },
  {
    brandImage: "src/assets/brands/kia.png",
    brandName: "KIA",
  },
  {
    brandImage: "src/assets/brands/ms.png",
    brandName: "MARUTI_SUZUKI",
  },
];

function CarBrandPopUp({ onImageSelect, onBrandSelect }) {
  const [isOpen, setIsOpen] = useState(true);

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

  const handleBrandSelect = useCallback(
    (brand) => {
      onBrandSelect(brand);
    },
    [onBrandSelect]
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
              {brands.map((brand) => {
                return (
                  <div
                    onClick={() => {
                      handleBrandSelect(brand.brandName);
                      handleImageClick(brand.brandImage);
                    }}
                    className="grid grid-cols-2 place-items-center w-full brandContainer"
                    key={brand.brandName}
                  >
                    <div className="brands">
                      <img
                        src={brand.brandImage}
                        className="brandImage"
                        alt="Car Image"
                      />
                    </div>
                    <div className="flex items-center">
                      <h1>{brand.brandName}</h1>
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

export default memo(CarBrandPopUp);
