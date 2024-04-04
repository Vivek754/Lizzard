import React from "react";
import FirstBlock from "./HomeMain/FirstBlock";
import SecondBlock from "./HomeMain/SecondBlock";
import ThirdBloack from "./HomeMain/ThirdBlock";

function Home() {
  return (
    <>
      <FirstBlock
        firstLine={"FOR CAR LOVERS"}
        secondLine={"BY CAR LOVER"}
        brandName={"LIZZARD"}
        mainLine={"PREMIUM SEAT COVERS"}
        image={"./src/assets/bmw m2.png"}
      />
      <SecondBlock />
      <ThirdBloack />
    </>
  );
}

export default Home;
