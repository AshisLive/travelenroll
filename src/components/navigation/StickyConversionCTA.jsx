import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const StickyConversionCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection?.offsetTop + heroSection?.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        setIsVisible(scrollPosition > heroBottom + 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToForm = () => {
    const formSection = document.getElementById('get-started');
    if (formSection) {
      const elementPosition = formSection?.offsetTop - 80;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-150 p-4 bg-card border-t border-border shadow-warm-xl animate-slide-in-left">
      <Button
        variant="default"
        fullWidth
        size="lg"
        iconName="ArrowRight"
        iconPosition="right"
        onClick={scrollToForm}
        className="shadow-warm-lg"
      >
        Book Your Adventure
      </Button>
    </div>
  );
};

export default StickyConversionCTA;