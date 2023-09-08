import { useEffect } from "react";
import ReactHelmet from "react-helmet";
import SEO from "../shared/seo";
import ProfileInfo from "../shared/profile";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currSEO = SEO.find((item) => item.page === "projects");
  return (
    <>
      <ReactHelmet>
        <title>{ProfileInfo.main.title}</title>
        <meta name="description" content={currSEO?.description} />
        <meta name="keywords" content={currSEO?.keywords.join(", ")} />
      </ReactHelmet>
    </>
  );
}
