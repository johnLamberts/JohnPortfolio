import styled from "styled-components";
import ProfileInfo from "../shared/profile";
import {
  faGithub,
  faInstagram,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 120px;
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

export default function Contact() {
  return (
    <>
      <StyledContact>
        <div className="title contact-title">
          Let's Get in Touch: Ways to Connect with Me
        </div>

        <div className="subtitle contact-subtitle">
          Thank you for your interest in getting in touch with me. I welcome
          your feedback, questions, and suggestions. If you have a specific
          question or comment, please feel free to email me directly at &nbsp;{" "}
          <a href={`mailto:${ProfileInfo.main.email}`}>
            {ProfileInfo.main.email}
          </a>
          . I make an effort to respond to all messages within 24 hours,
          although it may take me longer during busy periods. Alternatively, you
          can use the contact form on my website to get in touch. Simply fill
          out the required fields and I'll get back to you as soon as possible.
        </div>

        <StyledHomepageIcons>
          <a
            href={ProfileInfo.socials.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcons icon={faTwitter} className="homepage-social-icon" />
          </a>
          <a href={ProfileInfo.socials.github} target="_blank" rel="noreferrer">
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
            <SocialIcons icon={faInstagram} className="homepage-social-icon" />
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
      </StyledContact>
    </>
  );
}
