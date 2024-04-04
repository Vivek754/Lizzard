function ThirdBloack() {
  return (
    <>
      <div className="flex flex-col items-center py-10  rounded-lg">
      <h1 className="text-7xl py-8 text-white">Broad Range of Designs</h1>
        <div className="grid w-full place-items-center">
          <div className="grid grid-cols-3 gap-4 w-[50rem] place-items-cente p-5 rounded-lg">
            <div className="h-[250px] bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-xl">
              <img
                src="src/assets/white.jpg"
                className="h-full ring-2 ring-white shadow-[0px_0px_25px_#ffffff] rounded-md"
                alt=""
              />
            </div>
            <div className="h-[250px] bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-xl">
              <img
                src="src/assets/green.jpg"
                className="h-full ring-2 ring-white shadow-[0px_0px_25px_#ffffff] rounded-md"
                alt=""
              />
            </div>
            <div className=" row-span-2 h-full bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-xl ">
              <img src="src/assets/creamCopy.jpg" alt="" className="rounded-md ring-2 ring-white shadow-[0px_0px_25px_#ffffff]" />
            </div>
            <div className="h-[250px] bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-xl">
              <img
                src="src/assets/beige.jpg"
                className="h-full ring-2 ring-white shadow-[0px_0px_25px_#ffffff] rounded-md"
                alt=""
              />
            </div>
            <div className="h-[250px] bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-xl">
              <img
                src="src/assets/brown.jpg"
                className="h-full ring-2 ring-white shadow-[0px_0px_25px_#ffffff] rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThirdBloack;
