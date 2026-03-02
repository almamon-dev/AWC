import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import SellYourCarFlow from "./Partials/SellYourCarFlow";
import OfferForm from "./Partials/OfferForm";
import VinHelpModal from "./Partials/VinHelpModal";

const SellCar = (props) => {
    const hasData = props.tab || props.make || props.vin;
    const [view, setView] = useState(hasData ? "flow" : "form");
    const [initialData, setInitialData] = useState(props || {});
    const [isVinModalOpen, setIsVinModalOpen] = useState(false);

    const handleFormSubmit = (data) => {
        setInitialData(data);
        setView("flow");
    };

    const openVinModal = () => setIsVinModalOpen(true);
    const closeVinModal = () => setIsVinModalOpen(false);

    return (
        <div className="min-h-screen bg-[#F1F5F9] pt-9 font-sans text-gray-900 selection:bg-cyan-100 selection:text-cyan-900 relative flex flex-col">
            <Head title="Sell Your Car - Auto Wholesale Canada" />

            {/* Header with navigation back to landing if needed */}
            <Header onGetOffersClick={() => setView("form")} />

            <main className="flex-1 flex flex-col pt-16 pb-8">
                <div
                    className={`container mx-auto px-4 flex-1 flex flex-col transition-all duration-500 ${view === "flow" ? "max-w-8xl" : "max-w-6xl"}`}
                >
                    <div className="bg-white rounded-xl shadow-sm shadow-gray-200/50 border border-gray-100 overflow-hidden flex-1 flex flex-col mt-4">
                        <div
                            className={`flex-1 flex flex-col ${view === "flow" ? "p-4 md:p-8" : "p-4 md:p-10"}`}
                        >
                            {view === "form" ? (
                                <div className="max-w-4xl mx-auto w-full py-6 md:py-10">
                                    <div className="mb-8 text-center px-4">
                                        <h1 className="text-3xl font-black text-[#475569] leading-tight mb-3">
                                            Tell us about your car
                                        </h1>
                                        <p className="text-gray-400 font-medium">
                                            Enter your vehicle details to get
                                            your highest dealer offer today.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                        <OfferForm
                                            onVinHelpClick={openVinModal}
                                            onFormSubmit={handleFormSubmit}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <SellYourCarFlow
                                    initialData={initialData}
                                    onComplete={(data) => {
                                        console.log("Completed", data);
                                        // Final step could be a redirect or success page
                                        router.visit("/");
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <VinHelpModal show={isVinModalOpen} onClose={closeVinModal} />
        </div>
    );
};

export default SellCar;
