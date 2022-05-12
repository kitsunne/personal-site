import styled from "styled-components";
import Main from "./Main";

const Home = () => {
  document.title = "kitsunne: home";
  return( 
    <Container>
      <Main />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 50px;
  overflow: hidden;
  animation-name: fadeInFromNone;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Home;
