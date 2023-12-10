import styled from "styled-components";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ResetStyles } from "./styles/ResetStyle";

const StyledApp = styled.div`
  background-color: #0e1014;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  color: #e4e5ea;
  margin: auto;
  align-items: center;
  max-width: 1140px;
`;

function App() {
  return (
    <>
      <ResetStyles />
      <StyledApp>
        <AppWrapper>
          <Header />
          <Content />
          <Footer />
        </AppWrapper>
      </StyledApp>
    </>
  );
}

export default App;
