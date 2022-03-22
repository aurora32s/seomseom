import React, { Component, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  UserOutlined,
  BookOutlined,
  HistoryOutlined,
  HeatMapOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import "../../resource/css/Footer.css";

const Footer = () => {
  const [value, setValue] = useState(0);

  const nav = [
    { label: "About Me", icon: <UserOutlined /> },
    { label: "History", icon: <BookOutlined /> },
    { label: "Skill", icon: <HistoryOutlined /> },
    { label: "Project", icon: <HeatMapOutlined /> },
    { label: "Book", icon: <FundProjectionScreenOutlined /> },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="footer">
      <BottomNavigation value={value} onChange={handleChange}>
        {nav.map((data, index) => (
          <BottomNavigationAction
            label={data.label}
            value={index}
            icon={data.icon}
            key={index}
          />
        ))}
      </BottomNavigation>
    </div>
  );
};

export default Footer;
