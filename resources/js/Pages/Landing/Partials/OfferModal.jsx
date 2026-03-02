import React, { useState } from "react";
import Modal from "@/Components/Modal";
import OfferForm from "./OfferForm";
import SellYourCarFlow from "./SellYourCarFlow";

const OfferModal = ({ show, onClose, onVinHelpClick, preFilledData }) => {
    const [view, setView] = useState("form");
    const [initialData, setInitialData] = useState({});

    React.useEffect(() => {
        if (show && preFilledData) {
            setInitialData(preFilledData);
            setView("flow");
        }
    }, [show, preFilledData]);

    const handleFormSubmit = (data) => {
        setInitialData(data);
        setView("flow");
    };

    const handleClose = () => {
        onClose();
        // Reset view after modal closes
        setTimeout(() => setView("form"), 300);
    };

    return (
        <Modal
            show={show}
            onClose={handleClose}
            maxWidth={view === "flow" ? "2xl" : "lg"}
        >
            <div
                className={`bg-white rounded-xl overflow-hidden relative transition-all duration-500`}
            >
                <div className="p-4 pt-8 md:p-6 md:pt-10">
                    {view === "form" ? (
                        <>
                            <div className="mb-6 px-1 text-center">
                                <h2 className="text-[24px] font-black text-[#475569] leading-tight mb-2">
                                    Get Your Highest Offer
                                </h2>
                                <p className="text-gray-400 text-[13px] font-medium max-w-[280px] mx-auto">
                                    Tell us about your car to receive instant
                                    quotes from local dealers.
                                </p>
                            </div>
                            <OfferForm
                                onVinHelpClick={onVinHelpClick}
                                onFormSubmit={handleFormSubmit}
                            />
                        </>
                    ) : (
                        <SellYourCarFlow
                            initialData={initialData}
                            onClose={handleClose}
                            onComplete={(finalData) => {
                                console.log("Flow Complete", finalData);
                                handleClose();
                            }}
                        />
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default OfferModal;
