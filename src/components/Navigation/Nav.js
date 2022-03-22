import { Header } from "antd/lib/layout/layout";
import React, { Component, useState } from "react";
import "../../resource/css/Nav.css";

const Nav = () => {
  const [value, setValue] = useState(0);
  const handleValue = (index) => setValue(index);

  const nav = [
    { name: "About Me", link: "/seomseom" },
    { name: "History", link: "/seomseom/history" },
    { name: "Skill", link: "/seomseom/skill" },
    { name: "Project", link: "/seomseom/project" },
    { name: "Book", link: "/seomseom/book" },
  ];

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/seomseom" className="logo">
          SeomSeom's Page
        </a>
        <ul className="nav-menu">
          {nav.map((data, index) => (
            <li
              className={index == value ? "nav-item active" : "nav-item"}
              key={index}
              onClick={() => handleValue(index)}
            >
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
