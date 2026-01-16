import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from '../ui/Button';

const AnchorNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const sections = [
        { id: 'home', label: 'Home', offset: 0 },
        { id: 'why-us', label: 'Why Us', offset: 80 },
        { id: 'how-it-works', label: 'How It Works', offset: 80 },
        { id: 'packages', label: 'Packages', offset: 80 },
        { id: 'reviews', label: 'Reviews', offset: 80 },
        { id: 'get-started', label: 'Get Started', offset: 80 },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const scrollPosition = window.scrollY + 100;

            for (let i = sections?.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections?.[i]?.id);
                if (section && section?.offsetTop <= scrollPosition) {
                    setActiveSection(sections?.[i]?.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId, offset) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element?.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-100 transition-smooth ${isScrolled
                        ? 'bg-card shadow-warm-md'
                        : 'bg-background'
                    }`}
            >
                <nav className="container-safe">
                    <div className="flex items-center justify-between h-20">
                        <button
                            onClick={() => scrollToSection('home', 0)}
                            className="flex items-center space-x-3 focus-ring rounded-lg transition-smooth hover:opacity-80"
                            aria-label="BharatYatra Home"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Icon name="Compass" size={28} color="var(--color-primary)" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-heading font-bold text-foreground">
                                BharatYatra
                            </span>
                        </button>

                        <div className="hidden md:flex items-center space-x-1">
                            {sections?.map((section) => (
                                <button
                                    key={section?.id}
                                    onClick={() => scrollToSection(section?.id, section?.offset)}
                                    className={`px-4 py-2 rounded-lg font-caption font-medium transition-smooth ${activeSection === section?.id
                                            ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        }`}
                                    aria-current={activeSection === section?.id ? 'page' : undefined}
                                >
                                    {section?.label}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth focus-ring"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                        >
                            <Icon
                                name={isMenuOpen ? 'X' : 'Menu'}
                                size={24}
                                color="var(--color-foreground)"
                            />
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`fixed inset-0 bg-background z-200 md:hidden transition-smooth ${isMenuOpen
                        ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between h-20 px-4 border-b border-border">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Icon name="Compass" size={28} color="var(--color-primary)" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-heading font-bold text-foreground">
                                BharatYatra
                            </span>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-muted transition-smooth focus-ring"
                            aria-label="Close menu"
                        >
                            <Icon name="X" size={24} color="var(--color-foreground)" />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-6 px-4">
                        <ul className="space-y-2">
                            {sections?.map((section, index) => (
                                <li
                                    key={section?.id}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    className="animate-fade-in"
                                >
                                    <button
                                        onClick={() => scrollToSection(section?.id, section?.offset)}
                                        className={`w-full text-left px-6 py-4 rounded-xl font-caption font-medium transition-smooth ${activeSection === section?.id
                                                ? 'text-primary bg-primary/10 shadow-warm'
                                                : 'text-foreground hover:bg-muted'
                                            }`}
                                        aria-current={activeSection === section?.id ? 'page' : undefined}
                                    >
                                        {section?.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="p-4 border-t border-border">
                        <Button
                            variant="default"
                            fullWidth
                            iconName="MessageCircle"
                            iconPosition="left"
                            onClick={() => {
                                scrollToSection('get-started', 80);
                                setIsMenuOpen(false);
                            }}
                        >
                            Start Your Journey
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnchorNavigation;