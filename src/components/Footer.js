import React from "react";
import { Sociallinks, Pagelinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {Pagelinks.map((elle) => {
          const { id, heref, text } = elle;

          return (
            <>
              <li key={id}>
                <a href={heref} className="footer-link">
                  {text}
                </a>
              </li>
            </>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {Sociallinks.map((elle) => {
          const { id, heref, icon } = elle;

          return (
            <>
              <li key={id}>
                <a href={heref} target="_blank" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            </>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
