import React from "react";
import { Info, ShieldCheck } from "lucide-react";

const StepReviewListing = ({ data }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
            <div>
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900">
                        Review Your Listing
                    </h3>
                    <p className="text-sm text-gray-500">
                        Please review your information before proceeding to
                        payment.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Vehicle Details */}
                    <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                        <div className="grid grid-cols-2 gap-y-4">
                            <div>
                                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                                    Vehicle Details:
                                </h4>
                                <p className="text-sm font-bold text-gray-700">
                                    {data.make} {data.model} {data.trim} {data.year}
                                </p>
                                <p className="text-[11px] text-gray-500 font-medium">
                                    Transmission: {data.transmission}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-700">
                                    Mileage: {data.kilometres} KM
                                </p>
                                <p className="text-[11px] text-gray-500 font-medium">
                                    Condition: {data.condition.hasMechanicalIssues ? "Has Issues" : "Runs Perfectly"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location & Contact */}
                    <div className="border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/20">
                            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                Location
                            </h4>
                        </div>
                        <div className="p-6">
                            <p className="text-sm font-medium text-gray-700">
                                {data.location.address}, {data.location.city}, {data.location.province} {data.location.postalCode}
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/20">
                            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                Contact
                            </h4>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-medium text-gray-700">
                                    {data.contact.fullName || "John Smith"}
                                </p>
                                <p className="text-sm font-medium text-gray-400">
                                    {data.contact.email || "john@example.com"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tip Box */}
                    <div className="bg-cyan-50/50 rounded-2xl p-6 border border-cyan-100 flex gap-4">
                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0 text-cyan-600">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="space-y-2">
                            <h5 className="text-sm font-bold text-cyan-900 leading-none">
                                What happens next?
                            </h5>
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2 text-[11px] font-medium text-cyan-700">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                    Complete payment process
                                </li>
                                <li className="flex items-center gap-2 text-[11px] font-medium text-cyan-700">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                    Your listing goes live to hundreds of
                                    dealers
                                </li>
                                <li className="flex items-center gap-2 text-[11px] font-medium text-cyan-700">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                    Receive offers within 24-48 hours
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepReviewListing;
