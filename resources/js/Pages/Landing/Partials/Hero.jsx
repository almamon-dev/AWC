import React from "react";
import { ShieldCheck, MapPin, DollarSign } from "lucide-react";
import OfferForm from "./OfferForm";

const Hero = ({ onGetOfferClick, onVinHelpClick }) => {
    return (
        <section className="relative min-h-[790px] flex items-center pt-16 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/landing/Hero.png")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 backdrop-blur-[1px]"></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="text-white space-y-6 animate-in slide-in-from-left duration-700">
                    <div className="flex gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        Get the Best Dealer <br />
                        Offers for Your Car
                    </h1>

                    <p className="text-xl text-gray-300 font-medium">
                        Pay once. Dealers compete. You choose.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <button
                            onClick={onGetOfferClick}
                            className="bg-[#00E5FF] hover:bg-[#00D1EB] text-black px-8 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(0,229,255,0.4)]"
                        >
                            Get An Offer
                        </button>
                        <button className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 px-8 py-3 rounded-full font-bold text-sm transition-all">
                            Contact Us
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-5">
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#22D3EE]">
                            <ShieldCheck size={18} />
                            <span className="text-white/90">
                                Secure Payment
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#22D3EE]">
                            <MapPin size={18} />
                            <span className="text-white/90">
                                Canada-Wide Dealers
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#22D3EE]">
                            <DollarSign size={18} />
                            <span className="text-white/90">No Commission</span>
                        </div>
                    </div>
                </div>

                {/* Main Hero Card */}
                <div
                    className="lg:ml-auto w-full max-w-[450px]"
                    id="offer-form"
                >
                    <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col">
                        <OfferForm onVinHelpClick={onVinHelpClick} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
