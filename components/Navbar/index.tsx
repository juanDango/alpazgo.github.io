import React, { useState } from "react";
import Logo from "./Logo";
import MenuToggle from "components/Navbar/MenuToggle";
import MenuLinks from "components/Navbar/MenuLinks";
import NavBarContainer from "components/Navbar/NavBarContainer";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
