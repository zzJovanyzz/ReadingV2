import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
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
  /* border: solid;
  border-color: red; */
  /* 
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
  height: 60px;
  width: 100%;
`;
//
//
// LogoContainer is a div(flex-item) container for my logo
//
//
const LogoContainer = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 36px;
  margin: 10px;
  padding-bottom: 5px;
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
        <Dropdown as={ButtonGroup} className="dropdownButton">
          <Button className="dropdownButton">
            <Menu />
          </Button>
          <Dropdown.Toggle
            className="dropdownButton"
            id="dropdownToggle"
            style={{ backgroundColor: "rgb(60, 60, 60)" }}
          />
          <Dropdown.Menu>
            <Dropdown.Item className="dropdownItem">
              <Link to="/why" className="dropdownLink">
                Why?
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className="dropdownItem">
              <Link to="/" className="dropdownLink">
                Home
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </MenuContainer>
    </Container>
  );
};

export default Navbar;
