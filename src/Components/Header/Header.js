import React, { useState, useRef, useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa";

import styled from "styled-components";
import { links, social } from "./headerData";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavHeader>
          <Logo>
            <FaStarOfLife id="logo" /> KITSUNNE
          </Logo>
        </NavHeader>
        <LinksContainer>
          <LinksList>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Links href={url}>{text}</Links>
                </li>
              );
            })}
          </LinksList>
        </LinksContainer>
        <SocialIcons>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <SocialLinks href={url}>{icon}</SocialLinks>
              </li>
            );
          })}
        </SocialIcons>
      </NavWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  grid-area: header;
  background-color: rgb(20, 20, 20);
  border: 1px solid black;
  box-shadow: var(--light-shadow);
`;

const NavWrapper = styled.nav`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const Logo = styled.h1`
  font-size: 30px;
  color: white;
  #logo {
    color: #16c79e;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #00ff00, 0 0 80px #00ff00, 0 0 90px #00ff00, 0 0 100px #00ff00,
      0 0 150px #00ff00;
    width: 15px;
  }
`;

const LinksContainer = styled.div`
  display: block;
`;
const LinksList = styled.ul`
  list-style: none;
  display: flex;
`;
const SocialIcons = styled.ul`
  display: flex;
  list-style: none;

  a {
    color: white;
    cursor: pointer;
    font-size: 30px;
    margin: 15px;
    color: white;
  }
  &:hover a {
    color: pink;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #ff00de, 0 0 80px #ff00de, 0 0 90px #ff00de, 0 0 100px #ff00de,
      0 0 150px #ff00de;
  }
`;
const Links = styled.a`
  color: white;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 5px;
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background: #16c79e;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #00ff00, 0 0 80px #00ff00, 0 0 90px #00ff00, 0 0 100px #00ff00,
      0 0 150px #00ff00;
    color: white;
  }
`;
const SocialLinks = styled.a`
  margin: 0 0.5rem;s
  text-decoration: none;
`;

export default Header;
