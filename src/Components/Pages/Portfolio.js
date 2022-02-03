import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Loader from "../../Items/Loader";

const portfolioData = [
  {
    title: "Multifunctional App",
    image: require("../../Images/app.png"),
    demoLink: "https://multifunctional.netlify.app",
    githubLink: "https://github.com/kitsunne/vanilla-practice-react",
    alt: "image of main page",
    description: (
      <div>
        <p>It's a collection of mini projects implemented at React.</p>
        <div>There are 10 working applications:</div>
        <br />
        <div>- Modal Window, which you can open and close.</div>
        <div>
          - QA block, which has written in a way of Accordion, vertically
          stacked list of items. Where each can be collapsed to reveal the
          content associated with that item.
        </div>
        <div>
          - Reviews slider, where you can swipe reviews or choose random one.
        </div>

        <div>
          - Dish menu that allows to choose dishes based on certain
          criteria/category.
        </div>

        <div>
          - Grocery List, like todo list making app. Here you can add, edit,
          delete the item or clean everything at all.
        </div>

        <div>- Simple photo slider.</div>

        <div>
          - Information tabs. With the informational items, each item can be
          collapsed to reveal the content associated with that item.
        </div>

        <div>
          - A virtual clock that counts down from a certain date to indicate the
          end oa an event
        </div>

        <div>- Video player.</div>

        <div>
          - Generator of paragraphs, where you can specify the number of
          paragraphs you want to see.
        </div>
      </div>
    ),
    technologies: "React / Styled Components",
  },
  {
    title: "Social Network 'BeSocial' ",
    image: require("../../Images/social-network.png"),
    demoLink: "https://social-network-besocial.netlify.app/",
    githubLink: "https://github.com/kitsunne/social-network-react",
    alt: "image of dialog page",
    description: (
      <div>
        <p>It's a replica of a social network.</p>
        <br />
        <div>- Like posts.</div>
        <div>- Add new posts.</div>
        <div>- Send messages.</div>
        <br />
        <div>IN PROGRESS NOW ...</div>
        <Loader />
      </div>
    ),
    technologies: "React ",
  },
];

const Portfolio = () => {
  document.title = "kitsunne: portfolio";

  const [index, setIndex] = useState(0);
  const { title, image, demoLink, githubLink, alt, description, technologies } =
    portfolioData[index];
  return (
    <WrapperMain>
      <Wrapper key={title}>
        <InfoWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoWrapper>
        <ProjectWrapper>
          <Links>
            <Link href={demoLink} target="_blank">
              Demo
            </Link>
            <Link href={githubLink} target="_blank">
              GitHub
            </Link>
          </Links>
          <a href={demoLink} target="_blank">
            <Image src={image} alt={alt} />
          </a>
          <Technologies>{technologies}</Technologies>
        </ProjectWrapper>
      </Wrapper>
      <ContainerButton>
        <button onClick={() => setIndex(index === 0 ? 0 : index - 1)}>
          Prev
        </button>
        <button
          onClick={() =>
            setIndex(index >= portfolioData.length - 1 ? 0 : index + 1)
          }
        >
          Next
        </button>
      </ContainerButton>
    </WrapperMain>
  );
};
const WrapperMain = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    padding-top: 110px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 110px;
  }
`;
const Technologies = styled.div`
  padding: 10px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Link = styled.a`
  color: white;
  transition: ease 0.2s;
  padding: 0 10px;
  @media screen and (max-width: 1024px) {
    padding: 15px 20px;
  }
  &:hover {
    color: #4bb49d;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 15px;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 45px;
  animation-name: fadeInFromNone;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 90px 0 90px 45px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    border: none;
    flex-direction: column-reverse;
    padding: 40px 0;
  }
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
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 460px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    font-size: 37px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  max-width: 850px;
  @media screen and (max-width: 1024px) {
    padding-right: 30px;
    max-width: 400px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    padding-right: 0;
  }
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;
  padding-top: 50px;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
    overflow: auto;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-top: 0;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  button {
    background-color: #f37a53;
    border: none;
    margin: 20px;
    width: 70px;
    height: 30px;
    color: black;
    font-size: 18px;
    border-radius: 5px;
    &:hover {
      background-color: transparent;
      border: 1px solid #f37a53;
      color: white;
    }
  }
`;

export default Portfolio;
