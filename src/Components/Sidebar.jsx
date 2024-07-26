import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { PiShootingStarLight } from "react-icons/pi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { CiDesktop } from "react-icons/ci";
import { FaDiamond } from "react-icons/fa6";
import "./Sidebar.scss";


const Sidebar = () => {
  const items = [
    {
      icon: <IoGridOutline />,
      text: "news feed",
      items: [
        { icon: <PiShootingStarLight />, text: "tending", value: '12'},
        { icon: <BsFillSuitHeartFill />, text: "following" },
        { icon: <CiDesktop />, text: "your videos" },
        { icon: <FaDiamond />, text: "playlist", value: '+3' },
      ],
    },
  ];
  const following = [
    {
      text: "following",
      items: [
        {
          image: "./img/user1.svg",
          name: "xQc",
          description: "just calling",
          following: "42,505",
        },
        {
          image: "./img/user2.png",
          name: "ZED99_lol",
          description: "League of legends",
          following: "24,101",
        },
        {
          image: "./img/user3.png",
          name: "Stevens",
          description: "Chess 3D",
          following: "12,004",
        },
        {
          image: "./img/user4.svg",
          name: "Trick2G",
          description: "League of Legends",
          following: "8,808",
        },
        {
          image: "./img/user5.svg",
          name: "IWDominate",
          description: "League of Legends",
          following: "423",
        },
      ],
    },
  ];
  

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a href="#">
          <img src="./img/dragon.png" alt="Dragon Logo" />
          <span className="sidebar-title">
            Gamming
            <span className="highlight-color">drogo</span>
          </span>
        </a>
        <div className="item-container">
          {items.map((item, i) => (
            <div key={i} className="item">
              <div className="item-info">
                <i className="item-icon">{item.icon}</i>
                <span>{item.text}</span>
              </div>

              {item.items.map((subItem, i) => (
                <div key={i} className="subitem-info">
                  <i className="icon">{subItem.icon}</i>
                  <span>{subItem.text}</span>
                 <p>{subItem.value}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="following-container">
          {following.map((follow, i) => (
            <div key={i} className="following-item">
              <span>{follow.text}</span>
              {follow.items.map((item, i) => (
                <div key={i} className="nested-list-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="profile-pic"
                  />
                  <div className="item-info">
                    <div className="item-row">
                      <span className="name">{item.name}</span>
                      <p className="following">{item.following}</p>
                    </div>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <a href="#" target="_blank" className="link-see-more">
          see more
        </a>
        <div className="footer">
          <img src="./img/user1.svg" className="profile-pic" />
          <span className="name">Takedistance</span>
          <p className="description">Lvl 32</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
