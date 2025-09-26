import { useState } from 'react';
import { FaExternalLinkAlt, FaFigma, FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  period?: string;
  category: "UI/UX Design" | "Fullstack" | "Frontend" | "Backend";
  github?: string;
  type?: "design" | "development";
  screenshot?: string; 
}

function Projects() {
  const projects: Project[] = [
    { 
      title: "SafeHer - Women's support and empowerment app", 
      description: "As part of a group project, I led the design side by creating mobile app UI's aimed at improving women's safety and building community support.",
      link: "https://www.figma.com/design/Ds6YRhqSPkt2LaQYo04E3d/Sankavi-Thayaparan-s-team-library?node-id=0-1&t=D9pRb96YOGvUrC5S-1",
      technologies: ["Figma", "Wireframing", "Prototyping", "User Research", "Design System"],
      period: "2024",
      category: "UI/UX Design",
      type: "design",
      screenshot: "/screenshots/Saferher.png"
    },
    { 
      title: "DriveBot - Smart car management system", 
      description: "Collaborated with my team to design dashboards and mobile interfaces for a car maintenance and booking system. I applied usability principles, worked on consistent typography and color schemes, and contributed to creating an intuitive experience for users.",
      link: "https://www.figma.com/design/Xo1djGOdbRn80T2IkYYJMN/DriveBot?node-id=0-1&t=zI7KCJv3eCbYKTQd-1",
      technologies: ["Figma", "UI Design", "Dashboard Design", "Usability Testing"],
      period: "2024",
      category: "UI/UX Design",
      type: "design",
      screenshot: "/screenshots/drivebot.png"
    },
    { 
      title: "EcoTrack - Waste management system", 
      description: "Designed a web application with my team to promote eco-friendly waste disposal and tracking, helping users request pickups, find recycling points, and monitor their environmental impact. Created user flows, wireframes, and interactive prototypes to ensure an accessible and engaging user experience.",
      link: "https://www.figma.com/design/3nHgNarPXQSxxrm9oman4C/EcoTrack?node-id=0-1&t=iqQHi5WPHUOrseQ6-1",
      technologies: ["Figma", "Web Design", "User Flows", "Interactive Prototypes"],
      period: "2024",
      category: "UI/UX Design",
      type: "design",
      screenshot: "/screenshots/ecotrack.png"
    },
    { 
      title: "BusHubLK - SLTB Transport management system", 
      description: "I contributed to frontend dashboards and backend APIs for the web application, ensuring smooth integration with PostgreSQL databases. Applied QA practices including manual testing.",
      link: "https://github.com/MurshidAkram/BusHubLK",
      technologies: ["React", "Tailwindcss", "Node.js", "Express", "PostgreSQL", "TypeScript"],
      period: "Ongoing",
      category: "Fullstack",
      type: "development",
      screenshot: "screenshots/BusHubLK.png"
    },
    { 
      title: "EduBurd - Learning management system", 
      description: "As the second year academic project we created a web-based LMS connecting students, teachers, parents, and admins. Features include subject-based class requests, CV-based teacher registration, parent dashboards, and payment integration. I contributed to both frontend and backend development, implementing key features and ensuring seamless user experience.",
      link: "https://github.com/Chathu2233/eduburd",
      technologies: ["PHP", "HTML", "CSS", "MySQL", "phpMailer", "Stripe"],
      period: "2024",
      category: "Fullstack",
      type: "development",
      screenshot: "screenshots/EduBurd.png"
    },
    { 
      title: "CarePaws - Pet care management system", 
      description: "Developed a web application with my team to manage pet care services, including pet registration, appointment scheduling for our course module web development. I implemented CRUD operations using PHP and MySQL.",
      link: "https://github.com/Malith39/Care-Paws",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      period: "2023",
      category: "Fullstack", 
      type: "development",
      screenshot: "screenshots/CarePaws.png"
    },
    { 
      title: "Medicure - Doctor appointment system", 
      description: "I managed to create a web-based online doctor appointment booking system allowing patients to book appointments with doctors across multiple specialties. Dynamic filtering system and 7-day booking window.",
      link: "https://github.com/Sajidha1/medicure",
      technologies: ["React", "Node.js", "Express", "Tailwindcss", "TypeScript"],
      period: "Ongoing",
      category: "Fullstack",
      type: "development",
      screenshot: "screenshots/Medicure.png"
    },
    { 
      title: "SwiftLogistics - Logistics platform", 
      description: "For the course module middleware architecture as a team we developed a scalable, event-driven logistics platform using microservices architecture and Apache Kafka for real-time data streaming. I Worked on frontend development and team coordination.",
      link: "https://github.com/sajeeahrasmi/swiftlogistics",
      technologies: ["React", "Node.js", "Express", "Tailwindcss", "TypeScript", "PostgreSQL", "Apache Kafka"],
      period: "2025",
      category: "Fullstack",
      type: "development",
      screenshot: "screenshots/SwiftLogistics.png"
    }
  ];

  const categories = ["Others", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("Others");

  const filteredProjects = projects.filter(project =>
    activeCategory === "UI/UX Design" ? project.category === "UI/UX Design" : project.category !== "UI/UX Design"
  );

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            <div className="p-4 p-lg-5 bg-white rounded-4 shadow-lg">
              
              {/* Header Section - Consistent with other pages */}
              <div className="text-center mb-5">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                     style={{width: '100px', height: '100px'}}>
                  <FaGithub className="text-primary" size={40} />
                </div>
                <h2 className="display-5 fw-bold text-dark mb-3">My Projects</h2>
                <p className="lead text-muted mb-4">A showcase of my development and design work</p>
                <div className="border-bottom border-2 border-primary mx-auto" style={{width: '80px'}}></div>
              
                {/* Category Filter */}
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4 py-2 fw-medium`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="row g-4">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="card border-0 h-100 shadow-sm hover-lift transition-all">
                      <div className="card-body p-4 d-flex flex-column h-100">
                        
                        {/* Header with category and period */}
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <span className={`badge ${project.type === 'design' ? 'bg-warning text-dark' : 'bg-primary'} rounded-pill px-3 py-2`}>
                            {project.category}
                          </span>
                          <span className="text-muted small">{project.period}</span>
                        </div>
                        
                        {/* Project Title */}
                        <h5 className="card-title fw-bold text-dark mb-3">{project.title}</h5>
                        
                        {/* Project Description */}
                        <p className="card-text text-muted flex-grow-1">{project.description}</p>
                        
                        {/* Technologies */}
                        <div className="mb-3">
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="badge bg-light text-dark border small px-2 py-1">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Screenshot for development projects */}
                        {project.type === "development" && project.screenshot && (
                          <div className="mb-3">
                            <img 
                              src={project.screenshot} 
                              alt={project.title} 
                              className="img-fluid rounded-3 border" 
                              style={{ width: "100%", height: "auto", maxHeight: "200px", objectFit: "cover" }} 
                            />
                          </div>
                        )}
                        
                        {/* Action Button */}
                        <div className="mt-auto">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                          >
                            {project.type === 'design' ? (
                              <>
                                <FaFigma /> View Figma Design
                              </>
                            ) : (
                              <>
                                <FaGithub /> View Project
                              </>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-5">
                  <p className="text-muted lead">No projects found in this category.</p>
                </div>
              )}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;