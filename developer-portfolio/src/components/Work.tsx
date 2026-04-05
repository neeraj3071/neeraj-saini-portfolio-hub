import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

type WorkProject = (typeof config.projects)[number] & {
  bullets?: string[];
};

const Work = () => {
  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {config.projects.slice(0, 5).map((project, index) => {
            const workProject = project as WorkProject;
            const bulletPoints = workProject.highlights
              ? workProject.highlights.split("·").map((point) => point.trim()).filter(Boolean)
              : workProject.bullets ?? [];

            return (
            <div className="work-box" key={workProject.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{workProject.title}</h4>
                    <p>{workProject.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{workProject.technologies}</p>
                {bulletPoints.length > 0 && (
                  <ul className="work-bullets">
                    {bulletPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                <div className="work-links" style={{ display: "flex", gap: "10px", marginTop: "16px", flexWrap: "wrap" }}>
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
              <WorkImage image={workProject.image} alt={workProject.title} />
            </div>
            );
          })}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
