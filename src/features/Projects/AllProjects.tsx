import styled from "styled-components";
import ProfileInfo from "../../shared/profile";
import Project from "./Project";

const StyledProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: -35px;
  margin-right: -35px;
`;

const StyledProjects = styled.div`
  width: calc(100% / 3);
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: calc(100% / 2);
  }
`;

export default function AllProjects() {
  return (
    <StyledProjectContainer>
      {ProfileInfo.projects.map((project, index) => (
        <StyledProjects key={index}>
          <Project {...project} />
        </StyledProjects>
      ))}
    </StyledProjectContainer>
  );
}
