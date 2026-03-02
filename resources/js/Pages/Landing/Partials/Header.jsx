import React, { useState } from "react";
import { Mail, ChevronDown, Globe } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";

const Header = ({ onGetOffersClick }) => {
    const { url } = usePage();
    const [lang, setLang] = useState("EN");
    const [isLangOpen, setIsLangOpen] = useState(false);

    const isActive = (path) => url === path;

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <div className="bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#00E5FF] rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold">A</span>
                        </div>
                        <span className="text-white text-xl font-bold tracking-tighter">
                            AutoWholesaleCanada
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <Link
                            href="/"
                            className={`font-medium transition-colors ${isActive("/") ? "text-[#00E5FF]" : "text-gray-300 hover:text-white"}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`font-medium transition-colors ${isActive("/about") ? "text-[#00E5FF]" : "text-gray-300 hover:text-white"}`}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/faq"
                            className={`font-medium transition-colors ${isActive("/faq") ? "text-[#00E5FF]" : "text-gray-300 hover:text-white"}`}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-medium transition-colors ${isActive("/contact") ? "text-[#00E5FF]" : "text-gray-300 hover:text-white"}`}
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-full border border-white/10 transition-all text-[13px] font-bold"
                            >
                                <Globe size={16} className="text-[#00E5FF]" />
                                {lang}
                                <ChevronDown
                                    size={14}
                                    className={`text-gray-500 ml-1 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isLangOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-0"
                                        onClick={() => setIsLangOpen(false)}
                                    ></div>
                                    <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden animate-in fade-in zoom-in duration-200 z-10">
                                        {["EN", "FR"].map((l) => (
                                            <button
                                                key={l}
                                                onClick={() => {
                                                    setLang(l);
                                                    setIsLangOpen(false);
                                                }}
                                                className={`w-full px-4 py-2 text-left text-sm font-bold transition-colors hover:bg-cyan-50 h-10 ${lang === l ? "text-[#00E5FF]" : "text-gray-600"}`}
                                            >
                                                {l === "EN"
                                                    ? "English"
                                                    : "Français"}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <button
                            onClick={onGetOffersClick}
                            className="bg-[#00E5FF] hover:bg-[#00D1EB] text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#00E5FF]/20"
                        >
                            Get Dealer Offers
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
