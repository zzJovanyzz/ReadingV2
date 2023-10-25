import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Why = () => {
  return (
    <Container>
      <Link to="/">HomePage</Link>
    </Container>
  );
};

export default Why;
