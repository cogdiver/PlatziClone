import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/static/logo.png";
import logo2 from "../../assets/static/logo2.png";
import StyledLogo from "./style";

class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <StyledLogo>
          <img src={logo} alt="Logo-Platzi" />
          <img src={logo2} alt="Platzi" />
        </StyledLogo>
      </Link>
    );
  }
}

export default Logo;
