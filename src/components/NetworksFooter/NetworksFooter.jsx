import React from "react";
import LogoFooter from "../../img/logo.svg";
import { ImgFooter, Networks } from "./StyleNetworks";
import Facebook from "../../img/icon-facebook.svg";
import Twitter from "../../img/icon-twitter.svg";
import Pinterest from "../../img/icon-pinterest.svg";
import Instagram from "../../img/icon-instagram.svg";

const NetworksFooter = () => {
  return (
    <Networks>
      <figure>
        <ImgFooter src={LogoFooter} alt="Logo" />
      </figure>
      <ul>
        <li>
          <img src={Facebook} alt="Facebook" />
        </li>
        <li>
          <img src={Twitter} alt="Twitter" />
        </li>
        <li>
          <img src={Pinterest} alt="Pinterest" />
        </li>
        <li>
          <img src={Instagram} alt="Instagram" />
        </li>
      </ul>
    </Networks>
  );
};

export default NetworksFooter;
