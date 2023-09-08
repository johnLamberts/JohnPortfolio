import { useEffect, useState } from "react";
import SEO from "../shared/seo";
import ReactHelmet from "react-helmet";
import ProfileInfo from "../shared/profile";
import Navbar from "../components/Navbar";
import { styled } from "styled-components";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { code } from "../assets/doodles";
import AllProjects from "../features/Projects/AllProjects";
import Footer from "../components/Footer";

export default function Homepage() {
  const [stayLogo, setStayLogo] = useState(false);

  const [logoSize, setLogoSize] = useState(80);

  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scroll = Math.round(window.pageYOffset);

      const newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((seo) => seo.page === "home");

  const LogoStyled = styled.div`
    display: "flex";
    position: ${() => (stayLogo ? "fixed" : "relative")};
    top: ${() => (stayLogo ? "3vh" : "auto")};
    z-index: 999;
    border: ${() => (stayLogo ? "1px solid white" : "none")};
    border-radius: ${() => (stayLogo ? "50%" : "none")};
    box-shadow: ${() =>
      stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none"};
  `;


  const StyledHomepage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
  `;

  const StyledFirstAreaLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StyledHomepageIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  `;

  const SocialIcons = styled(FontAwesomeIcon)`
    padding-right: 20px;
    font-size: 25px;
    transition: color 0.2s ease-in-out;
    color: var(--secondary-color);

    &:hover {
      color: var(--primary-color);
    }
  `;

  const StyleHomeProjects = styled.div`
    flex-basis: 300px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;
  return (
    <>
      <ReactHelmet>
        <title>{ProfileInfo.main.title}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </ReactHelmet>

      <div className="page-content">
        <Navbar />
        <div className="content-wrapper">
          <StyledHomepage className="homepage-logo-container">
            <LogoStyled>
              <Logo width={logoSize} link={false} />
            </LogoStyled>
          </StyledHomepage>

          <div className="homepage-container" style={{ paddingTop: "25px" }}>
            <div
              className="homepage-first-area"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src={code}
                style={{ position: "relative", top: "-4rem", width: "1.5rem" }}
                alt=""
              />
              <StyledFirstAreaLeft>
                <div
                  className="title homepage-title"
                  style={{ width: "85% !important" }}
                >
                  {ProfileInfo.homepage.title}
                </div>

                <div
                  className="subtitle homepage-subtitle"
                  style={{ width: "85% !important" }}
                >
                  {ProfileInfo.homepage.description}
                </div>
              </StyledFirstAreaLeft>
            </div>

            <StyledHomepageIcons>
              <a
                href={ProfileInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcons
                  icon={faTwitter}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={ProfileInfo.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcons icon={faGithub} className="homepage-social-icon" />
              </a>
              <a
                href={ProfileInfo.socials.stackoverflow}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcons
                  icon={faStackOverflow}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={ProfileInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcons
                  icon={faInstagram}
                  className="homepage-social-icon"
                />
              </a>
              {/*     <a
                  href={`mailto:${INFO.main.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="homepage-social-icon"
                  />
                </a> */}
            </StyledHomepageIcons>

            <StyleHomeProjects>
              <AllProjects />
            </StyleHomeProjects>

            <div className="homepage-after-title">
              <div className="homepage-articles">
                {/* {myArticles.map((article, index) => (
                    <div
                      className="homepage-article"
                      key={(index + 1).toString()}
                    >
                      <Article
                        key={(index + 1).toString()}
                        date={article().date}
                        title={article().title}
                        description={article().description}
                        link={"/article/" + (index + 1)}
                      />
                    </div>
                  ))} */}
              </div>

              <div className="homepage-works">{/* <Works /> */}</div>
            </div>

            <div className="page-footer">
              {" "}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
