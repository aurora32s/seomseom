import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import profile from '../../resource/images/profile.jpg';
import github from '../../resource/images/github.png';
import programmers from '../../resource/images/programmers.png';
import {
  UserOutlined,
  BookOutlined,
  HistoryOutlined,
  HeatMapOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import '../../resource/css/Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  let location;

  useEffect(() => {
    const { hash } = window.location;
    location = hash.substring(1);
    setValue(nav.findIndex((x) => x.link == location));
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  const nav = [
    { label: 'About Me', icon: <UserOutlined />, link: '/' },
    // { label: "History", icon: <BookOutlined /> },
    { label: 'Skill', icon: <HistoryOutlined />, link: '/skill' },
    {
      label: 'Project',
      icon: <HeatMapOutlined />,
      link: '/project',
    },
    {
      label: 'Book&Lecture',
      icon: <FundProjectionScreenOutlined />,
      link: '/book',
    },
  ];

  const handleChange = (index, link) => {
    if (location != link) {
      setValue(index);
      navigate(link);
    }
  };

  const data = [
    {
      title: '기술 블로그',
      img: profile,
      color: '#ec5e57',
      url: 'https://rien-atelier.tistory.com/',
      content: '알게 된 내용을 공유하고 복습하기 위한 기술 블로그입니다. ',
    },
    {
      title: 'Github',
      img: github,
      color: '#ffcd4f',
      url: 'https://github.com/aurora32s',
      content:
        '프로그래밍 한 코드를 저장하고 복습하기 위한 GitHub 입니다. 현재 열심히 잔디 심는중😚',
    },
    {
      title: 'Programmers Resume',
      img: programmers,
      color: '#a4ca3f',
      url: 'https://programmers.co.kr/pr/aurora32s_9924',
      content: '프로그래머스에 정리해둔 이력서 입니다. 참고해주세요.☺️',
    },
  ];
  return (
    <div>
      <div className='contact'>
        <div className='title'>
          <strong>Contact Me</strong>
        </div>
        <div className='contact_container'>
          {data.map((contact, index) => (
            <div className='contact_item' key={index}>
              <img
                className='contact_img'
                src={contact.img}
                alt={contact.title}
              />
              <div className='contact_info'>
                <strong className='contact_title'>{contact.title}</strong>
                <br />
                <span className='contact_content'>{contact.content}</span>
              </div>
              <a
                className='contact_link'
                href={contact.url}
                style={{ backgroundColor: contact.color }}
                target='_blank'>
                이동하기
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='empty_box' />
      <div className='footer'>
        <BottomNavigation value={value}>
          {nav.map((data, index) => (
            <BottomNavigationAction
              label={data.label}
              value={index}
              icon={data.icon}
              key={index}
              onClick={() => handleChange(index, data.link)}
            />
          ))}
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Footer;
