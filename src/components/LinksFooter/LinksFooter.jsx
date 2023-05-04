import React from "react";
import { LinkFooter } from "./StyleLinksFooter";
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
      <ul>
        {linksFooter.map((item, index) => (
          <li key={`${item.name}-${item.index}`}>{item.name}</li>
        ))}
      </ul>
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </LinkFooter>
  );
};

export default LinksFooter;
