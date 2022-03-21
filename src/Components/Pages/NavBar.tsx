import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Home from "../Home";
import { FaGithub, FaLinkedin, FaStarOfLife } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Menu onClick={handleMenuOpen}>
        {!isMenuOpen ? <HiMenu /> : <IoMdClose />}
      </Menu>
      <NavbarWrapper isMenuOpen={isMenuOpen}>
        <Logo>
          <FaStarOfLife id="logo" /> KITSUNNE
        </Logo>
        <LinksContainer>
          <StyledLink to="/" onClick={handleMenuOpen}>
            <span>&#x3c;</span>About
            <span>/&#x3e;</span>
          </StyledLink>
          <StyledLink to="/portfolio" onClick={handleMenuOpen}>
            <span>&#x3c;</span>Portfolio<span>/&#x3e;</span>
          </StyledLink>
          <StyledLink to="/blog" onClick={handleMenuOpen}>
            <span>&#x3c;</span>Blog<span>/&#x3e;</span>
          </StyledLink>

          <CvLink href={require("../../Items/CV-1.pdf")} target="_blank">
            <span>&#x3c;</span>CV<span>/&#x3e;</span>
          </CvLink>
        </LinksContainer>
        <SocialIcons>
          <SocialLinks href="https://github.com/kitsunne" target="_blank">
            <FaGithub />
          </SocialLinks>
          <SocialLinks href="https://www.linkedin.com/in/daria-kiseliova/" target="_blank">
            <FaLinkedin />
          </SocialLinks>
          <SocialLinks href="mailto:kisichekk@gmail.com" target="_blank">
            <SiGmail />
          </SocialLinks>
        </SocialIcons>
      </NavbarWrapper>

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/blog" element={<Blog/> }></Route>
      </Routes>
    </>
  );
};

const Menu = styled.div`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }
  @media screen and (max-width: 480px) {
    top: 5px;
    right: 5px;
  }
  @media screen and (max-width: 320px) {
    top: 5px;
    right: 3px;
  }
`;

const NavbarWrapper = styled.div <{ isMenuOpen: boolean }>`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 5px 160px;
  z-index: 1000;
  @media screen and (max-width: 1366px) {
    padding: 5px 120px;
    font-size: 18px;
    
  }
  @media screen and (max-width: 1024px) {
    padding: 30px 0;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 320px;
    font-size: 15px;
    position: fixed;
    top: 0;
    box-shadow: 5px 5px 20px;
    transition: all 0.3s ease;
    ${(props) =>
      props.isMenuOpen
        ? `
      background: #11111b;
      left: 0;
      opacity: 1;
      position: absolute;
      transition: all 0.3s ease;
      z-index: 1;
    `
        : `
    opacity: 1;
    top: -100%;
    `}
  }
`;
const Logo = styled.h1`
  font-size: 30px;
  letter-spacing: 1px;
  color: #e1e3ef;
  cursor: pointer;

  #logo {
    color: #4bb49d;
    width: 15px;
  }
  @media screen and (max-width: 1366px) {
    font-size: 25px;
    
  }
  
`;
const LinksContainer = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0 15px 0;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 20px;
  transition: all 0.2s ease-in-out;
  position: relative;
  color: #5b5c66;
  font-weight: lighter;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 5px;
  border-radius: 4px;
  padding: 5px;
  font-size: 18px;
  span {
    font-size: 18px;
    font-weight: bold;
    color: #c863be;
  }

  &:hover {
    color: white;
    transition: all 0.3s linear;
    span {
      color: #c863be;
    }
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  list-style: none;

  a {
    color: #5b5c66;
    cursor: pointer;
    font-size: 30px;
    margin: 15px;
    &:hover {
      color: #f37a53;
      transition: all 0.3s linear;
      transform: scale(1.5);
    }
    @media screen and (max-width: 1366px) {
    font-size: 22px;
  }
  }
`;
const SocialLinks = styled.a`
  margin: 0 0.5rem;
  text-decoration: none;
`;

const CvLink = styled.a`
  margin: 0 20px;
  transition: all 0.2s ease-in-out;
  position: relative;
  color: #5b5c66;
  font-weight: lighter;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 5px;
  border-radius: 4px;
  padding: 5px;
  font-size: 18px;
  span {
    font-size: 18px;
    font-weight: bold;
    color: #c863be;
  }

  &:hover {
    color: white;
    transition: all 0.3s linear;
    span {
      color: #c863be;
    }
  }
`;

export default NavBar;
