import { NavLink } from "react-router-dom";
import styled from "styled-components";

const lcS = {
  flexBasis: "50%",
};

const StyledFooter = styled.div`
  display: flex;
  padding-top: 30px;
  margin-top: 50px;
  padding-bottom: 25px;
  align-items: center;
`;

const StyledFooterNav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;

const StyledFooterNavItem = styled.li`
  font-weight: bold;
  font-size: 80%;
`;

const FooterNavLinks = styled(NavLink)`
  text-decoration: none;
  color: var(--secondary-color);
`;

const FooterNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export default function Footer() {
  return (
    <StyledFooter>
      <div style={lcS}>
        <StyledFooterNav>
          {FooterNav.map((item, index) => (
            <StyledFooterNavItem key={index}>
              <FooterNavLinks to={item.path}>{item.name}</FooterNavLinks>
            </StyledFooterNavItem>
          ))}
        </StyledFooterNav>
      </div>
      <div>John Lambert P. Asis</div>
    </StyledFooter>
  );
}
