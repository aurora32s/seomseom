import React, { Component, useState } from "react";
import "./Book.css";
import { useNavigate } from "react-router-dom";
import modern from "../../../resource/images/modern.jpeg";
import kotlin from "../../../resource/images/kotlin.jpeg";
import option from "../../../resource/images/option.png";
import androidDevelop from "../../../resource/images/android_develop.png";
import androidLecture from "../../../resource/images/android_lecture.png";
import reactBook from "../../../resource/images/react_book.jpeg";
import optimize from "../../../resource/images/optimize.jpeg";
import cleanCode from "../../../resource/images/cleancode.jpeg";

export default function Book() {
  const [data, setData] = useState([
    {
      title: "모던 자바스크립트 Deep Dive",
      img: modern,
      content: "자바스크립트 이론 기본서",
      hover: false,
    },
    {
      title: "안드로이드 개발자 공식 문서",
      img: androidDevelop,
      content: "안드로이드 개발을 위한 최고의 참고서",
      hover: false,
    },
    {
      title: "Kotlin In Action",
      img: kotlin,
      content: "코틀린 이론 기본서",
      hover: false,
    },
    {
      title: "리액트 프로그래밍 정석",
      img: reactBook,
      content: "실리콘밸리 개발 방법으로 배우는 리액트 프로그래밍!",
      hover: false,
    },
    {
      title: "30개 프로젝트로 배우는 Android 앱 개발 with Kotlin",
      img: androidLecture,
      content: "코틀린 기반의 심화 안드로이드 프로젝트 강의",
      hover: false,
    },
    {
      title: "웹 성능 최적화 기법",
      img: optimize,
      content: "사용자에게 최고의 서비스 제공하는 방법(현재 독서 중!)",
      hover: false,
    },
    {
      title: "Clean Code",
      img: cleanCode,
      content: "시간이 될때마다 조금씩 읽어보고 있는 동기의 추천 북!",
      hover: false,
    },
  ]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/book");
  };
  const onHandleMouseEnter = (index) => {
    const tmp = [...data];
    tmp[index].hover = true;
    setData(tmp);
  };
  const onHandleMouseOut = (index) => {
    const tmp = [...data];
    tmp[index].hover = false;
    setData(tmp);
  };

  return (
    <div className="book">
      <div className="title">
        <strong>Book & Lecture</strong>
      </div>
      <br />
      <br />
      <span className="guide">
        /* 마우스를 올리시면 책/강의의 정보를 보실 수 있습니다. */
      </span>
      <div className="flex">
        <div className="book_container">
          {data.map((book, index) => (
            <div
              className="book_item"
              key={index}
              onMouseEnter={() => onHandleMouseEnter(index)}
              onMouseLeave={() => onHandleMouseOut(index)}
            >
              <img src={book.img} alt={book.title} />
              <div className={book.hover ? "book_info active" : "book_info"}>
                <strong className="book_title">{book.title}</strong>
                <span className="book_content">{book.content}</span>
              </div>
            </div>
          ))}
        </div>
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
