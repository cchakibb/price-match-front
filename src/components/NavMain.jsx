import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutBoxLine } from "react-icons/ri";

import "../styles/nav.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="nav">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu size={44} color="  rgba(252, 192, 82, 0.932)" />
      </label>
      <NavLink exact to="/">
        <label id="price-title" className="logo">
          Price<span>Match</span>
        </label>
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li className="a-nav">
              <NavLink to="/profile">{context.user && context.user.email}</NavLink>
            </li>
            <li className="a-nav">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="a-nav">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="a-nav">
              <p onClick={handleLogout}>
                {" "}
                <RiLogoutBoxLine size={44} color="  rgba(252, 192, 82, 0.932)" />
              </p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li className="a-nav">
              <NavLink to="/signin">Log in</NavLink>
            </li>
            <li className="a-nav">
              <NavLink to="/signup">Create account</NavLink>
            </li>
            <li className="a-nav">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
