import React from "react";
import { Head, router } from "@inertiajs/react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import PageHero from "./Partials/PageHero";
import HowItWorks from "./Partials/HowItWorks";
import CTA from "./Partials/CTA";
import ScrollToTop from "@/Components/ScrollToTop";

const AboutPage = () => {
    const navigateToSellCar = (data = null) => {
        router.visit(route("sell.car"), {
            data: data && !(data.nativeEvent instanceof Event) ? data : {},
        });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cyan-100 selection:text-cyan-900 relative">
            <Head title="About Us - Auto Wholesale Canada" />

            <Header onGetOffersClick={navigateToSellCar} />

            <main className="pt-16">
                <PageHero title="About US" />

                {/* Main Content Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div className="space-y-8 animate-in slide-in-from-left duration-700">
                                <div className="space-y-4">
                                    <h2 className="text-[42px] lg:text-[48px] font-black text-[#1E293B] leading-tight tracking-tight">
                                        Your car's solution—made simple
                                    </h2>
                                    <div className="w-20 h-1.5 bg-[#00E5FF] rounded-full"></div>
                                </div>

                                <div className="space-y-6 text-[#64748B] text-[17px] font-medium leading-[1.8]">
                                    <p>
                                        Welcome to Auto Wholesale Canada, the
                                        trusted platform for selling your car
                                        quickly, easily, and at the best price.
                                        We are passionate about simplifying the
                                        car-selling process, offering a seamless
                                        and transparent experience for our
                                        customers.
                                    </p>
                                    <p>
                                        With cutting-edge technology and a
                                        customer-first approach, we ensure
                                        accurate car valuations, instant
                                        payments, and hassle-free services.
                                        Whether you're looking to upgrade your
                                        vehicle or simply sell it for a fair
                                        price, we are here to make the process
                                        smooth and stress-free.
                                    </p>
                                    <p>
                                        Our team of experts is dedicated to
                                        providing you with personalized support
                                        every step of the way. From valuation to
                                        final payment, we aim to exceed your
                                        expectations and deliver an experience
                                        you'll recommend to others.
                                    </p>
                                    <p>
                                        At Auto Wholesale Canada, we value your
                                        time and trust. That's why we've
                                        designed a platform that combines
                                        efficiency, reliability, and
                                        simplicity—all tailored to meet your
                                        needs.
                                    </p>
                                </div>
                            </div>

                            {/* Image Collage */}
                            <div className="relative animate-in slide-in-from-right duration-700">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
                                        alt="Modern Office"
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xl font-black text-[#1E293B]">
                                                10k+
                                            </p>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                Happy Customers
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-10 -right-10 z-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <HowItWorks />
                <CTA onGetOffersClick={navigateToSellCar} />
            </main>

            <Footer />
            <ScrollToTop />

            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

                body {
                    font-family: "DM Sans", sans-serif;
                }

                @keyframes bounce-slow {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
