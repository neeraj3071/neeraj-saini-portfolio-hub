import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const titleParts = config.developer.title.split(" ");
  const titleFirstLine = titleParts.slice(0, 1).join(" ") || config.developer.title;
  const titleSecondLine = titleParts.slice(1).join(" ") || config.developer.title;

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{config.hero.eyebrow}</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <span className="landing-title-line">{titleFirstLine}</span>
              <span className="landing-title-line landing-title-line-secondary">{titleSecondLine}</span>
            </h2>
            <p className="landing-experience">{config.hero.experienceBadge}</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
