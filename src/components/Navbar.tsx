import React from "react";
import { NavLink } from "react-router-dom";

import { styled } from "styled-components";

const NavContainerStyled = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  z-index: 999;
`;

const NavBackgroundStyled = styled.div`
  width: 380px;
  height: 40px;
  padding-left: 0%;
  padding-right: 0%;
  background: #fff;
  border-radius: 40px;
  -webkit-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 1);
  /* filter: drop-shadow(3px 3px rgba(0, 0, 0, 0.4)); */
  filter: contrast(1px);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  margin-left: -16px;
  margin-right: 20px;
  margin-top: 11px;
`;

const NavItem = styled.li`
  font-weight: bold;
  font-size: 80%;
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: var(--primary-color);
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--link-color) !important;
    transition: color 0.3s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <React.Fragment>
      <NavContainerStyled>
        <NavStyled>
          <NavBackgroundStyled>
            <NavList>
              <NavItem>
                <NavLinks to="/">
                  <span>Home</span>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/articles">Articles</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
            </NavList>
          </NavBackgroundStyled>
        </NavStyled>
      </NavContainerStyled>
    </React.Fragment>
  );
};

export default Navbar;
