import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from 'react-scroll'

const HeaderNav = () => {
  return (
      <>
          <article className="navs">
              <div className="nav-primary">
                  <button className="button-login">
                      <NavLink className="link-primary" to="/login">Zaloguj się</NavLink>
                  </button>
                  <button className="button-register"
                  ><NavLink className="link-primary" to="/register">Załóż konto</NavLink>
                  </button>
              </div>
              <div className="nav-secondary">
                  <li className="nav-menu nav-start">
                      <NavLink className="link-primary" to="/"> Start </NavLink>
                  </li>

                  <li className="nav-menu">
                      <Link activeClass="active" className="link-primary" to="articleWhatGoing" spy={true} smooth={true} duration={500}>
                          O co chodzi?
                      </Link>
                  </li>
                  <li className="nav-menu">
                      <Link activeClass="active" className="link-primary" to="articleAboutUS" spy={true} smooth={true} duration={500}>
                          O nas
                      </Link>
                  </li>
                  <li className="nav-menu">
                      <Link activeClass="active" className="link-primary" to="articleHelp" spy={true} smooth={true} duration={500}>
                          Fundacja i organizacje
                      </Link>
                  </li>
                  <li className="nav-menu">
                      <Link activeClass="active" className="link-primary" to="articleForm" spy={true} smooth={true} duration={500}>
                          Kontakt
                      </Link>
                  </li>
              </div>
          </article>
      </>
  )
};
export default HeaderNav;