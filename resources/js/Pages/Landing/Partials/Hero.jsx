import React, { useState } from "react";
import {
    ChevronDown,
    ShieldCheck,
    MapPin,
    DollarSign,
    Contact,
    Route,
    Workflow,
    X,
    Search,
} from "lucide-react";
import { CAR_MAKES } from "@/constants/carMakes";

const Hero = () => {
    const [activeTab, setActiveTab] = useState("vin");
    const [isVinModalOpen, setIsVinModalOpen] = useState(false);
    const [isMakeDropdownOpen, setIsMakeDropdownOpen] = useState(false);
    const [selectedMake, setSelectedMake] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMakes = CAR_MAKES.map((group) => ({
        ...group,
        items: group.items.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    })).filter((group) => group.items.length > 0);

    return (
        <section className="relative min-h-[790px] flex items-center pt-16 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/landing/Hero.png")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 backdrop-blur-[1px]"></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="text-white space-y-6 animate-in slide-in-from-left duration-700">
                    <div className="flex gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        Get the Best Dealer <br />
                        Offers for Your Car
                    </h1>

                    <p className="text-xl text-gray-300 font-medium">
                        Pay once. Dealers compete. You choose.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(34,211,238,0.4)]">
                            Get An Offer
                        </button>
                        <button className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 px-8 py-3 rounded-full font-bold text-sm transition-all">
                            Contact Us
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-5">
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#22D3EE]">
                            <ShieldCheck size={18} />
                            <span className="text-white/90">
                                Secure Payment
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#22D3EE]">
                            <MapPin size={18} />
                            <span className="text-white/90">
                                Canada-Wide Dealers
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-[#22D3EE]">
                            <DollarSign size={18} />
                            <span className="text-white/90">No Commission</span>
                        </div>
                    </div>
                </div>

                {/* Main Hero Card */}
                <div className="lg:ml-auto w-full max-w-[450px]">
                    <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col">
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
                                                placeholder="e.g., 1P3ES22C6WD383852"
                                                className="w-full pl-10 pr-4 py-3.5 bg-white border border-[#E2E8F0] rounded-md focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-[#1E293B] outline-none placeholder:text-[#CBD5E1] font-medium text-sm"
                                            />
                                        </div>
                                        <button
                                            onClick={() =>
                                                setIsVinModalOpen(true)
                                            }
                                            className="mt-2 text-[#0891B2] text-sm font-bold underline decoration-1 underline-offset-4 hover:text-[#06b6d4] transition-all"
                                        >
                                            Where is my VIN?
                                        </button>
                                    </div>

                                    <div>
                                        <label className="block text-[13px] font-bold text-[#475569] mb-2 font-sans">
                                            Kilometre's
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                                                <Route size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="e.g., 85000"
                                                className="w-full pl-10 pr-4 py-3.5 bg-white border border-[#E2E8F0] rounded-md focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-[#1E293B] outline-none placeholder:text-[#CBD5E1] font-medium text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[13px] font-bold text-[#475569] mb-2 font-sans">
                                            Transmission
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                                                <Workflow
                                                    size={18}
                                                    className="rotate-90"
                                                />
                                            </div>
                                            <select className="w-full pl-10 pr-4 py-3.5 bg-white border border-[#E2E8F0] rounded-md focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-[#1E293B] outline-none appearance-none font-medium text-sm cursor-pointer">
                                                <option>
                                                    Select Transmission
                                                </option>
                                                <option>Automatic</option>
                                                <option>Manual</option>
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
                                        "Kilometre's",
                                        "Transmission",
                                    ].map((label) => (
                                        <div key={label}>
                                            <label className="block text-[13px] font-bold text-[#475569] mb-1.5 font-sans">
                                                {label}
                                            </label>
                                            <div className="relative">
                                                {label === "Model" ||
                                                label === "Trim" ||
                                                label === "Kilometre's" ? (
                                                    <input
                                                        type="text"
                                                        placeholder={`e.g., ${label === "Model" ? "Accord" : label === "Trim" ? "EX" : "85000"}`}
                                                        className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-md text-sm outline-none placeholder:text-[#CBD5E1] font-medium focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 text-[#1E293B]"
                                                    />
                                                ) : label === "Transmission" ? (
                                                    <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-md text-sm outline-none appearance-none text-[#94A3B8] font-medium cursor-pointer focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400">
                                                        <option>
                                                            Select Transmission
                                                        </option>
                                                        <option>
                                                            Automatic
                                                        </option>
                                                        <option>Manual</option>
                                                    </select>
                                                ) : label === "Year" ? (
                                                    <select className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-md text-sm outline-none appearance-none text-[#94A3B8] font-medium cursor-pointer focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400">
                                                        <option>
                                                            Select Year
                                                        </option>
                                                        {Array.from(
                                                            {
                                                                length:
                                                                    2025 -
                                                                    1990 +
                                                                    1,
                                                            },
                                                            (_, i) => 2025 - i,
                                                        ).map((year) => (
                                                            <option
                                                                key={year}
                                                                value={year}
                                                            >
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
                                                            className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-md text-sm text-left flex justify-between items-center font-medium text-[#94A3B8] focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 outline-none"
                                                        >
                                                            {selectedMake ||
                                                                "Select Make"}
                                                            <ChevronDown
                                                                size={16}
                                                                className={`transition-transform duration-200 ${isMakeDropdownOpen ? "rotate-180" : ""}`}
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
                                                                        setSearchQuery(
                                                                            "",
                                                                        );
                                                                    }}
                                                                ></div>
                                                                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#E2E8F0] rounded-md shadow-lg z-[102] flex flex-col overflow-hidden">
                                                                    {/* Search Input */}
                                                                    <div className="flex items-center px-3 border-b border-[#E2E8F0] bg-white">
                                                                        <Search
                                                                            size={
                                                                                14
                                                                            }
                                                                            className="text-gray-400 mr-2"
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search make..."
                                                                            value={
                                                                                searchQuery
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                setSearchQuery(
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                            className="w-full py-2 text-sm outline-none bg-transparent placeholder:text-gray-400 font-normal"
                                                                            autoFocus
                                                                        />
                                                                    </div>

                                                                    {/* Scrollable List */}
                                                                    <div className="max-h-52 overflow-y-auto custom-scrollbar">
                                                                        {filteredMakes.length >
                                                                        0 ? (
                                                                            filteredMakes.map(
                                                                                (
                                                                                    group,
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            group.label
                                                                                        }
                                                                                    >
                                                                                        <div className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 border-y border-[#E2E8F0] uppercase tracking-wider">
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
                                                                                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#0891B2] transition-colors"
                                                                                                >
                                                                                                    {
                                                                                                        make
                                                                                                    }
                                                                                                </button>
                                                                                            ),
                                                                                        )}
                                                                                    </div>
                                                                                ),
                                                                            )
                                                                        ) : (
                                                                            <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                                                                No
                                                                                results
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
                                <button className="w-full bg-[#00E5FF] hover:bg-[#00D1EB] text-black py-4 rounded-xl font-bold text-[15px] shadow-[0_8px_20px_-5px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-[0.98]">
                                    Get Your Highest Offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* VIN Help Modal - ULTRA COMPACT */}
            {isVinModalOpen && (
                <div
                    onClick={() => setIsVinModalOpen(false)}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-10 p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white w-full max-w-[560px] rounded-2xl p-6 shadow-xl animate-in zoom-in duration-300 overflow-y-auto max-h-[95vh]"
                    >
                        {/* Header Link */}
                        <div className="mb-2">
                            <button className="text-[#0891B2] text-xs font-bold underline underline-offset-4 decoration-2">
                                Where is my VIN?
                            </button>
                        </div>

                        {/* Car Content */}
                        <div className="space-y-3">
                            {/* Car Image with Lines */}
                            <div className="relative py-1">
                                <img
                                    src="/images/landing/vin-car.png"
                                    alt="VIN Helper"
                                    className="w-full h-auto grayscale opacity-90 mx-auto max-w-[320px]"
                                />

                                <div className="absolute inset-0">
                                    <div className="absolute top-[28%] left-[30%]">
                                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
                                        <div className="w-0.5 h-[120px] bg-[#00E5FF]"></div>
                                    </div>

                                    <div className="absolute top-[48%] left-[53%]">
                                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
                                        <div className="w-0.5 h-[80px] bg-[#00E5FF]"></div>
                                    </div>

                                    <div className="absolute bottom-[20%] left-[16%] right-[16%] h-0.5 bg-[#00E5FF]"></div>
                                </div>
                            </div>

                            {/* VIN Example Box */}
                            <div className="flex justify-center -mt-4">
                                <div className="border-2 border-[#00E5FF] rounded-xl px-4 py-2 bg-white min-w-[300px] text-center">
                                    <span className="text-[#334155] text-2xl font-bold tracking-wider leading-none">
                                        1P3ES22C6WD383852
                                    </span>
                                </div>
                            </div>

                            {/* Modal Info Text */}
                            <div className="space-y-3 pt-1">
                                <h2 className="text-[24px] font-bold text-[#334155] leading-tight">
                                    You can find your VIN
                                </h2>

                                <div className="space-y-2">
                                    <h4 className="text-[16px] font-bold text-[#334155]">
                                        Within the vehicle:
                                    </h4>
                                    <ul className="space-y-1 ml-1 text-sm">
                                        <li className="flex items-center gap-2.5 text-gray-500 font-medium text-[15px]">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                            Driver's side dashboard
                                        </li>
                                        <li className="flex items-center gap-2.5 text-gray-500 font-medium text-[15px]">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                            Inside driver's door
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-[16px] font-bold text-[#334155]">
                                        In documents:
                                    </h4>
                                    <ul className="space-y-1 ml-1 text-sm">
                                        <li className="flex items-center gap-2.5 text-gray-500 font-medium text-[15px]">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                            Ownership document
                                        </li>
                                        <li className="flex items-center gap-2.5 text-gray-500 font-medium text-[15px]">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                            Insurance policy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
