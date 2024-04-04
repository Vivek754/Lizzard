import { NavLink } from "react-router-dom";

function Navbar({ logo }) {
  return (
    <nav className="py-2 max-h-12 mx-5 mb-20 rounded-xl shadow-stone-950 shadow-lg bg-black bg-opacity-50 backdrop-blur-sm flex justify-around items-center text-xl font-medium text-slate-300">
      <NavLink to="/" className={({isActive}) => `cursor-pointer hover:text-white ${isActive ? "text-white bg-white/30 backdrop-blur-md py-1 px-4 duration-200 rounded-3xl" : "text-slate-300"}`}>
        HOME
      </NavLink>
      <NavLink to="/about" className={({isActive}) => `cursor-pointer hover:text-white ${isActive ? "text-white bg-white/30 backdrop-blur-md py-1 px-4 duration-200 rounded-3xl" : "text-slate-300"}`}>
        ABOUT US
      </NavLink>
      <div className="w-28 hover:scale-110 ease-in-out duration-200">
        <img src={logo} alt="Logo Image" className="w-full" />
      </div>
      <NavLink to="/contact" className={({isActive}) => `cursor-pointer hover:text-white ${isActive ? "text-white bg-white/30 backdrop-blur-md py-1 px-4 duration-200 rounded-3xl" : "text-slate-300"}`}>
        CONTACT US
      </NavLink>
      <NavLink to="/shop" className={({isActive}) => `cursor-pointer hover:text-white ${isActive ? "text-white bg-white/30 backdrop-blur-md py-1 px-4 duration-200 rounded-3xl" : "text-slate-300"}`}>
        SHOP
      </NavLink>
    </nav>
  );
}

export default Navbar;
