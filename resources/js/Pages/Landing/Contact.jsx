import React from "react";
import { Head, router } from "@inertiajs/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import PageHero from "./Partials/PageHero";
import CTA from "./Partials/CTA";
import ScrollToTop from "@/Components/ScrollToTop";

const ContactPage = () => {
    const navigateToSellCar = (data = null) => {
        router.visit(route("sell.car"), {
            data: data && !(data.nativeEvent instanceof Event) ? data : {},
        });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cyan-100 selection:text-cyan-900 relative">
            <Head title="Contact Us - Auto Wholesale Canada" />

            <Header onGetOffersClick={navigateToSellCar} />

            <main className="pt-16">
                <PageHero title="Contact Us" />

                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-top duration-700">
                            <h2 className="text-[42px] font-black text-[#1E293B] tracking-tight">
                                Get in Touch
                            </h2>
                            <p className="text-[#64748B] text-[17px] font-medium max-w-xl mx-auto leading-relaxed">
                                Experience the future of automotive innovation
                                with our latest car models.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-slate-50/50 p-8 lg:p-12 rounded-[32px] border border-slate-100 shadow-sm animate-in zoom-in duration-700">
                                <form className="space-y-8">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all placeholder:text-slate-300"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter email address"
                                                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all placeholder:text-slate-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="xxx-xxx-xxxx"
                                                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                                Message
                                            </label>
                                            <textarea
                                                rows="5"
                                                placeholder="Type a message"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-6 py-5 text-sm font-medium focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all placeholder:text-slate-300 resize-none h-40"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-start">
                                        <button
                                            type="submit"
                                            className="bg-[#00E5FF] hover:bg-[#00D1EB] text-black px-12 py-4 rounded-xl font-bold text-[15px] transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_10px_20px_-5px_rgba(0,229,255,0.4)] flex items-center gap-2 group"
                                        >
                                            Send Message
                                            <Send
                                                size={18}
                                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Info Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4">
                                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors duration-300 group">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                                        <Mail size={22} />
                                    </div>
                                    <h4 className="font-bold text-[#1E293B]">
                                        Email Us
                                    </h4>
                                    <p className="text-sm font-medium text-slate-500">
                                        info@autowholesalecanada.ca
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors duration-300 group">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                                        <Phone size={22} />
                                    </div>
                                    <h4 className="font-bold text-[#1E293B]">
                                        Call Us
                                    </h4>
                                    <p className="text-sm font-medium text-slate-500">
                                        +1 (800) 123-4567
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors duration-300 group">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                                        <MapPin size={22} />
                                    </div>
                                    <h4 className="font-bold text-[#1E293B]">
                                        Our Location
                                    </h4>
                                    <p className="text-sm font-medium text-slate-500">
                                        Toronto, Ontario, Canada
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CTA onGetOffersClick={navigateToSellCar} />
            </main>

            <Footer />
            <ScrollToTop />

            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

                body {
                    font-family: "DM Sans", sans-serif;
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
