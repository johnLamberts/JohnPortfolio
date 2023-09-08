import { useEffect } from "react";
import styled from "styled-components";
import ProfileInfo from "../shared/profile";

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding-top: 120px;
`;

const StyledLayoutAbout = styled.div`
  display: flex;
  flex-direction: "row";

  @media (max-width: 700px) {
    & {
      flex-direction: column;
    }
  }
`;
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StyledAboutContainer>
        <div style={{ display: "flex" }}>
          <div className="about-right-side">
            <div className="title about-title">{ProfileInfo.about.title}</div>
            <StyledLayoutAbout className="" style={{}}>
              <div>
                <div className="subtitle about-subtitle">
                  {ProfileInfo.about.description}
                </div>
                <div className="subtitle about-subtitle">
                  {/* {ProfileInfo.about.description} */}
                  1. How did I pursue my career as a developer and being
                  responsible man?
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    By simply having an Inspiration, Motivation, and Curiosity.
                  </span>
                  <br />
                  2. How did I end up as an IT Student?{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Before I became an aspiring developer, many things happened
                    to my life. Despite being rejected from the course that you
                    love and dreams for many years. I decided to gamble my
                    future here in the Tech-Industry and it was exciting and
                    enjoyable but hard and painstaking to become REAL DEVELOPER.
                  </span>
                  <br />
                  3. Formula in Life?{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    Life is full of suprises and obstables, but once you endured
                    it. That will be your greatest equipments!
                  </span>
                </div>
              </div>

              {/* <img width="100%" src={html} />
              <img width="100%" src={code} /> */}
            </StyledLayoutAbout>
            <br />
            <hr />
            <br />
          </div>
        </div>
      </StyledAboutContainer>
    </>
  );
}
