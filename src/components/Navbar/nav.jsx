import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; //to make the nav icon link to navigate to home page
import "./style.css";
const data = [
  {
    lable: "HOME",
    to: "/",
  },
  {
    lable: "ABOUT",
    to: "/About",
  },
  {
    lable: "SKILLS",
    to: "/Skills",
  },
  // {
  //   lable: "RESUME",
  //   to: "/Resume",
  // },
  {
    lable: "PROJECTS",
    to: "/projects",
  },
  {
    lable: "CONTACT",
    to: "/Contact",
  },
];

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_item_links" to={item.to}>
                {item.lable}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
