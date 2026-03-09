import React, { useState } from "react";
import {
    ChevronDown,
    Search,
    Route,
    Workflow,
    Contact,
    Check,
} from "lucide-react";
import { CAR_MAKES } from "@/constants/carMakes";

const OfferForm = ({ onVinHelpClick, onFormSubmit }) => {
    const [activeTab, setActiveTab] = useState("vin");
    const [isLoading, setIsLoading] = useState(false);
    const [isMakeDropdownOpen, setIsMakeDropdownOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const [formData, setFormData] = useState({
        vin: "",
        kilometres: "",
        transmission: "Automatic",
        year: "",
        make: "",
        model: "",
        trim: "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const filteredMakes = CAR_MAKES.map((group) => ({
        ...group,
        items: group.items.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    })).filter((group) => group.items.length > 0);

    const handleGetOffer = () => {
        setIsLoading(true);
        // Simulate an API call or just pass data
        setTimeout(() => {
            setIsLoading(false);
            if (onFormSubmit) {
                const submissionData = {
                    tab: activeTab,
                    transmission: formData.transmission,
                    kilometres: formData.kilometres,
                };

                if (activeTab === "vin") {
                    submissionData.vin = formData.vin;
                    // Reset basics
                    submissionData.year = "";
                    submissionData.make = "";
                    submissionData.model = "";
                    submissionData.trim = "";
                } else {
                    submissionData.vin = "";
                    submissionData.year = formData.year;
                    submissionData.make = selectedMake;
                    submissionData.model = formData.model;
                    submissionData.trim = formData.trim;
                }

                onFormSubmit(submissionData);
            }
        }, 800);
    };

    return (
        <div className="flex-1 flex flex-col min-h-0">
            {/* Tab Switcher */}
            <div className="bg-[#E2E8F0] rounded-sm p-1 flex mb-5">
                <button
                    onClick={() => setActiveTab("vin")}
                    className={`flex-1 py-2 text-center font-bold rounded-md text-sm transition-all ${
                        activeTab === "vin"
                            ? "text-[#0891B2] bg-white shadow-sm"
                            : "text-[#64748B]"
                    }`}
                >
                    VIN
                </button>
                <button
                    onClick={() => setActiveTab("basics")}
                    className={`flex-1 py-2 text-center font-bold rounded-md text-sm transition-all ${
                        activeTab === "basics"
                            ? "text-[#0891B2] bg-white shadow-sm"
                            : "text-[#64748B]"
                    }`}
                >
                    Vehicle Basics
                </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 flex flex-col min-h-0">
                {activeTab === "vin" ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div>
                            <label className="block text-[13px] font-bold text-[#475569] mb-2 font-sans">
                                Vehicle Identification Number (VIN)
                            </label>
                            <div className="relative">
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                                    <Contact size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={formData.vin}
                                    onChange={(e) =>
                                        handleChange("vin", e.target.value)
                                    }
                                    placeholder="e.g., 1P3ES22C6WD383852"
                                    className="w-full pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white transition-all text-[#1E293B] outline-none placeholder:text-gray-400 font-medium text-sm"
                                />
                            </div>
                            <button
                                onClick={onVinHelpClick}
                                className="mt-2 text-[#0891B2] text-sm font-bold underline decoration-1 underline-offset-4 hover:text-[#06b6d4] transition-all"
                            >
                                Where is my VIN?
                            </button>
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold text-[#475569] mb-2 font-sans">
                                Kilometres
                            </label>
                            <div className="relative">
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                                    <Route size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={formData.kilometres}
                                    onChange={(e) =>
                                        handleChange(
                                            "kilometres",
                                            e.target.value,
                                        )
                                    }
                                    placeholder="e.g., 85000"
                                    className="w-full pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white transition-all text-[#1E293B] outline-none placeholder:text-gray-400 font-medium text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold text-[#475569] mb-2 font-sans">
                                Transmission
                            </label>
                            <div className="relative">
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                                    <Workflow size={18} className="rotate-90" />
                                </div>
                                <select
                                    value={formData.transmission}
                                    onChange={(e) =>
                                        handleChange(
                                            "transmission",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white transition-all text-[#1E293B] outline-none appearance-none font-medium text-sm cursor-pointer"
                                >
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        {[
                            "Year",
                            "Make",
                            "Model",
                            "Trim",
                            "Kilometres",
                            "Transmission",
                        ].map((label) => (
                            <div key={label}>
                                <label className="block text-[13px] font-bold text-[#475569] mb-1.5 font-sans">
                                    {label}
                                </label>
                                <div className="relative">
                                    {label === "Model" ||
                                    label === "Trim" ||
                                    label === "Kilometres" ? (
                                        <input
                                            type="text"
                                            value={
                                                formData[label.toLowerCase()]
                                            }
                                            onChange={(e) =>
                                                handleChange(
                                                    label.toLowerCase(),
                                                    e.target.value,
                                                )
                                            }
                                            placeholder={`e.g., ${label === "Model" ? "Accord" : label === "Trim" ? "EX" : "85000"}`}
                                            className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm outline-none placeholder:text-gray-400 font-medium focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white text-[#1E293B] transition-all"
                                        />
                                    ) : label === "Transmission" ? (
                                        <select
                                            value={formData.transmission}
                                            onChange={(e) =>
                                                handleChange(
                                                    "transmission",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm outline-none appearance-none text-[#64748B] font-semibold cursor-pointer focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white transition-all"
                                        >
                                            <option value="Automatic">
                                                Automatic
                                            </option>
                                            <option value="Manual">
                                                Manual
                                            </option>
                                        </select>
                                    ) : label === "Year" ? (
                                        <select
                                            value={formData.year}
                                            onChange={(e) =>
                                                handleChange(
                                                    "year",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm outline-none appearance-none text-[#64748B] font-semibold cursor-pointer focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white transition-all"
                                        >
                                            <option value="">
                                                Select Year
                                            </option>
                                            {Array.from(
                                                {
                                                    length:
                                                        new Date().getFullYear() -
                                                        1990 +
                                                        1,
                                                },
                                                (_, i) =>
                                                    new Date().getFullYear() -
                                                    i,
                                            ).map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsMakeDropdownOpen(
                                                        !isMakeDropdownOpen,
                                                    )
                                                }
                                                className="w-full h-[45px] px-4 bg-slate-50 border border-slate-200 rounded-sm text-sm text-left flex justify-between items-center font-medium text-slate-700 hover:bg-white focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500 focus:bg-white outline-none transition-all"
                                            >
                                                <span
                                                    className={
                                                        selectedMake
                                                            ? "text-slate-900"
                                                            : "text-slate-400"
                                                    }
                                                >
                                                    {selectedMake ||
                                                        "Select Make"}
                                                </span>
                                                <ChevronDown
                                                    size={16}
                                                    className={`text-slate-400 transition-transform duration-200 ${isMakeDropdownOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            {isMakeDropdownOpen && (
                                                <>
                                                    <div
                                                        className="fixed inset-0 z-[101]"
                                                        onClick={() => {
                                                            setIsMakeDropdownOpen(
                                                                false,
                                                            );
                                                            setSearchQuery("");
                                                        }}
                                                    ></div>
                                                    <div className="absolute top-full left-0 w-full mt-1.5 bg-white border border-slate-200 rounded-sm shadow-xl z-[102] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                                        {/* Search Input */}
                                                        <div className="flex items-center px-3 border-b border-slate-100 bg-white sticky top-0">
                                                            <Search
                                                                size={14}
                                                                className="text-slate-400 mr-2"
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder="Search make..."
                                                                value={
                                                                    searchQuery
                                                                }
                                                                onChange={(e) =>
                                                                    setSearchQuery(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                                className="w-full py-2.5 text-sm outline-none focus:outline-none focus:ring-0 bg-transparent placeholder:text-slate-400 font-medium text-slate-900"
                                                                autoFocus
                                                            />
                                                        </div>

                                                        {/* Scrollable List */}
                                                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                                            {filteredMakes.length >
                                                            0 ? (
                                                                filteredMakes.map(
                                                                    (group) => (
                                                                        <div
                                                                            key={
                                                                                group.label
                                                                            }
                                                                        >
                                                                            <div className="px-3 py-1.5 bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-y border-slate-100">
                                                                                {
                                                                                    group.label
                                                                                }
                                                                            </div>
                                                                            {group.items.map(
                                                                                (
                                                                                    make,
                                                                                ) => (
                                                                                    <button
                                                                                        key={
                                                                                            make
                                                                                        }
                                                                                        type="button"
                                                                                        onClick={() => {
                                                                                            setSelectedMake(
                                                                                                make,
                                                                                            );
                                                                                            setIsMakeDropdownOpen(
                                                                                                false,
                                                                                            );
                                                                                            setSearchQuery(
                                                                                                "",
                                                                                            );
                                                                                        }}
                                                                                        className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-cyan-50 hover:text-cyan-600 flex items-center justify-between ${selectedMake === make ? "text-cyan-600 bg-cyan-50/50" : "text-slate-600"}`}
                                                                                    >
                                                                                        {
                                                                                            make
                                                                                        }
                                                                                        {selectedMake ===
                                                                                            make && (
                                                                                            <Check
                                                                                                size={
                                                                                                    14
                                                                                                }
                                                                                                strokeWidth={
                                                                                                    3
                                                                                                }
                                                                                            />
                                                                                        )}
                                                                                    </button>
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    ),
                                                                )
                                                            ) : (
                                                                <div className="px-4 py-10 text-center text-slate-400 text-sm italic">
                                                                    No makes
                                                                    found
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto pt-5">
                    <button
                        onClick={handleGetOffer}
                        disabled={isLoading}
                        className="w-full bg-[#00E5FF] hover:bg-[#00D1EB] text-black py-4 rounded-xl font-bold text-[15px] shadow-[0_8px_20px_-5px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                Processing...
                            </>
                        ) : (
                            "Get Your Highest Offer"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferForm;
