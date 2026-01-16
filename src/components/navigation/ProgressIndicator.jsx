import React, { useState, useEffect } from 'react';

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'packages', label: 'Packages' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'get-started', label: 'Get Started' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement?.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScroll = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScroll) * 100;
      setScrollProgress(Math.min(currentProgress, 100));

      const scrollPosition = scrollTop + windowHeight / 2;
      
      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections?.[i]?.id);
        if (section && section?.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element?.offsetTop - 80;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-4">
          {sections?.map((section, index) => (
            <button
              key={section?.id}
              onClick={() => scrollToSection(section?.id)}
              className="group relative"
              aria-label={`Go to ${section?.label}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === activeSection
                    ? 'bg-primary scale-125 shadow-warm-md'
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
                <div className="bg-popover text-popover-foreground px-3 py-2 rounded-lg shadow-warm-lg whitespace-nowrap caption">
                  {section?.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="fixed top-20 left-0 right-0 h-1 bg-muted z-50 lg:hidden">
        <div
          className="h-full bg-primary transition-smooth"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default ProgressIndicator;