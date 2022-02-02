import React from "react";
import styled from "styled-components";

import Loader from "../../Items/Loader";

const Blog = () => {
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
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;

  @media screen and (max-width: 480px) {
    padding-top: 160px;
  }
`;
const Text = styled.div`
  h1 {
    color: white;
    font-size: 30px;
    font-family: "Raleway", sans-serif;
    letter-spacing: 6px;
    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

export default Blog;
