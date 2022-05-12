import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

import styles from "../Sass/Navbar.module.scss";

import Main from "../Main/Main";
import About from "../About/About";
import { Fragment } from "react";

const NavbarMenu = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <header className={styles.header}>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  App
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
export default NavbarMenu;
