import React from "react";
import logo from '../../img/logo.svg'
import menu from '../../img/icon-hamburger.svg'
import { Mobileicon, Nav } from "./styleNavigationBar";

const NavigationBar = () => {
    const links = [
        {
          name: "About",
          route: "",
        },
        {
          name: "Careers",
          route: "",
        },
        {
          name: "Events",
          route: "",
        },
        {
          name: "Products",
          routes: "",
        },
        {
          name: "Supports",
          routes: "",
        },
      ];

  return (
    <>
      <Nav>
        <figure>
          <img src={ logo } alt="logo" />
        </figure>

        <Mobileicon>
          <img src={ menu } alt="logo" />
        </Mobileicon>
        <ul>
        {links.map((item, index) => (
            <li key={`${item.name}-${index}`}>{item.name}</li>
          ))}
        </ul>
        
      </Nav>
    </>
  );
};

export default NavigationBar;
