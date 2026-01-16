import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyUsSection = () => {
    const features = [
        {
            id: 1,
            icon: "Compass",
            title: "Curated Experiences",
            description: "Handpicked destinations and activities that showcase the authentic essence of India\'s diverse culture and natural beauty."
        },
        {
            id: 2,
            icon: "Users",
            title: "Trusted Local Guides",
            description: "Expert guides with deep knowledge of local traditions, hidden gems, and stories that bring each destination to life."
        },
        {
            id: 3,
            icon: "Shield",
            title: "Best Price Guarantee",
            description: "Transparent pricing with no hidden costs. Get the best value for your journey with our competitive rates and quality assurance."
        }
    ];

    return (
        <section id="why-us" className="section-spacing bg-slate-900">
            <div className="container-safe">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 rounded-full text-sm font-semibold mb-4">
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Why Travel With <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BharatYatra</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300">
                        We don't just plan trips, we craft unforgettable journeys that connect you with the heart of India
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {features?.map((feature, index) => (
                        <div
                            key={feature?.id}
                            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <Icon
                                        name={feature?.icon}
                                        size={40}
                                        color="#c084fc"
                                        strokeWidth={2}
                                    />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                                    {feature?.title}
                                </h3>

                                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                                    {feature?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;