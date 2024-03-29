import "./App.css";

// Todo Custom Hooks
import Navbar from "./components/Navbar";
import FirstBlock from "./components/FirstBlock";
import SecondBlock from "./components/SecondBlock";

function App() {
  window.addEventListener("mousedown", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    console.log("x:"+ x + " Y:"+ y);
  });
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
    </>
  );
}

export default App;
