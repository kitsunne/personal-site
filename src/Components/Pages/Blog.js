import React from "react";
import styled from "styled-components";

const Blog = () => {
  document.title = "kitsunne: blog";
  return (
    <Text>
      <h1>COMING SOON...</h1>
    </Text>
  );
};

const Text = styled.div`
  padding-top: 100px;
  display: flex;
  margin: O auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    color: white;
    font-size: 30px;
    letter-spacing: 6px;
  }
`;

export default Blog;
