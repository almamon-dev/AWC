import React from "react";
import { FileText, Users, Gift, CheckCircle } from "lucide-react";

/**
 * HowItWorks Component
 * Renders a clean, 4-step process section for the landing page.
 * Design follows the premium, minimal aesthetic with vibrant teal accents.
 */
const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Enter Car Details",
            desc: "Fill in your vehicle information quickly and easily",
            icon: <FileText className="text-black" size={28} />,
        },
        {
            id: 2,
            title: "Dealers Review Listing",
            desc: "Our network of verified dealers sees your car",
            icon: <Users className="text-black" size={28} />,
        },
        {
            id: 3,
            title: "Receive Multiple Offers",
            desc: "Get competitive bids from interested dealers",
            icon: <Gift className="text-black" size={28} />,
        },
        {
            id: 4,
            title: "Accept or Decline",
            desc: "You're in control - choose the best offer or walk away",
            icon: <CheckCircle className="text-black" size={28} />,
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="how-it-works">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-24 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-[42px] font-bold text-[#1E293B] mb-5 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-[#64748B] text-[17px] font-medium leading-relaxed">
                        Get competitive offers from verified dealers in just 4
                        simple steps
                    </p>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`text-center group transition-all duration-700 animate-in fade-in slide-in-from-bottom`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col items-center">
                                {/* Icon Container with Teal Gradient */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#00B8D4] flex items-center justify-center mb-8 shadow-[0_8px_20px_-5px_rgba(0,229,255,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_25px_-5px_rgba(0,229,255,0.5)]">
                                    {step.icon}
                                </div>

                                {/* Step Label */}
                                <span className="text-[#06B6D4] font-bold text-sm mb-3 tracking-wide">
                                    Step {step.id}
                                </span>

                                {/* Step Title */}
                                <h3 className="text-[22px] font-bold text-[#334155] mb-4 tracking-tight">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-[#64748B] text-sm font-medium leading-[1.6] max-w-[240px] mx-auto">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
