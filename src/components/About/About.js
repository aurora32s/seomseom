import React, { Component } from "react";
import "../../resource/css/About.css";
import Profile from "./Profile/Profile";
import History from "./History/History";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Book from "./Book/Book";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Profile />
        {/* <History /> */}
        <Skill />
        <Project />
        <Book />
      </div>
    );
  }
}

export default About;
