function FirstBlock({ firstLine, secondLine,brandName , mainLine, image }) {
  return (
    <div className="my-52 flex justify-evenly items-center">
      <div className="" style={{ textShadow: "0px 0px 10px #000000" }}>
        <h1 className="text-3xl text-white" style={{ fontWeight: "200" }}>
          {firstLine}
          <br /> {secondLine}
        </h1>
        <h1 className="text-5xl text-white mt-10 line-through">{brandName}</h1>
        <h1 className="text-5xl text-white">{mainLine}</h1>
      </div>
      <div className="w-2/">
      <img className="max-w-full drop-shadow-[10px_40px_25px_#000000]" src={image} alt="firstPaintMainImage" />
      </div>
    </div>
  );
}
export default FirstBlock;
