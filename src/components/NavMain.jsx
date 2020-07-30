import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import { GiHamburgerMenu } from "react-icons/gi";

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
    <label for="check" className="checkbtn">
    <GiHamburgerMenu size={44} color="  rgb(7, 131, 69)" />
    </label>
      <NavLink exact to="/">
      <label class="logo">
      <a id="sportrip-title" href="/">Price<span>Match</span></a>
    </label>
   
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li className="a-nav">
              <NavLink to="/profile">
                {context.user && context.user.email}
              </NavLink>
            </li>
            <li className="a-nav">
              <p onClick={handleLogout}>Logout</p>
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
          </React.Fragment>
        )}
      </ul>
    </nav>
    
  );
};

export default withUser(NavMain);
