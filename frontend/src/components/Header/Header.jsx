import { useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/images/logo.png";

import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show--menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">

          <div>
            <img src={logo} alt="" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-black text-[16px] leading-7 font-[600]"
                        : "text-purple-950 text-[16px] leading-7 font-[600] hover:text-black"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src="" alt="" className="w-full rounded-full" />
                  <p>user</p>
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-blue-800 py-2 text-white font-[600] px-6 h-[34px] flex items-center justify-center rounded-[50px]">Login</button>
              {/* <button className="btn bg-blue-800 py-2 text-white font-[600] px-6 h-[44px] flex items-center justify-center">
                Login
              </button> */}
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
