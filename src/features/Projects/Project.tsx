import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledProject = styled.div`
  mix-blend-mode: normal;
  border-radius: 20px;
  opacity: 0.8;
  height: 100%;

  &:hover {
    background-color: #fafafa;
    opacity: 1;
    transition: background-color 0.3s ease-in-out;
  }
`;

const StyledNavLinks = styled(NavLink)`
  text-decoration: none;
`;

const StyledProjectTitle = styled.div`
  font-family: var(--secondary-font);
  color: var(--primary-color);
  font-size: 16px;
  padding-top: 15px;
  margin-bottom: 1em;
  font-weight: 700;
`;
export default function Project(props: {
  logo: string;
  title: string;
  description: string;
  linkText: unknown;
  link: string;
}) {
  const { logo, title, description, linkText, link } = props;
  return (
    <>
      <StyledProject>
        <StyledNavLinks to={link}>
          <div style={{ padding: "30px" }}>
            <div style={{ width: "30px" }}>
              <img src={logo} alt="" style={{ width: "100%" }} />
            </div>

            <StyledProjectTitle>{title}</StyledProjectTitle>
            <div style={{ color: "var(--secondary-color);" }}>
              {description}
            </div>
          </div>
        </StyledNavLinks>
      </StyledProject>
    </>
  );
}
