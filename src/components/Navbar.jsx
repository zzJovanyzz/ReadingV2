import React from "react";
import styled from "styled-components";
//
//
// Container is the parent div
//
//
const Container = styled.div`
  background-color: white;
  border: solid;
  display: flex;
  justify-content: space-between;
  margin: 0;
  height: 30px;
`;

const LogoContainer = styled.div`
  border: solid;
  border-color: red;
`;

const MenuContainer = styled.div`
  border: solid;
  border-color: blue;
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
      <LogoContainer>Read by Jovany</LogoContainer>
      <MenuContainer>Menu</MenuContainer>
    </Container>
  );
};

export default Navbar;
