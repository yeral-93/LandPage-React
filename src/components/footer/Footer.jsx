import React from "react";
import NetworksFooter from "../NetworksFooter/NetworksFooter";
import LinksFooter from "../LinksFooter/LinksFooter";
import { FooterGlobal } from "./StyleFooter";

const Footer = () => {
  return (
    <FooterGlobal>
      <LinksFooter />
      <NetworksFooter />
    </FooterGlobal>
  );
};

export default Footer;
