import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
    const currentYear = new Date()?.getFullYear();

    const quickLinks = [
        { label: 'About Us', href: '#' },
        { label: 'Destinations', href: '#packages' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Reviews', href: '#reviews' }
    ];

    const destinations = [
        { label: 'Goa', href: '#' },
        { label: 'Kerala', href: '#' },
        { label: 'Rajasthan', href: '#' },
        { label: 'Himachal', href: '#' },
        { label: 'Ladakh', href: '#' },
        { label: 'Kashmir', href: '#' }
    ];

    const socialLinks = [
        { icon: 'Facebook', href: '#', label: 'Facebook' },
        { icon: 'Instagram', href: '#', label: 'Instagram' },
        { icon: 'Twitter', href: '#', label: 'Twitter' },
        { icon: 'Youtube', href: '#', label: 'YouTube' }
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container-safe py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center">
                                <Icon name="Compass" size={28} color="#60a5fa" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-heading font-bold text-white">
                                BharatYatra
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Discover the soul of Incredible India with curated travel experiences that celebrate our rich heritage and breathtaking landscapes.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks?.map((social) => (
                                <a
                                    key={social?.icon}
                                    href={social?.href}
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-smooth focus-ring text-slate-400"
                                    aria-label={social?.label}
                                >
                                    <Icon name={social?.icon} size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-heading font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks?.map((link) => (
                                <li key={link?.label}>
                                    <a
                                        href={link?.href}
                                        className="text-sm text-slate-400 hover:text-blue-400 transition-smooth"
                                    >
                                        {link?.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-heading font-semibold text-white mb-4">
                            Popular Destinations
                        </h3>
                        <ul className="space-y-3">
                            {destinations?.map((dest) => (
                                <li key={dest?.label}>
                                    <a
                                        href={dest?.href}
                                        className="text-sm text-slate-400 hover:text-blue-400 transition-smooth"
                                    >
                                        {dest?.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-heading font-semibold text-white mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Icon name="Phone" size={20} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-white">+91 98765 43210</div>
                                    <div className="text-xs text-slate-500">Mon-Sat, 9AM-7PM</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="Mail" size={20} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-white">info@bharatyatra.com</div>
                                    <div className="text-xs text-slate-500">24/7 Email Support</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="MapPin" size={20} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-white">Mumbai, Maharashtra</div>
                                    <div className="text-xs text-slate-500">India</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500 text-center md:text-left">
                            &copy; {currentYear} BharatYatra. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-smooth">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-smooth">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-smooth">
                                Cancellation Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;