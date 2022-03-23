import { Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import "../../resource/css/Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleValue = (index) => setValue(index);

  let location;

  useEffect(() => {
    const { hash } = window.location;
    location = hash.substring(1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const nav = [
    { id: "home", name: "About Me", link: "/" },
    // { id: "history", name: "History", link: "/seomseom/history" },
    { id: "skill", name: "Skill", link: "/skill" },
    { id: "pro", name: "Project", link: "/project" },
    { id: "book", name: "Book&Lecture", link: "/book" },
  ];

  const handleNav = (index, link) => {
    setValue(index);
    navigate(link);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/seomseom" className="logo">
          SeomSeom's Page
        </a>
        <ul className="nav-menu">
          {nav.map((data, index) => (
            <li
              className={
                location == data.link
                  ? "nav-item active " + data.id
                  : "nav-item"
              }
              key={index}
              onClick={() => handleValue(index)}
            >
              <a
                className={data.id}
                onClick={() => handleNav(index, data.link)}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
