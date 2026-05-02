import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaUserLock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
// import image4 from "../../../public/images/image4.jpg";
const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
          Rabbit
        </Link>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm uppercase tracking-[0.18em] text-slate-600">
            <li className="transition hover:text-slate-900">
              <Link to="/collections/all">Men</Link>
            </li>
            <li className="transition hover:text-slate-900">
              <Link to="/collections/women">Women</Link>
            </li>
            <li className="transition hover:text-slate-900">
              <Link to="/collections/topwear">Top Wear</Link>
            </li>
            <li className="transition hover:text-slate-900">
              <Link to="/collections/bottomwear">Bottom Wear</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-3">
            <SearchBar />
            <CartDrawer />
          </div>

          <Link
            to="/admin"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100"
          >
            <FaLock className="text-base" /> Admin
          </Link>

         <Link to='/register'>
           <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-900">
             <HiOutlineUser className="text-xl" />
           </button>
          
         </Link>
          <button
            onClick={toggleNavDrawer}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-900 md:hidden"
          >
            <HiBars3BottomRight className="text-xl" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 text-white shadow-2xl transition-transform duration-300 md:hidden ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleNavDrawer} className="rounded-full bg-white/10 p-2 text-slate-200 transition hover:bg-white/15">
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-4 py-6 text-sm">
          <Link onClick={toggleNavDrawer} to="/collections/all" className="transition hover:text-cyan-300">
            Men
          </Link>
          <Link onClick={toggleNavDrawer} to="/collections/women" className="transition hover:text-cyan-300">
            Women
          </Link>
          <Link onClick={toggleNavDrawer} to="/collections/topwear" className="transition hover:text-cyan-300">
            Top Wear
          </Link>
          <Link onClick={toggleNavDrawer} to="/collections/bottomwear" className="transition hover:text-cyan-300">
            Bottom Wear
          </Link>
        </div>

        <div className="mt-auto border-t border-white/10 px-4 py-6">
          <Link
            to="/admin"
            className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
