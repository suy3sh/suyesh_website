import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <>
      <div className={`${styles.paddingX} w-full h-[100px] flex items-center py-5 fixed top-0 z-20 bg-red backdrop-blur-[10px] [mask:_linear-gradient(rgb(0,0,0)_60%,_rgba(0,0,0,0)_100%)]  [background-image:_linear-gradient(#000000_20%,transparent_100%)]`}>
      </div>
      <nav className={`${styles.paddingX} w-full h-[100px] flex items-center py-5 fixed top-0 z-20 bg-transparent`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

          {/* Logo + Suyesh Shrestha */}

          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0,0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
            <p className="text-white text-[18px] font-bold cursor-pointer flex">Suyesh &nbsp; <span className="sm:block hidden">Shrestha</span></p>
          </Link>

          {/* Nav Links to Website Sections */}

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                    active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Small screen stuff */}

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl z-index-60`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                        active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar