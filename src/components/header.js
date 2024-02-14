import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import Resume from '../assets/Resume - Software Engineer - 12-7.pdf'
import { navLinks } from "./data/navLinks";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header>
      <div className="flex justify-between px-5 py-2 bg-primary text-accent fixed w-full z-10">
        <a href="/" className="logo text-2xl font-bold text-accent-feature">
          Samuel
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex">
            { navLinks.map( link => {
              return (
                <li>
                  <a href={ link.href } className="link">{ link.name }</a>
                </li>
              )
            })}
            <li className="link">
              <a href={ Resume } target="_blank" without rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <nav
          className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
        >
          <ul className="flex flex-col">
            { navLinks.map( link => {
              return (
                <li className='mobile-link' onClick={handleToggle}>
                  <a href={ link.href }>{ link.name }</a>
                </li>
              )
            })}
            <li className="mobile-link" onClick={handleToggle}>
              <a href={ Resume } target="_blank" without rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Toggle button */}
        <button onClick={handleToggle} className="block md:hidden">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
      </div>
      <a href='#top'>
        <FaArrowCircleUp size={80} className="fixed bottom-8 right-10 opacity-75 text-accent-feature"/>
      </a>
    </header>
  );
};

export default Header;