import styled from "styled-components";
import { ContentLayout } from "./components/content/ContentLayout";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { ResetStyles } from "./styles/ResetStyle";
import { Background } from "./components/background/Background";

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
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  color: #e4e5ea;
  margin: auto;
  align-items: center;
  max-width: calc(1140px + 2rem);
  padding-left: 1rem;
  padding-right: 1rem;
`;

function App() {
  return (
    <>
      <ResetStyles />
      <StyledApp>
        <Background />
        <AppWrapper>
          <Header />
          <ContentLayout />
          <Footer />
        </AppWrapper>
      </StyledApp>
    </>
  );
}

export default App;
