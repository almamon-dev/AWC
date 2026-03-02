import React from "react";

const StepLocationContact = ({ data, updateData }) => {
    const provinces = [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
    ];

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        updateData("location", { [name]: value });
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        updateData("contact", { [name]: value });
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <div className="px-1">
                <div className="mb-4">
                    <h3 className="text-[19px] font-black text-[#1E293B]">
                        Location & Contact
                    </h3>
                    <p className="text-[12px] font-medium text-gray-400">
                        Where can we pick up your vehicle?
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Location Section */}
                    <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm">
                        <div className="space-y-5">
                            <h3 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Location Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                        Province
                                    </label>
                                    <select
                                        name="province"
                                        value={data.location.province}
                                        onChange={handleLocationChange}
                                        className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%206L8%2010L12%206%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[right_16px_center] bg-no-repeat"
                                    >
                                        <option value="">
                                            Select Province
                                        </option>
                                        {provinces.map((p) => (
                                            <option key={p} value={p}>
                                                {p}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={data.location.city}
                                        onChange={handleLocationChange}
                                        placeholder="Toronto, etc."
                                        className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={data.location.postalCode}
                                        onChange={handleLocationChange}
                                        placeholder="M5H 2N2"
                                        className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={data.location.address}
                                        onChange={handleLocationChange}
                                        placeholder="Street Name, Apt..."
                                        className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm">
                        <div className="space-y-5">
                            <h3 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={data.contact.fullName}
                                        onChange={handleContactChange}
                                        placeholder="John Smith"
                                        className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-300"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.contact.email}
                                            onChange={handleContactChange}
                                            placeholder="john@example.com"
                                            className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-300"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest ml-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={data.contact.phone}
                                            onChange={handleContactChange}
                                            placeholder="(416) 555-0123"
                                            className="w-full h-[48px] px-4 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-[14px] font-medium text-slate-700 placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepLocationContact;
