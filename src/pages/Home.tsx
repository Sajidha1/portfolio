import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-vh-150 d-flex align-items-center bg-light w-100">
  <div className="container py-5">
    <div className="row g-5 align-items-center">

          
          {/* Left Section: Intro */}
          <div className="col-lg-6">
            <div className="pe-lg-">
              
              <h3 className="display-4 fw-bold mb-4">
                Hello! I'm <span className="text-primary">Sajidha</span>
              </h3>
              <p className="lead text-muted mb-4" style={{ lineHeight: '1.7' }}>
                Passionate Information Systems student at the University of Colombo School of Computing (UCSC) 
                with a strong focus on <strong className="text-dark">Project management</strong><strong className="text-dark"> , UI-UX designing </strong> and <strong className="text-dark">Quality engineering</strong>. 
                I love building full-stack applications and ensure software excellence through meticulous testing methodologies.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                Detail-oriented problem solver driven by continuous learning, aiming to bridge the gap between 
                project execution and software quality assurance.
              </p>
              
              {/* Buttons to other pages */}
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/projects" className="btn btn-primary px-4 py-3 fw-medium rounded-pill shadow-sm">
                  View my projects
                </Link>
                <Link to="/contact" className="btn btn-outline-dark px-4 py-3 fw-medium rounded-pill">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Skills / Highlights */}
          <div className="col-lg-6">
  <div className="p-4 p-lg-5 bg-white rounded-4 shadow-lg h-100 d-flex flex-column">
    <h4 className="fw-bold mb-4 text-center">Core Competencies</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                     </div>
                    <span className="fw-medium">Project management</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    
                    </div>
                    <span className="fw-medium">Quality engineering</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      </div>
                    <span className="fw-medium">Jira and Agile Tools</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    </div>
                    <span className="fw-medium">Manual testing</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    </div>
                    <span className="fw-medium">UI/UX designing</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
 </div>
                    <span className="fw-medium">Agile and Scrum</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    </div>
                    <span className="fw-medium">Problem solving</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      </div>
                    <span className="fw-medium">Time management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}