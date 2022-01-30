import styled from "styled-components";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  height: 100%;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: 150px 2fr;
  grid-template-columns: 1fr;
  grid-gap: 4px;
`;

export default App;
