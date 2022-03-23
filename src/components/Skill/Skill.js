import React, { Component, useState } from "react";
import "../../resource/css/Skill.css";
import kotlin from "../../resource/images/kotlin.png";
import retrofit from "../../resource/images/retrofit.png";
import glide from "../../resource/images/glide.png";
import room from "../../resource/images/room.png";
import exoplayer from "../../resource/images/exoplayer.png";
import camerax from "../../resource/images/camera.png";
import viewPager2 from "../../resource/images/viewpager2.gif";
import openMenu from "../../resource/images/open-menu.png";
import firebase from "../../resource/images/firebase.webp";
import motion from "../../resource/images/motion.png";
import koin from "../../resource/images/koin.jpeg";
import navigation from "../../resource/images/navigation.png";
import javascript from "../../resource/images/javascript.png";
import vue from "../../resource/images/vue.png";
import vuex from "../../resource/images/vuex.png";
import vuetify from "../../resource/images/vuetify.png";
import react from "../../resource/images/react.webp";
import redux from "../../resource/images/redux.png";
import axios from "../../resource/images/axios.png";
import node from "../../resource/images/node.jpeg";
import mysql from "../../resource/images/mysql.webp";
import mongoose from "../../resource/images/mongoose.png";
import socket from "../../resource/images/socket.png";
import compose from "../../resource/images/componse.png";
import androidStudio from "../../resource/images/androidStudio.png";
import vscode from "../../resource/images/vscode.png";
import sourcetree from "../../resource/images/sourcetree.png";
import postman from "../../resource/images/postman.png";
import gitlab from "../../resource/images/gitlab.png";
import github from "../../resource/images/github.png";
import jenkins from "../../resource/images/jenkins.png";
import docker from "../../resource/images/docker.webp";

import { DownOutlined, UpOutlined } from "@ant-design/icons";

const tab = ["Android", "Front-End", "Back-End", "Other"];
const skills = [
  [
    // android
    {
      title: "kotlin",
      content: [
        "Kotlin 기반의 소규모 안드로이드 어플리케이션을 개발할 수 있습니다.",
        "수신 객체 지정 람다 함수와 확장 함수 등을 적극적으로 활용할 수 있습니다.",
        "기능별로 소스를 모듈화해서 관리할 수 있습니다.",
      ],
      img: kotlin,
    },
    {
      title: "retrofit",
      content: [
        "retrofit을 사용하여 서버와 통신할 수 있습니다.",
        "await / sync를 이용하여 callback 지옥에 빠지지 않게 구현할 수 있습니다.",
        "서버에서 받아온 데이터를 관리하는 객체와 실제 화면에 보여지는 Model를 따로 두어 독립적으로 관리하였습니다.",
      ],
      img: retrofit,
    },
    {
      title: "glide",
      content: [
        "glide를 사용하여 서버로부터 이미지를 받아와 화면에 보여줄 수 있습니다",
      ],
      img: glide,
    },
    { title: "room", content: [], img: room },
    { title: "ExoPlayer", content: [], img: exoplayer },
    { title: "Jetpack Compose", content: [], img: compose },
    { title: "cameraX", content: [], img: camerax },
    { title: "viewPager2", content: [], img: viewPager2 },
    { title: "Custom View", content: [], img: openMenu },
    {
      title: "Firebase Authentication/ FireStore / Realtime DB / Storage",
      content: [],
      img: firebase,
    },
    { title: "MotionLayout", content: [], img: motion },
    { title: "Kotlin Coroutine", content: [], img: kotlin },
    { title: "Koin(MVP, MVVM)", content: [], img: koin },
    { title: "Jetpack Navigation", content: [], img: navigation },
  ],
  [
    // front end
    { title: "Javascript", content: [], img: javascript },
    { title: "Vue.js", content: [], img: vue },
    { title: "Vuex", content: [], img: vuex },
    { title: "Vuetify", content: [], img: vuetify },
    { title: "React JS", content: [], img: react },
    { title: "Redux", content: [], img: redux },
    { title: "Axios", content: [], img: axios },
  ],
  [
    // Back end
    { title: "Node JS", content: [], img: node },
    { title: "MySQL", content: [], img: mysql },
    { title: "Mongoose", content: [], img: mongoose },
    { title: "Socket", content: [], img: socket },
  ],
  [
    // Back end
    { title: "Android Studio", content: [], img: androidStudio },
    { title: "Visual Studio Code", content: [], img: vscode },
    { title: "Source Tree", content: [], img: sourcetree },
    { title: "Post Man", content: [], img: postman },
    { title: "GitLab", content: [], img: gitlab },
    { title: "GitHub", content: [], img: github },
    { title: "Jenkins", content: [], img: jenkins },
    { title: "Docker", content: [], img: docker },
  ],
];
function Skill() {
  const [curTabIndex, setTabIndex] = useState(0);
  const [curItemIndex, setItemIndex] = useState(0);

  const handleTabIndex = (index) => {
    setTabIndex(index);
    setItemIndex(0);
  };
  const handleItemIndex = (index) => setItemIndex(index);

  return (
    <div className="skill">
      <div className="tab-container">
        {tab.map((t, index) => (
          <div
            className={index == curTabIndex ? "tab-item select" : "tab-item"}
            key={index}
            onClick={() => handleTabIndex(index)}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="divider" />
      <ul>
        {skills[curTabIndex].map((skill, index) => (
          <li
            className={
              curItemIndex == index ? "skill-item active" : "skill-item"
            }
            key={index}
            onClick={() => handleItemIndex(index)}
          >
            <div className="skill-simple-content">
              <img src={skill.img} alt={skill.title} />
              <span className="skill-title">{skill.title}</span>
            </div>
            {curItemIndex == index ? (
              <UpOutlined className="skill-btn" />
            ) : (
              <DownOutlined className="skill-btn" />
            )}
            <div className="skill-content">
              {skill.content.map((c, i) => (
                <li>- {c}</li>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
