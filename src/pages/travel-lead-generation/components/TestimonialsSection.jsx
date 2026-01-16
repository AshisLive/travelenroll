import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
            avatarAlt: "Professional headshot of Indian woman with long black hair wearing traditional red saree and warm smile",
            destination: "Kerala Backwaters",
            rating: 5,
            review: "BharatYatra made our family trip to Kerala absolutely magical! The houseboat experience was serene, and our guide knew all the hidden gems. The kids loved every moment, and we felt completely taken care of throughout the journey.",
            date: "December 2025"
        },
        {
            id: 2,
            name: "Rahul Verma",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_112da7240-1763294160138.png",
            avatarAlt: "Professional headshot of Indian man with short black hair wearing blue formal shirt and confident expression",
            destination: "Ladakh Adventure",
            rating: 5,
            review: "As a solo traveler, I was initially nervous about the high-altitude trek. But the team's support and the community of fellow travelers made it an unforgettable experience. The landscapes were breathtaking, and I made friends for life!",
            date: "November 2025"
        },
        {
            id: 3,
            name: "Anjali Patel",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
            avatarAlt: "Professional headshot of Indian woman with shoulder-length black hair wearing green kurta and friendly smile",
            destination: "Rajasthan Heritage Tour",
            rating: 5,
            review: "The attention to detail in our Rajasthan itinerary was impressive. From the majestic forts to the vibrant markets, every experience was authentic. Our guide's storytelling brought history alive. Highly recommend for culture enthusiasts!",
            date: "October 2025"
        },
        {
            id: 4,
            name: "Vikram Singh",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12b674a88-1763300103327.png",
            avatarAlt: "Professional headshot of Indian man with beard wearing white kurta and traditional turban with warm expression",
            destination: "Varanasi Spiritual Journey",
            rating: 5,
            review: "The spiritual journey to Varanasi was transformative. Witnessing the Ganga Aarti and participating in morning yoga sessions by the ghats was soul-stirring. BharatYatra\'s team ensured we experienced the city\'s spiritual essence authentically.",
            date: "January 2026"
        }];


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials?.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials?.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % testimonials?.length);
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current - 1 + testimonials?.length) % testimonials?.length);
    };

    return (
        <section id="reviews" className="section-spacing bg-slate-900">
            <div className="container-safe">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 rounded-full text-sm font-semibold mb-4">
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Traveler <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300">
                        Hear from our happy travelers about their incredible journeys
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-smooth"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

                            {testimonials?.map((testimonial) =>
                                <div
                                    key={testimonial?.id}
                                    className="w-full flex-shrink-0">

                                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700">
                                        <div className="flex flex-col items-center space-y-6">
                                            <div className="relative">
                                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                                                    <Image
                                                        src={testimonial?.avatar}
                                                        alt={testimonial?.avatarAlt}
                                                        className="w-full h-full object-cover" />

                                                </div>
                                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                                    <Icon name="Quote" size={20} color="white" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                                                    {testimonial?.name}
                                                </h3>
                                                <p className="text-base text-slate-400 mt-2">
                                                    {testimonial?.destination}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial?.rating)]?.map((_, idx) =>
                                                    <Icon
                                                        key={idx}
                                                        name="Star"
                                                        size={24}
                                                        color="#f59e0b"
                                                        className="fill-current" />

                                                )}
                                            </div>
                                        </div>

                                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center max-w-2xl mx-auto mt-8">
                                            "{testimonial?.review}"
                                        </p>

                                        <p className="text-sm text-slate-500 text-center mt-6">
                                            {testimonial?.date}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 shadow-xl rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 focus-ring text-slate-300"
                        aria-label="Previous testimonial">

                        <Icon name="ChevronLeft" size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 shadow-xl rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 focus-ring text-slate-300"
                        aria-label="Next testimonial">

                        <Icon name="ChevronRight" size={24} />
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials?.map((_, index) =>
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 focus-ring ${index === activeIndex ?
                                        'w-8 bg-gradient-to-r from-blue-600 to-purple-600' : 'w-2 bg-slate-600 hover:bg-slate-500'}`
                                }
                                aria-label={`Go to testimonial ${index + 1}`} />

                        )}
                    </div>
                </div>
            </div>
        </section>);

};

export default TestimonialsSection;