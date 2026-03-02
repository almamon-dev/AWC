import React from "react";
import { Head, router } from "@inertiajs/react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import PageHero from "./Partials/PageHero";
import FAQSection from "./Partials/FAQ";
import CTA from "./Partials/CTA";
import ScrollToTop from "@/Components/ScrollToTop";

const FAQPage = () => {
    const navigateToSellCar = (data = null) => {
        router.visit(route("sell.car"), {
            data: data && !(data.nativeEvent instanceof Event) ? data : {},
        });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cyan-100 selection:text-cyan-900 relative">
            <Head title="FAQ - Auto Wholesale Canada" />

            <Header onGetOffersClick={navigateToSellCar} />

            <main className="pt-16">
                <PageHero title="FAQ" />
                <div className="py-12">
                    <FAQSection />
                </div>
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

export default FAQPage;
