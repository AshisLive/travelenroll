import React, { useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PackagesSection = ({ onBookNow }) => {
    const scrollContainerRef = useRef(null);

    const packages = [
        {
            id: 1,
            name: "Solo Explorer Package",
            image: "https://images.unsplash.com/photo-1533398892249-1d93b83b958d",
            imageAlt: "Young solo traveler with backpack standing on mountain cliff overlooking scenic valley with arms spread wide enjoying freedom and adventure in golden sunset light",
            destinations: ["Goa", "Himachal Pradesh", "Rajasthan"],
            duration: "5-7 Days",
            price: 9999,
            originalPrice: 12499,
            discount: "20% OFF",
            badge: "Most Popular",
            features: [
                "Flexible itinerary",
                "Budget-friendly stays",
                "Local experiences",
                "Solo traveler community"]

        },
        {
            id: 2,
            name: "Family Package",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_14dbaeea9-1766525569097.png",
            imageAlt: "Happy Indian family of four with parents and two children smiling together at beach during sunset with traditional colorful clothing and warm golden light",
            destinations: ["Kerala", "Kashmir", "Golden Triangle"],
            duration: "7-10 Days",
            price: 24999,
            originalPrice: 29999,
            discount: "Kids Stay Free",
            badge: "Family Favorite",
            features: [
                "Family-friendly hotels",
                "Kid-friendly activities",
                "Comfortable transport",
                "Meals included"]

        },
        {
            id: 3,
            name: "Spiritual Journey",
            image: "https://images.unsplash.com/photo-1695453892614-c9471ed6479a",
            imageAlt: "Ancient Hindu temple with intricate stone carvings and devotees performing evening aarti ceremony with oil lamps creating warm glow against ornate pillars and sacred architecture",
            destinations: ["Varanasi", "Rishikesh", "Haridwar"],
            duration: "6-8 Days",
            price: 14999,
            originalPrice: 17999,
            discount: "15% OFF",
            badge: "Spiritual",
            features: [
                "Temple visits",
                "Yoga sessions",
                "Meditation retreats",
                "Spiritual guides"]

        },
        {
            id: 4,
            name: "Adventure Seeker",
            image: "https://images.unsplash.com/photo-1624837224992-7fd12d6765d1",
            imageAlt: "Adventure enthusiast paragliding over lush green Himalayan mountains with snow-capped peaks in background and colorful parachute against clear blue sky",
            destinations: ["Ladakh", "Manali", "Uttarakhand"],
            duration: "8-12 Days",
            price: 34999,
            originalPrice: 39999,
            discount: "12% OFF",
            badge: "Adventure",
            features: [
                "Trekking expeditions",
                "River rafting",
                "Mountain biking",
                "Camping experiences"]

        }];


    const scroll = (direction) => {
        if (scrollContainerRef?.current) {
            const scrollAmount = 320;
            scrollContainerRef?.current?.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="packages" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container-safe">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-900/50 to-blue-900/50 text-pink-300 rounded-full text-sm font-semibold mb-4">
                        Popular Packages
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Travel <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Packages</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300">
                        Carefully crafted packages for every type of traveler
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-slate-800 shadow-xl rounded-full items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 focus-ring text-slate-300"
                        aria-label="Scroll left">

                        <Icon name="ChevronLeft" size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-slate-800 shadow-xl rounded-full items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 focus-ring text-slate-300"
                        aria-label="Scroll right">

                        <Icon name="ChevronRight" size={24} />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">

                        {packages?.map((pkg, index) =>
                            <div
                                key={pkg?.id}
                                className="flex-shrink-0 w-80 md:w-full snap-start"
                                style={{ animationDelay: `${index * 100}ms` }}>

                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-slate-700">
                                    <div className="relative h-48 md:h-56 overflow-hidden">
                                        <Image
                                            src={pkg?.image}
                                            alt={pkg?.imageAlt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            {pkg?.badge}
                                        </div>
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            {pkg?.discount}
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
                                            {pkg?.name}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                                            <Icon name="Clock" size={16} />
                                            <span className="font-medium">{pkg?.duration}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {pkg?.destinations?.map((dest, idx) =>
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 rounded-full text-sm font-medium">

                                                    {dest}
                                                </span>
                                            )}
                                        </div>

                                        <ul className="space-y-2 mb-6 flex-1">
                                            {pkg?.features?.map((feature, idx) =>
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                                    <Icon name="Check" size={16} color="#10b981" className="flex-shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            )}
                                        </ul>

                                        <div className="border-t border-slate-700 pt-6 mt-auto">
                                            <div className="flex items-end justify-between mb-4">
                                                <div>
                                                    <div className="text-sm text-slate-500 line-through">
                                                        ₹{pkg?.originalPrice?.toLocaleString('en-IN')}
                                                    </div>
                                                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                        ₹{pkg?.price?.toLocaleString('en-IN')}
                                                    </div>
                                                    <div className="text-xs text-slate-500">per person</div>
                                                </div>
                                            </div>

                                            <Button
                                                variant="default"
                                                fullWidth
                                                iconName="ArrowRight"
                                                iconPosition="right"
                                                onClick={onBookNow}
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">

                                                Book Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>);

};

export default PackagesSection;