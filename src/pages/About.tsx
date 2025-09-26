import { FaUser, FaGraduationCap, FaLaptopCode, FaBriefcase, FaStar } from "react-icons/fa";

export default function About() {
  const technicalSkills = [
    {
      category: "Languages",
      items: ["C", "SQL", "PHP", "HTML", "CSS", "JAVA"]
    },
    {
      category: "Frameworks",
      items: ["React", "Node.js", "Express.js"]
    },
    {
      category: "Tools",
      items: [
        "VS Code",
        "Jira",
        "Figma",
        "MS Office",
        "Google Workspace",
        "Canva",
        "Adobe Illustrator"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Fast Learning",
        "Problem Solving",
        "Team Player",
        "Communication",
        "Analytical skills"
      ]
    },
    {
      category: "Interests",
      items: ["Frontend Development", "UI-UX Design", "Product Owner", "Business Analyst"]
    }
  ];

  const experiences = [
    {
      role: "Team Coordinator and Student Mediator",
      company: "Aflaguide Tutoring Platform",
      period: "Nov 2022 – Present",
      description:
        "Acted as the main coordinator for the web development team, streamlining communication between members and overseeing task allocation to maintain project efficiency.",
      icon: <FaBriefcase className="text-primary" />
    },
    {
      role: "Appointment Setter",
      company: "DWA Sales UK",
      period: "2025 – Present",
      description:
        "Responsible for setting appointments and managing client communications.",
      icon: <FaBriefcase className="text-primary" />
    }
  ];

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="p-4 p-lg-5 bg-white rounded-4 shadow-lg">
              
              {/* Header Section */}
              <div className="text-center mb-5">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                     style={{width: '100px', height: '100px'}}>
                  <FaUser className="text-primary" size={40} />
                </div>
                <h2 className="display-5 fw-bold text-dark mb-3">About me</h2>
                <p className="lead text-muted mb-4">
                  Information Systems student at UCSC | Project Management | UI/UX Design | Software Quality Assurance
                </p>
                <div className="border-bottom border-2 border-primary mx-auto" style={{width: '80px'}}></div>
              </div>

              <div className="row g-4">
                {/* Left Column - Background, Education & Experience */}
                <div className="col-lg-8">
                  {/* Background Card */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white p-3 rounded-circle me-3">
                          <FaUser size={20} />
                        </div>
                        <h5 className="card-title fw-bold mb-0 text-dark">Background</h5>
                      </div>
                      <p className="text-muted mb-3">
                      I'm passionate about creating innovative web solutions and currently pursuing my degree in Information Systems. I genuinely enjoy coding and building projects from start to finish, with a special focus on front-end development and crafting seamless user experiences.


                      </p>
                      <p className="text-muted mb-0">
                      Beyond programming, I love exploring new technologies, diving into quality assurance, and contributing to project management and UI/UX design. I thrive when working with a motivated team and enjoy collaborating in environments where creativity and teamwork drive results. Outside of tech, I'm an active sports enthusiast, which keeps me energized and disciplined in everything I do.
                      </p>
                    </div>
                  </div>

                  {/* Education Card */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white p-3 rounded-circle me-3">
                          <FaGraduationCap size={20} />
                        </div>
                        <h5 className="card-title fw-bold mb-0 text-dark">Education</h5>
                      </div>
                      <div className="d-flex align-items-center p-3 bg-light rounded-3">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                          <FaGraduationCap className="text-primary" size={24} />
                        </div>
                        <div>
                          <strong className="d-block fs-6">BSc. Information Systems</strong>
                          <span className="text-muted">University of Colombo School of Computing • 2023 – Present</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white p-3 rounded-circle me-3">
                          <FaBriefcase size={20} />
                        </div>
                        <h5 className="card-title fw-bold mb-0 text-dark">Professional Experience</h5>
                      </div>
                      
                      <div className="d-flex flex-column gap-3">
                        {experiences.map((exp, index) => (
                          <div key={index} className="p-3 bg-light rounded-3 border-start border-3 border-primary">
                            <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
                              <div className="mb-2">
                                <h6 className="fw-bold mb-1 text-dark">{exp.role}</h6>
                                <span className="text-primary fw-medium">{exp.company}</span>
                              </div>
                              <span className="badge bg-primary text-white px-3 py-2">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-muted mb-0">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                

                {/* Right Column - Skills */}
                <div className="col-lg-4">
                  {/* Skills Card */}
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="bg-primary text-white p-3 rounded-circle me-3">
                          <FaLaptopCode size={20} />
                        </div>
                        <h5 className="card-title fw-bold mb-0 text-dark">Skills and Competencies</h5>
                      </div>

                      <div className="d-flex flex-column gap-3">
                        {technicalSkills.map((skillGroup, index) => (
                          <div key={index} className="p-3 bg-light rounded-3">
                            <h6 className="fw-bold text-primary mb-2 d-flex align-items-center">
                              <FaStar className="me-2" size={14} />
                              {skillGroup.category}
                            </h6>
                            <div className="d-flex flex-wrap gap-2">
                              {skillGroup.items.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="badge bg-white text-dark border px-2 py-1 small"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Quote */}
              <div className="text-center mt-5 pt-4 border-top">
                <p className="text-muted fst-italic mb-0 fs-6">
                  "Passionate about creating digital solutions that make a difference"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}