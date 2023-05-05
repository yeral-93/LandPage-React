import React from "react";
import { ImgFooter, LinkFooter } from "./StyleLinksFooter";
import LogoFooter from "../../img/logo.svg";

const LinksFooter = () => {
  const linksFooter = [
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
      route: "",
    },
    {
      name: "Support",
      route: "",
    },
  ];
  return (
    <LinkFooter>
    <figure>
        <ImgFooter src={LogoFooter} alt="Logo" />
      </figure>
      <ul>
        {linksFooter.map((item, index) => (
          <li key={`${item.name}-${item.index}`}>{item.name}</li>
        ))}
      </ul>
    </LinkFooter>
  );
};

export default LinksFooter;
