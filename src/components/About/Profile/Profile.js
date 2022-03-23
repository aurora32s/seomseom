import React, { Component, useState } from "react";
import { Col, Row } from "antd";
import profile from "../../../resource/images/profile.jpeg";
import travel from "../../../resource/images/travel.jpeg";
import masic from "../../../resource/images/masic.webp";
import sherlock from "../../../resource/images/sherlock.jpeg";
import idiot from "../../../resource/images/idiots.jpeg";
import gladiator from "../../../resource/images/gladiator.jpeg";
import "../../../resource/css/Profile.css";
import house from "../../../resource/images/house.png";
import birthday from "../../../resource/images/birthday.png";
import unique from "../../../resource/images/unique.png";

const data = [
  { title: "Live In", content: "Seoul, Korea", icon: house },
  { title: "Birth", content: "1995.10.25", icon: birthday },
  { title: "MBTI", content: "INFJ", icon: unique },
];
const personData = [
  {
    id: "idiot",
    image: idiot,
    title: "내가 하고 싶은 일을 하자!",
    content:
      "프로그래밍을 즐기는 개발자. 노력하는 자는 천재를 이기지 못하고 천재는 즐기는 자를 이기지 못한다.",
  },
  {
    id: "masic",
    image: masic,
    title: "최고의 노력으로 최선의 결과를 보여주자!",
    content:
      "1000번의 연습으로 단 한번의 최고의 쇼를 보여주는 마술사와 같이 최고의 결과와 서비스를 소비자에게 제공해주기 위해 스스로 꾸준히 연습하고 발전해 나가는 개밟자",
  },
  {
    id: "sherlock",
    image: sherlock,
    title: "논리적이고 세심하게 분석하고 조사해서 문제를 해결하자.",
    content:
      "마치 탐정과 같이 논리적이고 세심하게 문제의 원인과 결과를 분석한 이후에 다양한 방면으로 정보를 수집하고 조사하여 빠르게 문제를 해결해나가는 개발자",
  },
  {
    id: "travel",
    image: travel,
    title: "놀 때는 놀자! YOLO!",
    content:
      "일을 할 때는 적극적이고 열정적으로, 쉴 때는 본격적으로 쉴 수 있는 제주도의 여우로움을 가진 개발자",
  },
  {
    id: "gladiator",
    image: gladiator,
    title: "어떠한 문제와 오류에 부딪혀도 포기하지 말고, 해결방법을 찾아내자!",
    content:
      "마치 전투사와 같이 내 앞에 어떠한 문제와 부딪혀도 포기하거나 미루지 않고 직접 해결방법을 찾아내려고 노력하며 점점 성장해 나가는 개발자",
  },
];

export default function Profile() {
  const [personIndex, setPersonIndex] = useState(0);
  const handlePersonIndex = (index) => setPersonIndex(index);

  return (
    <div className="profile">
      <div className="container">
        <div className="intro_container">
          {/* <div className="bar left" /> */}
          <div className="profile_img_container">
            <div className="background">
              <img className="profile_img" src={profile} />
            </div>
          </div>
          <div className="intro">
            <span className="accent">안녕하세요. 🙌🏻</span>
            <br />
            <br />
            어제보다 나은 오늘의 내가 되기 위해 <br />
            언제나 노력하는 개발자 <span className="accent">진연주</span>입니다.
          </div>
          {/* <div className="bar right" /> */}
        </div>
      </div>
      <div className="title">
        <strong>About Me</strong>
      </div>
      <div className="info_container">
        {data.map((info, index) => (
          <div className="info" key={index}>
            <img className="icon" src={info.icon} alt={info.title} />
            <strong className="info_title">{info.title}</strong>
            <p className="info_content">{info.content}</p>
          </div>
        ))}
      </div>
      <div className="person">
        <span className="person_intro">저는 000한 개발자입니다. 😊</span>
        <div className="person_container">
          {personData.map((person, index) => (
            <div
              className={
                index == personIndex ? "person_img circle" : "person_img"
              }
              key={index}
            >
              <img
                src={person.image}
                className={person.id}
                onClick={() => handlePersonIndex(index)}
              />
            </div>
          ))}
        </div>
        <div className="person_info">
          <strong className="person_title">
            {personData[personIndex].title}
          </strong>
          <br />
          <br />
          <div className="divider" />
          <br />
          <span className="person_content">
            {personData[personIndex].content}
          </span>
        </div>
      </div>
    </div>
  );
}
