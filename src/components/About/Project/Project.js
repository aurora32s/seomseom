import React, { Component } from "react";
import "./Project.css";
import { useNavigate } from "react-router-dom";
import option from "../../../resource/images/option.png";
import gaia from "../../../resource/images/gaia.jpeg";

const data = [
  {
    title: "Gaia Project",
    img: gaia,
    skills: [
      "Android",
      "Java",
      "Node.js",
      "Picasso",
      "Window Manager",
      "Background Service",
      "MySQL",
      "volley",
    ],
  },
];
export default function Project() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/project");
  };
  return (
    <div className="project">
      <div className="title">
        <strong>Project</strong>
      </div>
      <div className="project_container">
        {data.map((skill, index) => (
          <div className="project_item" key={index}>
            <img src={skill.img} alt={skill.title} />
            <strong className="project_title">{skill.title}</strong>
            <div className="chip_container">
              {skill.skills.map((s, i) => (
                <div className="chip" key={i}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <img className="option" src={option} />
        <br />
      </div>
      <button className="button" onClick={() => handleClick()}>
        더보기
      </button>
    </div>
  );
}
