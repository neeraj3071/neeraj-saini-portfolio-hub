import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a href={config.contact.resumeUrl} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-play" data-cursor="disable">
          Resume →
        </a>

        <Link to="/myworks" className="cta-btn cta-btn-hire" data-cursor="disable">
          All Works →
        </Link>
        
        <a
          href={config.contact.linkedin}
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
