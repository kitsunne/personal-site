import styled from "styled-components";

import Loader from "../../Items/Loader";

const Portfolio = () => {
  document.title = "kitsunne: blog";

  return (
    <BlogWrapper>
    <Text>
      <h1>Coming soon...</h1>
    </Text>
    <Loader />
  </BlogWrapper>
     
    );
};

const BlogWrapper = styled.div`
  display: flex;
  margin:0  auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  background-color: #11111b;
  @media screen and (max-width: 1920px) {
   padding-top:200px;
}
@media screen and (max-width: 1440px) {
   padding-top:130px;
}
  @media screen and (max-width: 480px) {
    padding-top: 180px;
    height: 300px;
  }
`;
const Text = styled.div`
  h1 {
    color: white;
    font-size: 30px;
    font-family: "Raleway", sans-serif;
    letter-spacing: 6px;
    margin: 0;
    @media screen and (max-width: 480px) {
      padding-top: 20px;
      font-size: 20px;
    }
  }
`;


export default Portfolio;
