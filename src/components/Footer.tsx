import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Let's Connect</h3>
          <p>Open to new opportunities and collaborations</p>
        </div>

        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/tiago-mendaro/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:tiagomendaro@gmail.com" 
            className="footer-link"
            aria-label="Email"
          >
            <FaEnvelope />
            <span>tiagomendaro@gmail.com</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tiago Mendaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;