import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';

interface CarouselProps {
  images: string[];
  alt: string;
}

const Carousel = ({ images, alt }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous">
          ‹
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="carousel-slide"
          >
            <img 
              src={images[currentIndex]} 
              alt={`${alt} - Screenshot ${currentIndex + 1}`}
              className="carousel-image"
            />
          </motion.div>
        </AnimatePresence>

        <button className="carousel-btn next" onClick={goToNext} aria-label="Next">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;