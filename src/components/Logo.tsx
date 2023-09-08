import { Link } from "react-router-dom";
import ProfileInfo from "../shared/profile";
import { styled } from "styled-components";

type ILogoProps = {
  width: number | string;
  link: boolean;
};

const LogoStyled = styled.img`
  border-radius: 50%;
  display: block;
  margin: 0;
  padding: 0;
`;
export default function Logo(props: ILogoProps) {
  const { width, link } = props;

  if (link === undefined) return link;

  const imageElement = (
    <LogoStyled
      src={ProfileInfo.main.logo}
      alt={ProfileInfo.main.name}
      width={width}
    />
  );
  return <>{link ? <Link to="/">{imageElement}</Link> : imageElement}</>;
}
