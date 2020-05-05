import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../images/logo512.png";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          FeelsFlix
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Navigation;
