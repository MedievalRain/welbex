import styled from "styled-components";
import { ContentLayout } from "./components/content/ContentLayout";

import { Header } from "./components/header/Header";
import { ResetStyles } from "./styles/ResetStyle";
import { Background } from "./components/background/Background";
import {
  BreakpointContextProvider,
  useBreakpoint,
} from "./hooks/useBreakpoint";
import { Footer } from "./components/footer/Footer";

const AppWrapper = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
  color: #e4e5ea;
  margin: auto;
  align-items: center;
  max-width: calc(1140px + 2rem);
`;

function App() {
  const breakpoint = useBreakpoint();
  return (
    <>
      <ResetStyles />
      <BreakpointContextProvider value={breakpoint}>
        <AppWrapper>
          {breakpoint === "big" && <Background />}
          <Header />
          <ContentLayout />
          <Footer />
        </AppWrapper>
      </BreakpointContextProvider>
    </>
  );
}

export default App;
