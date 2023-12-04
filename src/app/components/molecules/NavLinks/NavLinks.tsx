"use client";
import React, { useState } from "react";
import "./NavLinks.css";
type Props = {};

const NavLinks = (props: Props) => {
  const [active, setActive] = useState("");

  const handleClick = (scrollElement?: string) => {
    if (scrollElement) {
      const ele = document.querySelector(`.${scrollElement}`);
      if (ele) {
        ele.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  console.log(active)

  return (
    <nav>
      <ul className="NavLinks">
        <li>
          <a
            className="NavLinks--link"
            onClick={() => {
              handleClick("ScrollView__desc");
              setActive("about");
            }}
          >
            <span
              className={`NavLinks--linkBar ${
                active === "about" ? "NavLinks--activeBar" : ""
              }`}
            ></span>
            <span
              className={`NavLinks--linkText ${
                active === "about" ? "NavLinks--activeLink" : ""
              }`}
            >
              ABOUT
            </span>
          </a>
        </li>
        <li>
          <a
            className="NavLinks--link"
            onClick={() => {
              handleClick("Timeline__top");
              setActive("exp");
            }}
          >
            <span
              className={`NavLinks--linkBar ${
                active === "exp" ? "NavLinks--activeBar" : ""
              }`}
            ></span>
            <span
              className={`NavLinks--linkText ${
                active === "exp" ? "NavLinks--activeLink" : ""
              }`}
            >
              EXPERIENCE
            </span>
          </a>
        </li>
        <li>
          <a
            className="NavLinks--link"
            onClick={() => {
              handleClick("Project__top");
              setActive("pro");
            }}
          >
            <span
              className={`NavLinks--linkBar ${
                active === "pro" ? "NavLinks--activeBar" : ""
              }`}
            ></span>
            <span
              className={`NavLinks--linkText ${
                active === "pro" ? "NavLinks--activeLink" : ""
              }`}
            >
              PROJECTS
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
