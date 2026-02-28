import React from "react";
import { Mail, ChevronDown } from "lucide-react";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <div className="bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold">A</span>
                        </div>
                        <span className="text-white text-xl font-bold tracking-tighter">
                            AutoWholesaleCanada
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <a href="#" className="text-cyan-400 font-medium">
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            FAQ
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/10 transition-all text-sm font-medium">
                            <span className="w-5 h-3 bg-red-600 rounded-sm"></span>
                            FR
                            <ChevronDown size={14} className="text-gray-500" />
                        </button>
                        <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-400/20">
                            Get Dealer Offers
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
