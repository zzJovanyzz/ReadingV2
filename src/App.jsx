import styled from "styled-components";
import Navbar from "./components/Navbar";
import MyRoutes from "./MyRoutes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <MyRoutes />
      </Container>
    </>
  );
}

export default App;
