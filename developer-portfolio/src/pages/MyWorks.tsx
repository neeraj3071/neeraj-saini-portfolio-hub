import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

type MyWorksProject = (typeof config.projects)[number] & {
  bullets?: string[];
};

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const workProject = project as MyWorksProject;
          const bulletPoints = workProject.highlights
            ? workProject.highlights.split("·").map((point) => point.trim()).filter(Boolean)
            : workProject.bullets ?? [];

          return (
          <div className="myworks-card" key={workProject.id} data-cursor="disable">
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <img src={workProject.image} alt={workProject.title} />
            </div>
            <div className="myworks-card-info">
              <h3>{workProject.title}</h3>
              <p className="myworks-card-category">{workProject.category}</p>
              <p className="myworks-card-description">{workProject.description}</p>
              <p className="myworks-card-tech">{workProject.technologies}</p>
              {bulletPoints.length > 0 && (
                <ul className="myworks-card-bullets">
                  {bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "18px" }}>
                {workProject.liveDemo && (
                  <a href={workProject.liveDemo} target="_blank" rel="noopener noreferrer" data-cursor="disable" aria-label={`Open ${workProject.title} live demo`} style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                    Live
                  </a>
                )}
                {workProject.sourceCode && (
                  <a href={workProject.sourceCode} target="_blank" rel="noopener noreferrer" data-cursor="disable" aria-label={`Open ${workProject.title} source code`} style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                    Code
                  </a>
                )}
                {workProject.presentation && (
                  <a href={workProject.presentation} target="_blank" rel="noopener noreferrer" data-cursor="disable" aria-label={`Open ${workProject.title} presentation`} style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                    Video
                  </a>
                )}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
