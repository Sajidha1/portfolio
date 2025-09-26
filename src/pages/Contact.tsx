import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-primary" size={24} />,
      title: "Email",
      value: "fsajida742@gmail.com",
      link: "mailto:fsajida742@gmail.com",
      description: "Send me an email"
    },
    {
      icon: <FaLinkedin className="text-primary" size={24} />,
      title: "LinkedIn",
      value: "Sajidha M.S.F",
      link: "https://www.linkedin.com/in/sajidhaS/",
      description: "Connect professionally"
    },
    {
      icon: <FaGithub className="text-primary" size={24} />,
      title: "GitHub",
      value: "Sajidha1",
      link: "https://github.com/Sajidha1",
      description: "View my projects"
    },
    {
      icon: <FaPhone className="text-primary" size={24} />,
      title: "Phone",
      value: "+94761166329",
      link: "tel:+94761166329",
      description: "Available for calls"
    }
  ];

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            
            {/* Header Section */}
            <div className="text-center mb-5">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                   style={{width: '100px', height: '100px'}}>
                <FaPaperPlane className="text-primary" size={40} />
              </div>
              <h2 className="display-5 fw-bold text-dark mb-3">Get in touch</h2>
              <p className="lead text-muted mb-4">
                Let's discuss about the coming opportunities. I'm always open to new challenges.
              </p>
              <div className="border-bottom border-2 border-primary mx-auto" style={{width: '80px'}}></div>
            </div>

            {/* Contact Card */}
            <div className="p-4 p-lg-5 bg-white rounded-4 shadow-lg">
              
              <div className="text-center mb-4">
                <h4 className="fw-bold text-dark mb-3">Contact information</h4>
                <p className="text-muted">
                  Feel free to reach out through any of these channels. I look forward to connecting with you!
                </p>
              </div>
                  
              {/* Two cards per row layout */}
              <div className="row g-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="col-md-6">
                    <a 
                      href={method.link} 
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-decoration-none"
                    >
                      <div className="d-flex align-items-center p-3 bg-light rounded-3 hover-lift transition-all h-100">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                          {method.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-bold text-dark mb-1">{method.title}</h6>
                          <p className="text-primary mb-1 fw-medium">{method.value}</p>
                          <small className="text-muted">{method.description}</small>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Location Info */}
              <div className="text-center mt-4 pt-3 border-top">
                <div className="d-flex align-items-center justify-content-center text-muted">
                  <FaMapMarkerAlt className="me-2 text-primary" />
                  <span>Based in Colombo, Sri Lanka | Open to remote opportunities</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;