import "./styles/Certifications.css";
import { config } from "../config";

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>
          Professional <span>&</span>
          <br /> certifications
        </h2>
        
        <div className="certifications-issuers">
          {config.certifications.map((issuer, issuerIndex) => (
            <div key={issuerIndex} className="issuer-group">
              <h3 className="issuer-name">{issuer.issuer}</h3>
              
              <div className="credentials-list">
                {issuer.credentials.map((credential, credIndex) => (
                  <div key={credIndex} className="credential-card">
                    <div className="credential-header">
                      <h4 className="credential-title">{credential.title}</h4>
                      <span className="credential-date">{credential.issuedDate}</span>
                    </div>
                    
                    {(credential as any).expiresDate && (
                      <p className="credential-expiry">
                        Expires: {(credential as any).expiresDate}
                      </p>
                    )}
                    
                    <p className="credential-id">
                      ID: <span>{credential.credentialId}</span>
                    </p>
                    
                    {credential.skills && credential.skills.length > 0 && (
                      <div className="credential-skills">
                        <strong>Skills:</strong>{" "}
                        {credential.skills.join(", ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
