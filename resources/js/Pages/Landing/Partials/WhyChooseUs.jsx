import React from "react";
import { CircleCheck, DollarSign } from "lucide-react";

/**
 * WhyChooseUs Component
 * Implements a premium, spacious benefit section with layered imagery.
 * Features a custom checkmark list and a complex composite graphic.
 */
const WhyChooseUs = () => {
    const benefits = [
        {
            title: "Cost-Efficient",
            desc: "Flat fee of $29.99—no hidden costs or commissions.",
        },
        {
            title: "Time-Saving",
            desc: "Get top offers quickly from certified dealers near you.",
        },
        {
            title: "Professional Brokers",
            desc: "Experts handle the process for you.",
        },
        {
            title: "Certified Dealers Only",
            desc: "We work exclusively with trusted professionals.",
        },
        {
            title: "Unbiased Offer Pool",
            desc: "We shop your car to certified dealers for the best price—100% commission-free.",
        },
    ];

    return (
        <section
            className="py-16 bg-white relative overflow-hidden"
            id="why-choose-us"
        >
            {/* Background Accent Gradient */}
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-gradient-to-l from-cyan-50/50 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[10s]"></div>

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-10 animate-in fade-in slide-in-from-top duration-700">
                    <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1E293B] mb-4 tracking-tight">
                        Why Choose AutoWholesaleCanada
                    </h2>
                    <p className="text-[#06B6D4] font-bold text-[14px] uppercase tracking-[0.2em]">
                        Your Advantage
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative">
                    {/* Benefits List (Left) */}
                    <div className="lg:w-1/2 space-y-6 animate-in fade-in slide-in-from-left duration-700">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="group flex items-start gap-5 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        src="/images/landing/whay_chose_icon.svg"
                                        alt="Check Icon"
                                        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[18px] font-bold text-[#1E293B] tracking-tight group-hover:text-[#06B6D4] transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[#64748B] text-[15px] leading-[1.5] font-medium max-w-md">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Side (Right) */}
                    <div className="lg:w-1/2 relative flex items-center justify-center animate-in fade-in slide-in-from-right duration-700">
                        <div className="relative z-0 w-full max-w-[480px] group">
                            <img
                                src="/images/landing/whay_chose-us.png"
                                alt="Why Choose AutoWholesaleCanada"
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
