import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./imgs/logo.png";

const Navbar = ({ handleUserIconClick, handleLocationIconClick }) => {
  const handlePhoneIconClick = () => {
    window.location.href = "tel:+48602467698";
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{ marginLeft: "10px" }}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="icons">
        <FontAwesomeIcon
          icon={faPhone}
          size="l"
          className="expand"
          onClick={handlePhoneIconClick}
          style={{ cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          size="l"
          className="expand"
          style={{ cursor: "pointer" }}
          onClick={handleLocationIconClick}
        />
        <FontAwesomeIcon
          icon={faUsers}
          size="l"
          className="expand"
          style={{ cursor: "pointer" }}
          onClick={handleUserIconClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
