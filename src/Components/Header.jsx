import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import './Header.scss'
const Header = () => {
  return (
    <div className="header-container">
      <div className="btn-header">
        <button>
        <i><FaArrowAltCircleLeft /></i>
        </button>
        <h1>leauge of legends <span className="highlight-color">lobby</span>
        </h1>
      </div>
      <div className="btn-search">
        <input type="text" placeholder="...search a champion"></input>
        <button className="btn-icon">
          {/* search button*/}
          <i><CiSearch /></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
