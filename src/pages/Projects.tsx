import { useEffect } from "react";
import styled from "styled-components";
import AllProjects from "../features/Projects/AllProjects";

const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding-top: 120px;

  @media (max-width: 600px) {
    & {
      padding-top: 60px;
    }

    .projects-project {
      width: calc(100% / 2);
    }
  }
`;

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const currSEO = SEO.find((item) => item.page === "projects");
  return (
    <>
      <StyledProjectContainer>
        <div className="title projects-title">
          Projects that made me who I am today.
        </div>

        <div className="projects-list">
          <AllProjects />
        </div>
      </StyledProjectContainer>
    </>
  );
}
