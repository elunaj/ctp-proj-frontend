import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/peli.svg";
const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark" style={{ background: "#141414" }}>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <p className="Nav-text">Pelí</p>
          </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
};

export default Navigation;
