import React from "react";
import logo from '../../img/logo.svg'
import menu from '../../img/icon-hamburger.svg'
import close from '../../img/icon-close.svg'

import { Container, Nav, StyleLinks, Hamburguer, Close } from "./styleNavigationBar";

// import { Mobileicon, Nav } from "./styleNavigationBar";

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
    <Container>
      <Nav id="nav">
        <figure>
          <img src={ logo } alt="logo" />
        </figure>

        <StyleLinks>
          {links.map((item, index) => (
              <li key={`${item.name}-${index}`}>{item.name}</li>
            ))}
        </StyleLinks>
        
        <Hamburguer href="#nav"><img src={ menu } alt="menu" /></Hamburguer>
        <Close href="#"><img src={ close } alt="close" /></Close>
      </Nav>
    </Container>
    

      {/* <Nav>
        <figure>
          <img src={ logo } alt="logo" />
        </figure>

        <ul>
        {links.map((item, index) => (
            <li key={`${item.name}-${index}`}>{item.name}</li>
          ))}
        </ul>
        
        <Mobileicon>
          <img src={ menu } alt="logo" />
        </Mobileicon>
      </Nav> */}
    </>
  );
};

export default NavigationBar;
