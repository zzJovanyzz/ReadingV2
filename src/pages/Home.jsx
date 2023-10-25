import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: solid;
`;

const Home = () => {
  return (
    <Container>
      <Link to="/why">Why?</Link>
    </Container>
  );
};

export default Home;
