import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-accent fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent-feature">
        Samuel
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li className="link">
            <a href="/#about">About</a>
          </li>
          <li className="link">
            <a href="/#projects">Projects</a>
          </li>
          <li className="link">
            <a href="/#blog">Blog</a>
          </li>
          <li className="link">
            <a href="/#contact">Contact</a>
          </li>
          <li className="link">
            <a href="#resume -link" target="_blank" without rel="noreferrer">
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
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>
      <a href='#top'>
        <FaArrowCircleUp size={80} className="fixed bottom-8 right-10 opacity-75 text-accent-feature"/>
      </a>
      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;