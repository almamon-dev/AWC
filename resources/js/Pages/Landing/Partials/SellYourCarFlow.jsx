import React, { useState } from "react";
import {
    MapPin,
    Camera,
    ClipboardCheck,
    ChevronLeft,
    Save,
    CheckCircle2,
    Upload,
    Plus,
    X,
    AlertCircle,
    Info,
    ShieldCheck,
    CreditCard,
} from "lucide-react";

// Sub-components for steps
import StepLocationContact from "./Steps/StepLocationContact";
import StepPhotosUpload from "./Steps/StepPhotosUpload";
import StepVehicleCondition from "./Steps/StepVehicleCondition";
import StepReviewListing from "./Steps/StepReviewListing";
import StepPayment from "./Steps/StepPayment";

const SellYourCarFlow = ({ initialData, onComplete, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        ...initialData,
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
        photos: {
            exterior: {},
            interior: {},
            damage: [],
        },
        condition: {
            hasAccident: false,
            accidentDetails: "",
            hasMechanicalIssues: false,
            mechanicalDetails: "",
            symptoms: {},
        },
    });

    const handleNext = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        } else {
            onComplete(formData);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateFormData = (section, data) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                ...data,
            },
        }));
    };

    const renderStepIndicator = () => {
        const steps = [
            { id: 1, name: "Location", icon: MapPin },
            { id: 2, name: "Photos", icon: Camera },
            { id: 3, name: "Condition", icon: ClipboardCheck },
        ];

        if (currentStep > 3) return null;

        return (
            <div className="mb-4 mt-2 relative">
                {/* Connector Line Background */}
                <div className="absolute top-4 left-0 w-full h-[2px] bg-gray-100 -z-0"></div>

                {/* Active Connector Line */}
                <div
                    className="absolute top-4 left-0 h-[2px] bg-[#00E5FF] -z-0 transition-all duration-500"
                    style={{
                        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                    }}
                ></div>

                <div className="flex justify-between items-start relative z-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = currentStep === step.id;
                        const isCompleted = currentStep > step.id;

                        return (
                            <div
                                key={step.id}
                                className={`flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 ${
                                    index === 0
                                        ? "items-start"
                                        : index === steps.length - 1
                                          ? "items-end"
                                          : "items-center"
                                }`}
                                onClick={() =>
                                    isCompleted && setCurrentStep(step.id)
                                }
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                                        isActive
                                            ? "bg-[#1E293B] border-[#1E293B] text-white shadow-lg shadow-gray-200 scale-110"
                                            : isCompleted
                                              ? "bg-[#00E5FF] border-[#00E5FF] text-[#1E293B]"
                                              : "bg-white border-gray-100 text-gray-300"
                                    }`}
                                >
                                    {isCompleted ? (
                                        <CheckCircle2
                                            size={14}
                                            className="stroke-[3]"
                                        />
                                    ) : (
                                        <Icon
                                            size={14}
                                            className={
                                                isActive
                                                    ? "stroke-[3]"
                                                    : "stroke-[2]"
                                            }
                                        />
                                    )}
                                </div>
                                <div
                                    className={`flex flex-col ${
                                        index === 0
                                            ? "items-start"
                                            : index === steps.length - 1
                                              ? "items-end"
                                              : "items-center"
                                    }`}
                                >
                                    <span
                                        className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                                            isActive
                                                ? "text-[#1E293B]"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        {step.name}
                                    </span>
                                    {isActive && (
                                        <div className="w-4 h-0.5 bg-[#00E5FF] rounded-full mt-0.5 animate-in slide-in-from-bottom-1" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full bg-white select-none">
            {/* Header Area */}
            {currentStep < 5 && (
                <div className="flex items-center justify-between mb-3 pb-2">
                    <h2 className="text-[20px] font-black text-[#475569]">
                        Sell Your Car
                    </h2>
                    {currentStep <= 3 && (
                        <div className="bg-gray-50 border border-gray-100 px-2 py-0.5 rounded text-[10px] font-black text-gray-400 uppercase">
                            Step {currentStep}/3
                        </div>
                    )}
                </div>
            )}

            {/* Step Indicator */}
            {renderStepIndicator()}

            {/* Content Area - Compact Card */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="rounded-2xl p-4 bg-white mb-4">
                    {currentStep === 1 && (
                        <StepLocationContact
                            data={formData}
                            updateData={updateFormData}
                        />
                    )}
                    {currentStep === 2 && (
                        <StepPhotosUpload
                            data={formData}
                            updateData={updateFormData}
                        />
                    )}
                    {currentStep === 3 && (
                        <StepVehicleCondition
                            data={formData}
                            updateData={updateFormData}
                        />
                    )}
                    {currentStep === 4 && <StepReviewListing data={formData} />}
                    {currentStep === 5 && (
                        <StepPayment data={formData} onComplete={handleNext} />
                    )}
                </div>

                {/* Privacy Notice - Compact */}
                {currentStep <= 3 && (
                    <div className="bg-[#E0F7FA]/40 rounded-sm p-3 border border-[#B2EBF2]/30 mb-4">
                        <p className="text-[11px] font-semibold text-[#006064] leading-tight">
                            <span className="font-black underline decoration-cyan-200 decoration-2">
                                Privacy:
                            </span>{" "}
                            Your contact information is only shared with dealers
                            who make offers. We never sell your data.
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Navigation - Premium Style */}
            {currentStep < 5 && (
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between px-2">
                    <button
                        onClick={handleBack}
                        className={`px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all ${
                            currentStep === 1 ? "invisible" : ""
                        }`}
                    >
                        Previous
                    </button>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleNext}
                            className="bg-[#00F3FF] hover:bg-[#00E5FF] text-[#1E293B] px-7 py-2.5 rounded-lg font-black text-[13px] shadow-[0_8px_16px_-6px_rgba(0,243,255,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            {currentStep === 4 ? "Submit Listing" : "Next"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SellYourCarFlow;
