import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import AnchorNavigation from '../../components/navigation/AnchorNavigation';
import StickyConversionCTA from '../../components/navigation/StickyConversionCTA';
import ProgressIndicator from '../../components/navigation/ProgressIndicator';
import ThemeToggle from '../../components/ThemeToggle';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import HowItWorksSection from './components/HowItWorksSection';
import PackagesSection from './components/PackagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const TravelLeadGeneration = () => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        if (formRef?.current) {
            const elementPosition = formRef?.current?.offsetTop - 80;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>BharatYatra - Discover Incredible India | Curated Travel Experiences</title>
                <link rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='none' stroke='%23e67e22' stroke-width='6'/><g transform='rotate(45 50 50)'><path d='M50 15 L62 50 L50 85 L38 50 Z' fill='%23e67e22'/></g></svg>" />
                <meta
                    name="description"
                    content="Explore India's rich heritage and breathtaking landscapes with BharatYatra. From Kerala backwaters to Himalayan peaks, we craft unforgettable journeys across Goa, Rajasthan, Ladakh, Kashmir, and more. Get personalized itineraries on WhatsApp."
                />
                <meta
                    name="keywords"
                    content="India travel, Kerala backwaters, Ladakh adventure, Rajasthan heritage, Goa beaches, Kashmir tour, Varanasi spiritual journey, Golden Triangle, Himachal Pradesh, Indian destinations, travel packages India"
                />
                <meta property="og:title" content="BharatYatra - Discover Incredible India" />
                <meta
                    property="og:description"
                    content="Curated travel experiences across India's most iconic destinations. Get personalized itineraries within 24 hours."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://bharatyatra.com/travel-lead-generation" />
            </Helmet>

            <div className="min-h-screen bg-background dark:bg-slate-900 smooth-scroll transition-colors duration-300">
                <ThemeToggle />
                <AnchorNavigation />
                <ProgressIndicator />
                <StickyConversionCTA />

                <main>
                    <HeroSection onCTAClick={scrollToForm} />
                    <WhyUsSection />
                    <HowItWorksSection />
                    <PackagesSection onBookNow={scrollToForm} />
                    <TestimonialsSection />
                    <div ref={formRef}>
                        <LeadForm />
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default TravelLeadGeneration;