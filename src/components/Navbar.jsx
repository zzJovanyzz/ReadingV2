import { Menu } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
//
//
// Container is the parent div (flex-container)
//
//
const Container = styled.div`
  /*  */
  /* Background Color */
  /*  */
  background-color: white;
  /*  */
  /* Border Styles */
  /*  */
  /* border-bottom: solid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-width: 2px; */
  /*  */
  /* Flex Container Styles */
  /*  */
  display: flex;
  justify-content: space-between;
  /*  */
  /*  */
  /*  */
  margin: 0px;
  height: 30px;
  width: 100%;
`;
//
//
// LogoContainer is a div(flex-item) container for my logo
//
//
const LogoContainer = styled.div`
  font-family: "Playpen Sans", cursive;
  font-size: 26px;
  margin: 10px;
`;
//
//
// MenuContainer is a div(flex-item) container that holds
// a dropdown menu that allows navigation between pages
//
//
const MenuContainer = styled.div`
  margin: 10px;
`;
//
// Here Logo/MenuContainer are divs inside of a
// parent Container which is itself a flex Container.
// This was set up this was to keep it simple and also
// provide a simple way to control spacing as well as position.
//
const Navbar = () => {
  return (
    <Container>
      <LogoContainer>READ by Jovany</LogoContainer>
      <MenuContainer>
        <Menu style={{ fontSize: "40px" }} />
      </MenuContainer>
    </Container>
  );
};

export default Navbar;
