import React from "react";
import Banner from "../banner/Banner";
import NavigationBar from "../navigationBar/NavigationBar";

const Header = () => {
  return (
    <div>
      <NavigationBar />
      <Banner />
    </div>
  );
};

export default Header;