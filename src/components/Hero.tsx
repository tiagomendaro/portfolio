import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-header"
        >
          <h2 className="subtitle">Frontend Developer</h2>
          <h1>Tiago Mendaro</h1>
          <p className="location">Buenos Aires, Argentina</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hero-avatar"
        >
          <img src="/images/avatar.png" alt="Tiago Mendaro" className="avatar-img" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hero-bio"
        >
          <p className="bio-text">
            Experienced Frontend Developer specializing in building modern, scalable web applications 
            for international clients. Skilled in React, TypeScript, Next.js, and Firebase. 
            Also experienced in Power Platform development with PowerApps, Power Automate, and SharePoint.
          </p>
          <div className="cv-buttons">
            <a 
              href="/cv/TiagoMendaro_Web.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-link"
            >
              Web Development CV
            </a>
            <a 
              href="/cv/TiagoMendaro_PowerPlatform.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-link secondary"
            >
              Power Platform CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hero-buttons"
        >
          <button onClick={() => scrollToSection('repstly')} className="project-btn">
            Repstly
          </button>
          <button onClick={() => scrollToSection('tracs')} className="project-btn">
            TRACs
          </button>
          <button onClick={() => scrollToSection('factureando')} className="project-btn">
            Factureando
          </button>
        </motion.div>
      </div>

      <div className="hero-bg">
        <div className="grid-lines"></div>
      </div>
    </section>
  );
};

export default Hero;