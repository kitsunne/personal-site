import styled from "styled-components";


const Blog = () => {
  document.title = "kitsunne: blog";

  return (
    <BlogWrapper>
      <Posts>
      <Post>
          <Border>
         <Quote> 
          <b>2020-2021. </b>I had a small hobby - <b>Frontend</b>. This site, as well as a couple of other works, are the result of it. <br></br>
          <b>My stack:</b> HTML / JS / CSS / React / Redux / Bootstrap / Styled Components /  Jest <br></br>
          <b>My GitHub:</b> https://github.com/kitsunne <br></br>
          <b>Demo:</b> <a href ="https://social-network-besocial.netlify.app/" > Social Network</a> and <a href ="https://multifunctional.netlify.app/" > Multifunctional App</a>.
         </Quote>
          </Border>
        </Post>
        <Post>
          <Border>
         <Quote> 
          <b>2023.</b> Started working as a QA Engineer on a AAA project in Gamedev. <br></br>
         </Quote>
          </Border>
        </Post>
        <Post>
          <Border>
         <Quote> 
         <ImageContainer>
         Short trip to Paris and Normandy.<br></br>
        <img src={require("../../Images/photo1.jpg")} alt="logo"></img>
        <img src={require("../../Images/photo2.jpg")} alt="logo"></img>
        <img src={require("../../Images/photo3.jpg")} alt="logo"></img>
      </ImageContainer>
         </Quote>
          </Border>
        </Post>
      </Posts>
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
   padding-top:50px;
}
@media screen and (max-width: 1440px) {
   padding-top:130px;
}
@media screen and (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100%;
    margin-top:5px;
  }
  @media screen and (max-width: 350px) {
    margin-top:10px;
  }
`;
const Posts = styled.div`
display: flex;
flex-direction: column-reverse;


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

const Post = styled.div`
  margin:10px;
  border: solid black;
  float:left; 
  border-width: 5px 3px 3px 5px;
  border-color:  #ffffff;
  animation-name: blinking;
  animation-duration: 2s;
  animation-iteration-count: 100;
  @keyframes blinking {
  50% {
    border-color: #f37a53;
    box-shadow: 0px 0px 29px #f37a53;
  }
}
 `;
const Border = styled.div`
  margin:30px;
  @media screen and (max-width: 1920px) {
    margin:20px;
  }
  @media screen and (max-width: 480px) {
    margin:15px;
    text-align: center;
  }
`;
const Quote = styled.main`
color: white;
font-size:25px;
@media screen and (max-width: 1920px) {
    font-size:20px;
  }
    @media screen and (max-width: 480px) {
    font-size: 15px;
  }`;

const ImageContainer = styled.div`
  margin: 0 auto;
  img {
    width: 420px; 
    @media screen and (max-width: 1920px) {
    width: 450px;
    } 
    @media screen and (max-width: 1440px) {
      width: 300px;
    }
    @media screen and (max-width: 1024px) {
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      width: 280px;
      align-self: center;
      text-align: center;
    }
    @media screen and (max-width: 480px) {
      width: 250px;
      align-self: center;
      margin:30px 0;
    }
    @media screen and (max-width: 320px) {
      width: 140px;
      align-self: center;
    }
  }
`;

export default Blog;
