import React from "react";
import "./NavLinks.css";

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <nav>
      <ul className="NavLinks">
        <li>
          <a className="NavLinks--link">
            <span className="NavLinks--linkBar"></span>
            <span className="NavLinks--linkText">ABOUT</span>
          </a>
        </li>
        <li>
          <a className="NavLinks--link">
            <span className="NavLinks--linkBar"></span>
            <span className="NavLinks--linkText">EXPERIENCE</span>
          </a>
        </li>
        <li>
          <a className="NavLinks--link">
            <span className="NavLinks--linkBar"></span>
            <span className="NavLinks--linkText">PROJECTS</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
