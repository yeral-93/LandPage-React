import React from "react";
import Facebook from "../../img/icon-facebook.svg";
import Twitter from "../../img/icon-twitter.svg";
import Pinterest from "../../img/icon-pinterest.svg";
import Instagram from "../../img/icon-instagram.svg";
import { Networks } from "./StyleNetworks";

const NetworksFooter = () => {
  return (
    <Networks>
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
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </Networks>
  );
};

export default NetworksFooter;
