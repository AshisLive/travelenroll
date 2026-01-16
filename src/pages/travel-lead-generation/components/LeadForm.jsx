import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LeadForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch
    } = useForm();

    const destinationOptions = [
        { value: 'goa', label: 'Goa - Beaches & Nightlife' },
        { value: 'kerala', label: 'Kerala - Backwaters & Nature' },
        { value: 'rajasthan', label: 'Rajasthan - Heritage & Culture' },
        { value: 'himachal', label: 'Himachal Pradesh - Mountains & Adventure' },
        { value: 'ladakh', label: 'Ladakh - High Altitude Desert' },
        { value: 'kashmir', label: 'Kashmir - Paradise on Earth' },
        { value: 'varanasi', label: 'Varanasi - Spiritual Journey' },
        { value: 'golden-triangle', label: 'Golden Triangle - Delhi-Agra-Jaipur' },
        { value: 'uttarakhand', label: 'Uttarakhand - Yoga & Trekking' },
        { value: 'andaman', label: 'Andaman - Island Paradise' }
    ];

    const travelTypeOptions = [
        { value: 'solo', label: 'Solo Traveler' },
        { value: 'couple', label: 'Couple' },
        { value: 'family', label: 'Family with Kids' },
        { value: 'friends', label: 'Group of Friends' },
        { value: 'senior', label: 'Senior Citizens' }
    ];

    const monthOptions = [
        { value: 'feb-2026', label: 'February 2026' },
        { value: 'mar-2026', label: 'March 2026' },
        { value: 'apr-2026', label: 'April 2026' },
        { value: 'may-2026', label: 'May 2026' },
        { value: 'jun-2026', label: 'June 2026' },
        { value: 'jul-2026', label: 'July 2026' },
        { value: 'aug-2026', label: 'August 2026' },
        { value: 'sep-2026', label: 'September 2026' },
        { value: 'oct-2026', label: 'October 2026' },
        { value: 'nov-2026', label: 'November 2026' },
        { value: 'dec-2026', label: 'December 2026' },
        { value: 'jan-2027', label: 'January 2027' }
    ];

    const selectedDestination = watch('destination');
    const selectedTravelType = watch('travelType');
    const selectedMonth = watch('preferredMonth');

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(data,'datadata');

            const payload = {
                timestamp: new Date().toISOString(),
                fullName: data.fullName,
                mobile: data.mobile,
                whatsapp: data.whatsapp || 'N/A',
                email: data.email || 'Not provided',
                destination: destinationOptions.find(opt => opt.value === data.destination)?.label,
                travelType: travelTypeOptions.find(opt => opt.value === data.travelType)?.label,
                preferredMonth: monthOptions.find(opt => opt.value === data.preferredMonth)?.label,
                additionalDetails: data.additionalDetails || 'Not provided'
            };

            // Note: SpreadsheetApp is a server-side Google Apps Script API.
            // To connect from React, you must deploy a Google Apps Script as a Web App 
            // and fetch its URL here.
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydpNvOd6Nqvd1EAsya13IKQ1-vymfVoOYXVCFdz0rkde-bOc-MVZFrzhF8mIeKK0yl/exec';

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            setSubmitSuccess(true);
            reset();
            setValue('destination', '');
            setValue('travelType', '');
            setValue('preferredMonth', '');

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="get-started" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container-safe">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 rounded-full text-sm font-semibold mb-4">
                            Get Started
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                            Start Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300">
                            Share your travel preferences and receive a personalized itinerary on WhatsApp within 24 hours
                        </p>
                    </div>

                    {submitSuccess && (
                        <div className="mb-8 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-600 rounded-2xl flex items-start gap-4 animate-fade-in shadow-lg">
                            <Icon name="CheckCircle" size={24} color="#10b981" className="flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-heading font-bold text-green-400 mb-2 text-lg">
                                    Thank You for Your Interest!
                                </h3>
                                <p className="text-sm text-slate-300">
                                    We've received your details and will send you a customized travel itinerary on WhatsApp within 24 hours. Our travel expert will reach out to discuss your preferences in detail.
                                </p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-700">
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="Enter your full name"
                            required
                            error={errors?.fullName?.message}
                            {...register('fullName', {
                                required: 'Full name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters'
                                }
                            })}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                            <Input
                                label="Mobile Number"
                                type="tel"
                                placeholder="Enter 10-digit mobile number"
                                required
                                error={errors?.mobile?.message}
                                {...register('mobile', {
                                    required: 'Mobile number is required',
                                    maxLength: {
                                        value: 10,
                                        message: 'Mobile number cannot exceed 10 digits'
                                    },
                                    pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message: 'Enter valid 10-digit mobile number'
                                    },
                                    onChange: (e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                    }
                                })}
                            />

                            <Input
                                label="WhatsApp Number"
                                type="tel"
                                placeholder="Enter WhatsApp number"
                                // required
                                error={errors?.whatsapp?.message}
                                {...register('whatsapp', {
                                    // required: 'WhatsApp number is required',
                                    maxLength: {
                                        value: 10,
                                        message: 'Mobile number cannot exceed 10 digits'
                                    },
                                    pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message: 'Enter valid 10-digit mobile number'
                                    },
                                    onChange: (e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                    }
                                })}
                            />
                        </div>

                        <Input
                            label="Email Address (Optional)"
                            type="email"
                            placeholder="your.email@example.com"
                            // description="We'll send booking confirmation to this email"
                            error={errors?.email?.message}
                            {...register('email', {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Enter valid email address'
                                }
                            })}
                        />

                        <div className="mt-2">
                            <Select
                            label="Destination Interest"
                            placeholder="Select your preferred destination"
                            required
                            options={destinationOptions}
                            value={selectedDestination}
                            onChange={(value) => setValue('destination', value)}
                            error={errors?.destination?.message}
                            searchable
                            {...register('destination', {
                                required: 'Please select a destination'
                            })}
                        />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                            <Select
                                label="Travel Type"
                                placeholder="Select travel type"
                                required
                                options={travelTypeOptions}
                                value={selectedTravelType}
                                onChange={(value) => setValue('travelType', value)}
                                error={errors?.travelType?.message}
                                {...register('travelType', {
                                    required: 'Please select travel type'
                                })}
                            />

                            <Select
                                label="Preferred Travel Month"
                                placeholder="Select month"
                                required
                                options={monthOptions}
                                value={selectedMonth}
                                onChange={(value) => setValue('preferredMonth', value)}
                                error={errors?.preferredMonth?.message}
                                {...register('preferredMonth', {
                                    required: 'Please select preferred month'
                                })}
                            />
                        </div>

                        <div className="mt-2">
                            <Input
                                label="Additional Details"
                                placeholder="Tell me about your travel preference or any query"
                                error={errors?.additionalDetails?.message}
                                {...register('additionalDetails')}
                            />
                        </div>

                        <div className="pt-6 border-t border-slate-700 mt-6">
                            <Button
                                type="submit"
                                variant="default"
                                size="lg"
                                fullWidth
                                loading={isSubmitting}
                                iconName="Send"
                                iconPosition="right"
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                {isSubmitting ? 'Submitting...' : 'Get My Custom Itinerary'}
                            </Button>

                            <p className="text-xs text-slate-500 text-center mt-4">
                                By submitting, you agree to receive travel updates via WhatsApp and SMS
                            </p>
                        </div>
                    </form>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon name="MessageCircle" size={24} color="#60a5fa" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-white mb-1">
                                    WhatsApp Updates
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Get instant itinerary on WhatsApp
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon name="Shield" size={24} color="#c084fc" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-white mb-1">
                                    Secure & Private
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Your data is safe with us
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-900/50 to-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon name="Clock" size={24} color="#ec4899" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-white mb-1">
                                    24-Hour Response
                                </h4>
                                <p className="text-sm text-slate-400">
                                    Quick turnaround guaranteed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;