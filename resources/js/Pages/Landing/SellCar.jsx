import React, { useState } from "react";
import { Head, router, useForm } from "@inertiajs/react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import SellYourCarFlow from "./Partials/SellYourCarFlow";
import OfferForm from "./Partials/OfferForm";
import VinHelpModal from "./Partials/VinHelpModal";

const stripePromise = loadStripe('pk_test_51Q12svRvN5gEyL4x6R3RSVVlyqPi00XkuQy1zDAYXvKjmtOZ1eVouTlCiwE3GrdkJQLywLK13o3WbE3Ztno6HEq100BwpAY1ZV');

const SellCar = (props) => {
    const hasData = props.tab || props.make || props.vin;
    const [view, setView] = useState(hasData ? "flow" : "form");
    const [isVinModalOpen, setIsVinModalOpen] = useState(false);

    const form = useForm({
        tab: "",
        vin: "",
        year: "",
        make: "",
        model: "",
        trim: "",
        kilometres: "",
        transmission: "",
        location: {
            province: "",
            city: "",
            postalCode: "",
            address: "",
        },
        contact: {
            fullName: "",
            email: "",
            phone: "",
        },
        photos: {},
        condition: {
            hasAccident: false,
            accidentDetails: "",
            hasMechanicalIssues: false,
            mechanicalDetails: "",
            symptoms: {},
            acceptedTerms: false,
        },
        payment_method_id: "",
    });

    const handleFormSubmit = (data) => {
        form.setData((prev) => ({
            ...prev,
            ...data,
        }));
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
                            {props.flash?.success && (
                                <div className="mb-6 bg-teal-50 border border-teal-100 text-teal-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <p className="font-black text-sm uppercase tracking-tight">Success!</p>
                                        <p className="text-xs font-medium opacity-80">{props.flash.success}</p>
                                    </div>
                                    <button 
                                        onClick={() => router.visit(route('sell.car'))}
                                        className="ml-auto text-teal-400 hover:text-teal-600 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                </div>
                            )}

                            {form.processing && (
                                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-[100] flex flex-col items-center justify-center animate-in fade-in duration-300">
                                    <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <p className="text-slate-600 font-black text-sm uppercase tracking-widest">Submitting your listing...</p>
                                </div>
                            )}

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
                                <Elements stripe={stripePromise}>
                                    <SellYourCarFlow
                                        form={form}
                                        onComplete={(data) => {
                                            form.post(route("sell.car.store"));
                                        }}
                                    />
                                </Elements>
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
