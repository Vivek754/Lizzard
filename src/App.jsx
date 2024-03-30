import "./App.css";

// Todo Custom Hooks
import Navbar from "./components/Navbar";
import FirstBlock from "./components/FirstBlock";
import SecondBlock from "./components/SecondBlock";
import ThirdBloack from "./components/ThirdBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar logo={"./src/assets/bw logo.png"} />
      <FirstBlock
        firstLine={"FOR CAR LOVERS"}
        secondLine={"BY CAR LOVER"}
        brandName={"LIZZARD"}
        mainLine={"PREMIUM SEAT COVERS"}
        image={"./src/assets/bmw m2.png"}
      />
      <SecondBlock />
      <ThirdBloack />
      <Footer />
    </>
  );
}

export default App;
