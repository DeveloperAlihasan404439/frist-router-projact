import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopify } from 'react-icons/si';
import { FiMenu} from 'react-icons/fi';
import { AiOutlineClose} from 'react-icons/ai';
const Headers = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Sign In", link: "/signin" },
  ];
  return (
    <div className="bg-[#150F2D] text-white fixed w-[100%] top-0 left-0 z-10">
      <nav className="w-11/12 mx-auto flex justify-between flex-row-reverse gap-5 text-2xl py-2  px-4">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <AiOutlineClose/> : <FiMenu/>}
          <div
            className={`flex flex-col absolute duration-1000 -ml-24 -mt-2 ${
              open ? "top-12 " : "-top-64"
            } bg-orange-400 p-4 w-[200px]`}
          >
            {open
              ? navMenu.map((nav, i) => (
                  <Link key={i} to={nav.link}>
                    {nav.label}
                  </Link>
                ))
              : ""}
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          {navMenu.map((nav, i) => (
            <NavLink key={i} to={nav.link}>
              {nav.label}
            </NavLink>
          ))}
        </div>
        <SiShopify/>
      </nav>
    </div>
  );
};

export default Headers;
