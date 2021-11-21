import { useState } from "react";
import { MenuLink, Nav, Logo, Menu, Hamburger } from "../styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
	const closeMobile = () => {
		setIsOpen(!isOpen)
	}
  return (
    <Nav>
      <Logo href="/">
        LOGO
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      {/* <Menu isOpen={isOpen}> */}
      <Menu isOpen={isOpen}>
        <MenuLink onClick={closeMobile}>Random1</MenuLink>
        <MenuLink onClick={closeMobile}>Random2</MenuLink>
        <MenuLink onClick={closeMobile}>Random3</MenuLink>
        <MenuLink onClick={closeMobile}>Random4</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
