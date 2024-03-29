
function Navbar({logo}) {
  return (
    <nav className="py-2 max-h-12 mt-12 mx-5 rounded-xl shadow-stone-950 shadow-lg bg-black bg-opacity-50 backdrop-blur-sm flex justify-around items-center text-xl font-medium text-slate-300">
      <h1 className="cursor-pointer hover:text-white">HOME</h1>
      <h1 className="cursor-pointer hover:text-white">ABOUT US</h1>
      <div className="w-28 hover:scale-110 ease-in-out duration-200">
        <img
          src={logo}
          alt="Logo Image"
          className="w-full"
        />
      </div>
      <h1 className="cursor-pointer hover:text-white">CONTACT US</h1>
      <h1 className="cursor-pointer hover:text-white">SHOP</h1>
    </nav>
  );
}

export default Navbar;
