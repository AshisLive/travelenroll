import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onCTAClick }) => {
    const heroImages = [
        {
            src: "https://images.unsplash.com/photo-1687027736162-eac17cce3a83?w=800&q=75&fm=webp&fit=crop",
            alt: "Majestic white marble Taj Mahal monument with reflecting pool and lush green gardens under clear blue sky at sunrise in Agra India"
        },
        {
            src: "https://images.unsplash.com/photo-1682489251896-c06dd3b3dea1?w=800&q=75&fm=webp&fit=crop",
            alt: "Ancient stone ghats along sacred Ganges river with traditional boats and pilgrims performing morning rituals in golden sunrise light at Varanasi"
        },
        {
            src: "https://images.unsplash.com/photo-1563731316056-8dacf9a43c68?w=800&q=75&fm=webp&fit=crop",
            alt: "Serene Kerala backwaters with traditional wooden houseboat floating on calm emerald green water surrounded by coconut palm trees and tropical vegetation"
        },
        {
            src: "https://images.unsplash.com/photo-1717648367021-fb130e6c5bbe?w=800&q=75&fm=webp&fit=crop",
            alt: "Dramatic snow-capped Himalayan mountain peaks with winding mountain road and Buddhist prayer flags in vibrant colors against deep blue sky in Ladakh"
        }];


    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />

            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-10">
                {heroImages?.map((image, index) =>
                    <div key={index} className="relative overflow-hidden">
                        <Image
                            fetchPriority={index === 0 ? "high" : "auto"}
                            loading={index === 0 ? "eager" : "lazy"}
                            src={image?.src}
                            alt={image?.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="relative z-10 container-safe text-center px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
                <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg mb-4">
                        ✨ Trusted by 500+ Happy Travelers
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
                        Bharat Yatra <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Travel Packages
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Discover Incredible India with our exclusive Bharat Yatra travel packages. From the majestic Himalayas to serene backwaters, experience curated journeys that celebrate India's rich heritage.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-6">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="ArrowRight"
                            iconPosition="right"
                            onClick={onCTAClick}
                            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
                            Start Your Journey
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            iconName="Phone"
                            iconPosition="left"
                            className="w-full sm:w-auto border-2 border-slate-600 hover:border-blue-500 bg-slate-800/50 hover:bg-slate-700 text-slate-200 hover:text-blue-400 px-8 py-4 text-lg transition-all duration-300">
                            Call Us Now
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 pt-12">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">500+</div>
                            <div className="text-sm md:text-base text-slate-400 mt-2 font-medium">Happy Travelers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div>
                            <div className="text-sm md:text-base text-slate-400 mt-2 font-medium">Destinations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">4.8★</div>
                            <div className="text-sm md:text-base text-slate-400 mt-2 font-medium">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-8 h-12 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                </div>
            </div>
        </section>);

};

export default HeroSection;