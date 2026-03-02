import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Header from "./Partials/Header";
import Hero from "./Partials/Hero";
import Logos from "./Partials/Logos";
import HowItWorks from "./Partials/HowItWorks";
import AboutUs from "./Partials/AboutUs";
import WhyChooseUs from "./Partials/WhyChooseUs";
import Testimonials from "./Partials/Testimonials";
import FAQ from "./Partials/FAQ";
import CTA from "./Partials/CTA";
import Footer from "./Partials/Footer";
import ScrollToTop from "@/Components/ScrollToTop";
import VinHelpModal from "./Partials/VinHelpModal";

const Landing = ({ faqs, about }) => {
    const [isVinModalOpen, setIsVinModalOpen] = useState(false);

    const navigateToSellCar = (data = null) => {
        // Navigate to the sell car page!
        router.visit(route("sell.car"), {
            data: data && !(data.nativeEvent instanceof Event) ? data : {},
        });
    };

    const openVinModal = () => setIsVinModalOpen(true);
    const closeVinModal = () => setIsVinModalOpen(false);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cyan-100 selection:text-cyan-900 relative">
            <Head title="Auto Wholesale Canada - Get the Best Dealer Offers for Your Car" />

            <Header onGetOffersClick={navigateToSellCar} />

            <main>
                <Hero
                    onGetOfferClick={navigateToSellCar}
                    onVinHelpClick={openVinModal}
                />
                <Logos />
                <HowItWorks />
                <AboutUs content={about} />
                <WhyChooseUs />
                <Testimonials />
                <FAQ faqs={faqs} />
                <CTA onGetOffersClick={navigateToSellCar} />
            </main>

            <Footer />
            <ScrollToTop />

            <VinHelpModal show={isVinModalOpen} onClose={closeVinModal} />

            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

                body {
                    font-family: "DM Sans", sans-serif;
                }

                .text-glow {
                    text-shadow: 0 0 30px rgba(34, 211, 238, 0.3);
                }
            `}</style>
        </div>
    );
};

export default Landing;
