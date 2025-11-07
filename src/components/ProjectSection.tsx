import { motion } from 'framer-motion';
import Carousel from './Carousel';
import './ProjectSection.css';

interface ProjectSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  isReverse?: boolean;
  note?: string;
}

const ProjectSection = ({
  id,
  title,
  subtitle,
  description,
  technologies,
  features,
  images,
  isReverse = false,
  note
}: ProjectSectionProps) => {
  return (
    <section id={id} className={`project-section ${isReverse ? 'reverse' : ''}`}>
      <div className="project-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="project-content"
        >
          <div className="project-header">
            <h2 className="project-title">{title}</h2>
            <p className="project-subtitle">{subtitle}</p>
          </div>

          <p className="project-description">{description}</p>

          {note && (
            <div className="project-note">
              <span className="note-icon">ℹ️</span>
              <p>{note}</p>
            </div>
          )}

          <div className="project-tech">
            <h3>Technologies</h3>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-features">
            <h3>Key Features</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="project-media"
        >
          <Carousel images={images} alt={title} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;