import React from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
    const steps = [
        {
            id: 1,
            icon: "MapPin",
            title: "Choose Destination",
            description: "Browse our curated collection of India\'s most captivating destinations and select your dream location."
        },
        {
            id: 2,
            icon: "Heart",
            title: "Share Preferences",
            description: "Tell us about your travel style, interests, and requirements through our simple form."
        },
        {
            id: 3,
            icon: "MessageCircle",
            title: "Get Custom Itinerary",
            description: "Receive a personalized travel plan directly on WhatsApp within 24 hours, tailored to your needs."
        }
    ];

    return (
        <section id="how-it-works" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container-safe">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 rounded-full text-sm font-semibold mb-4">
                        Simple Process
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        How It <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300">
                        Three simple steps to your perfect Indian adventure
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps?.map((step, index) => (
                        <div
                            key={step?.id}
                            className="relative group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
                                <div className="relative inline-block mb-6">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <Icon
                                            name={step?.icon}
                                            size={40}
                                            color="#60a5fa"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                                        {step?.id}
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                                    {step?.title}
                                </h3>

                                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                                    {step?.description}
                                </p>
                            </div>

                            {index < steps?.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-6 -translate-y-1/2 z-10">
                                    <Icon
                                        name="ArrowRight"
                                        size={32}
                                        color="#a855f7"
                                        strokeWidth={2.5}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;