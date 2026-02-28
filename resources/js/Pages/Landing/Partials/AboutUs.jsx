import React from "react";
import { ShoppingBag } from "lucide-react";

/**
 * AboutUs Component
 * Implements a premium, layered aesthetic with custom image masks and overlapping elements.
 * Features a portal-arched frame, a foreground car element, and a subtle background icon.
 */
const AboutUs = () => {
    return (
        <section className="py-16 bg-white overflow-hidden" id="about-us">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Image Composition Container (Left) */}
                    <div className="lg:w-1/2 relative flex justify-center lg:justify-start animate-in fade-in slide-in-from-left duration-700">
                        <div className="relative w-full max-w-[480px] group">
                            <img
                                src="/images/landing/about_us.png"
                                alt="Modern Car Solution"
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Content Section (Right) */}
                    <div className="lg:w-1/2 space-y-6 animate-in fade-in slide-in-from-right duration-700">
                        <div className="space-y-3">
                            <span className="text-[#06B6D4] font-bold text-[15px] tracking-wide uppercase">
                                About US
                            </span>
                            <h2 className="text-[36px] lg:text-[42px] font-bold text-[#1E293B] leading-[1.2] tracking-tight">
                                Your car's solution—made
                                <br />
                                simple
                            </h2>
                        </div>

                        <p className="text-[#64748B] text-[16px] leading-[1.6] font-medium max-w-xl">
                            Selling your car can be stressful and
                            time-consuming. By listing your car on Auto
                            Wholesale, you gain access to a professional
                            brokerage team dedicated to working for you and your
                            vehicle. Join our satisfied customers and secure
                            top-dollar, highly qualified, and competitive
                            offers.
                        </p>

                        <div className="pt-4">
                            <button className="bg-[#00E5FF] hover:bg-[#00D1EB] text-black px-10 py-3.5 rounded-lg font-bold text-[15px] shadow-[0_8px_20px_-5px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
