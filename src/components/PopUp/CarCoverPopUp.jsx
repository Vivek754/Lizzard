import { useState, useCallback, memo } from "react";
import "./CarBrandPopUp.css";

const cover = [
  {
    coverImage: "src/assets/covers/green.jpg",
    coverName: "GREEN",
  },
  {
    coverImage: "src/assets/covers/white.jpg",
    coverName: "WHITE",
  },
  {
    coverImage: "src/assets/covers/beige.jpg",
    coverName: "BEIGE",
  },
  {
    coverImage: "src/assets/covers/brown.jpg",
    coverName: "BROWN",
  },
];

function CarCoverPopUp({ onImageSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopUp = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleImageClick = useCallback((src) => {
    closePopUp();
    onImageSelect(src);
  }, [closePopUp, onImageSelect]);

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
              {cover.map((cover) => {
                return (
                  <div
                    className="grid grid-cols-2 place-items-center w-full brandContainer"
                    onClick={() => {
                      handleImageClick(cover.coverImage);
                    }}
                  >
                    <div className="brands overflow-hidden">
                      <img
                        src={cover.coverImage}
                        className="brandImage"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center">
                      <h1>{cover.coverName}</h1>
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
export default memo(CarCoverPopUp);
