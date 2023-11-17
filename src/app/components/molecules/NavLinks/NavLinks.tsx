"use client";
import React from "react";
import "./NavLinks.css";
type Props = {};

const NavLinks = (props: Props) => {
  const handleClick = (scrollElement?: string) => {
    if (scrollElement) {
      const ele = document.querySelector(`.${scrollElement}`);
      if (ele) {
        ele.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  };

  return (
    <nav>
      <ul className="NavLinks">
        <li>
          <a
            className="NavLinks--link"
            onClick={() => handleClick("ScrollView__desc")}
          >
            <span className="NavLinks--linkBar"></span>
            <span className="NavLinks--linkText">ABOUT</span>
          </a>
        </li>
        <li>
          <a
            className="NavLinks--link"
            onClick={() => handleClick("Timeline__top")}
          >
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
