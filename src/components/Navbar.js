import React from "react";
import image from "../images/logo.svg";
import { Pagelinks, Sociallinks } from "../data";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={image} className="nav-logo" alt="backroads" />

          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* !-- left this comment on purpose -- */}

        {/* <ul className="nav-links" id="nav-links">
          {Pagelinks.map((links) => {
            return (
              <li key={links.id}>
                <a href={links.heref} className="nav-link">
                  {links.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <ul className="nav-links" id="nav-links">
          {Pagelinks.map((elle) => {
            const { id, heref, text } = elle;

            return (
              <>
                <li key={id}>
                  <a href={heref} className="nav-link">
                    {text}
                  </a>
                </li>
              </>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {Sociallinks.map((link) => {
            const { id, heref, icon } = link;
            return (
              <>
                <li key={id}>
                  <a href={heref} target="_blank" className="nav-icon">
                    <i className={icon}></i>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
