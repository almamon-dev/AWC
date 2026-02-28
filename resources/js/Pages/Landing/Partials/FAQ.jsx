import React, { useState } from "react";
import { Plus, Minus, X, Compass } from "lucide-react";

/**
 * FAQ Component
 * Features a large steering wheel watermark in the background.
 * Uses a clean, interactive accordion for frequently asked questions.
 */
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "How does your service work?",
            a: "We collect your car details and pitch them to certified dealers. They compete to give you the best offer, and you choose the one that works for you.",
        },
        {
            q: "How much does it cost?",
            a: "Our service costs a flat fee of $29.99 for a listing. There are no commissions or hidden fees beyond that.",
        },
        {
            q: "Do I have to accept an offer?",
            a: "No, you are under no obligation to accept any offer. You are in full control of the process.",
        },
        {
            q: "How long does it take to get offers?",
            a: "Most sellers start receiving offers within 24 hours of their listing being approved.",
        },
        {
            q: "Who are the dealers making offers on my car?",
            a: "We work with a network of verified, certified dealers across Canada who are looking for quality inventory.",
        },
        {
            q: "Will you take a cut from my final sale?",
            a: "Absolutely not. The price you agree with the dealer is 100% yours. We only charge the initial listing fee.",
        },
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden" id="faq">
            {/* Background Watermark: Compass (as Steering Wheel placeholder) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center opacity-[0.015] -z-10 select-none pointer-events-none">
                <Compass
                    size={600}
                    strokeWidth={0.5}
                    className="text-gray-900"
                />
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-700">
                    <span className="text-[#06B6D4] font-bold text-[14px] tracking-wide block mb-2 uppercase">
                        Got Questions?
                    </span>
                    <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1E293B] mt-4 mb-4 tracking-tight uppercase">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom duration-700">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${
                                openIndex === index
                                    ? "border-[#E2E8F0] shadow-sm bg-gray-50/20"
                                    : "border-[#F1F5F9] bg-white hover:border-[#E2E8F0]"
                            }`}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center group transition-colors"
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index,
                                    )
                                }
                            >
                                <span
                                    className={`text-[17px] font-bold tracking-tight ${openIndex === index ? "text-[#1E293B]" : "text-[#475569]"}`}
                                >
                                    Q. {faq.q}
                                </span>
                                <div className="flex-shrink-0 ml-4 transition-transform duration-300">
                                    {openIndex === index ? (
                                        <X
                                            size={18}
                                            className="text-[#94A3B8]"
                                        />
                                    ) : (
                                        <Plus
                                            size={18}
                                            className="text-[#94A3B8] group-hover:text-[#06B6D4]"
                                        />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top duration-500">
                                    <div className="h-px bg-[#F1F5F9] mb-4"></div>
                                    <p className="text-[#64748B] text-[15px] leading-[1.6] font-medium max-w-2xl">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <div className="text-center mt-12 pb-8">
                    <button className="bg-[#00E5FF] hover:bg-[#00D1EB] text-black px-10 py-3.5 rounded-lg font-bold text-[15px] shadow-[0_8px_20px_-5px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
