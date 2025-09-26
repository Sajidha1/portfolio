import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-dark text-white py-4 mt-5 border-top">
      <div className="container">
        <div className="row align-items-center">

          {/* Left side - Branding */}
          <div className="col-md-6">
            <p className="mb-0 small">
              © {new Date().getFullYear()} <span className="fw-semibold">Sajidha's Portfolio</span>. All rights reserved.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              {footerLinks.map((link) => (
                <li key={link.path} className="list-inline-item mx-2">
                  <Link
                    to={link.path}
                    className="text-white text-decoration-none small fw-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
