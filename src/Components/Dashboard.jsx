import React from "react";
import ChooseHeros from "./ChooseHeros";
import "./Dashboard.scss";
import Videos from "./Videos";

const Dashboard = () => {
  const heros = [
    {
      image: "./img/ahri1.jpg",
      name: "Ahri",
      subname: "mage",
      characterstatus: [
        { name: "Damage", completion: 50 },
        { name: "Mobility", completion: 100 },
        { name: "Health", completion: 30 },
      ],
    },
    {
      image: "./img/missfortune.jpg",
      name: "Miss Fortune",
      subname: "marksman",
      characterstatus: [
        { name: "Damage", completion: 100 },
        { name: "Mobility", completion: 30 },
        { name: "Health", completion: 30 },
      ],
    },
    {
      image: "./img/misterfortune.jpg",
      name: "Mister Fortune",
      subname: "marksman",
      characterstatus: [
        { name: "Damage", completion: 100 },
        { name: "Mobility", completion: 30 },
        { name: "Health", completion: 30 },
      ],
    },
  ];

  const videos = [
    { image: "./img/video1.jpg", profilepic: "./img/user1.svg"},
    { image: "./img/video3.jpg", profilepic: "./img/user4.svg", description: "Playing Iron to Diamond ||| Let's Go!", name: "JoeCocker" },
    { image: "./img/video2.jpg", profilepic: "./img/user5.svg" },
    { image: "./img/video1.jpg", profilepic: "./img/user6.svg" },
    { image: "./img/video2.jpg", profilepic: "./img/user2.png" },
    { image: "./img/video3.jpg", profilepic: "./img/user3.png" },
  ];
  return (
    <div className="dashboard">
      <div className="choose-heros-container">
        <div className="choose-hero">
        <ChooseHeros heros={heros} />
        </div>
        
        
      </div>
      <div className="video-container">
      <div className="videos">
        <div className="title"><h1>Videos</h1></div>
        <div className="image">
        {videos.map((video, i) => (
          <Videos key={i} video={video}/>
        ))}
        </div>
       
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
