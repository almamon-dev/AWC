import React, { useState } from "react";
import { CreditCard, ShieldCheck, Lock, Check } from "lucide-react";

const StepPayment = ({ data, onComplete }) => {
    const [paymentMethod, setPaymentMethod] = useState("cards");

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-6">
            <div className="mb-4">
                <h3 className="text-[17px] font-black text-[#475569] leading-tight">
                    Complete Your Payment
                </h3>
                <p className="text-[11px] font-bold text-gray-400 mt-0.5">
                    Secure checkout powered by Stripe
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                {/* Left side: Payment details */}
                <div className="lg:col-span-8 border border-gray-200 rounded-sm p-6 bg-white shadow-sm space-y-6">
                    <div>
                        <h2 className="text-[20px] font-black text-[#1E293B] mb-1">
                            Payment
                        </h2>
                        <p className="text-[#64748B] text-[13px] font-medium">
                            Complete your booking securely...
                        </p>
                    </div>

                    {/* Customer Info Box */}
                    <div className="border border-gray-200 rounded-sm p-5 bg-white grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Full Name
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B]">
                                John Smith
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Email
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B]">
                                john@example.com
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Phone
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B]">
                                (416) 555-0123
                            </p>
                        </div>
                    </div>

                    {/* Payment Details Form */}
                    <div className="space-y-4">
                        <h4 className="text-[13px] font-bold text-[#475569]">
                            Payment Details
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jons"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Card number
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="1234 1234 1234 1234"
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 items-center grayscale opacity-60">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                                            className="h-2.5"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                            className="h-4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Expiry
                                </label>
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Country
                                </label>
                                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%206L8%2010L12%206%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat">
                                    <option>Canada</option>
                                    <option>USA</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Postal code
                                </label>
                                <input
                                    type="text"
                                    placeholder="90210"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    {/* T&C */}
                    <label className="flex items-center gap-3 cursor-pointer group pt-2">
                        <div className="w-5 h-5 rounded border-2 border-[#00E5FF] flex items-center justify-center bg-white">
                            <Check
                                size={14}
                                className="text-[#00E5FF] stroke-[4]"
                            />
                        </div>
                        <span className="text-[12px] font-medium text-gray-500">
                            I agree to the Terms & Conditions and authorize this
                            payment
                        </span>
                    </label>

                    {/* Action Button */}
                    <button
                        onClick={onComplete}
                        className="w-full bg-[#00F3FF] hover:bg-[#00E5FF] text-[#1E293B] py-4 rounded-sm font-black text-[17px] shadow-[0_8px_20px_-8px_rgba(0,243,255,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        Complete Payment • $29.99
                    </button>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-between px-2 text-[10px] font-bold text-[#94A3B8] pt-2">
                        <div className="flex items-center gap-1.5">
                            <Lock size={12} className="text-[#94A3B8]" />
                            SSL Encrypted
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck size={12} className="text-[#94A3B8]" />
                            PCI Compliant
                        </div>
                        <div className="flex items-center gap-1.5 uppercase">
                            <span className="text-[12px] italic opacity-50 font-black tracking-tighter">
                                s
                            </span>
                            Powered by Stripe
                        </div>
                    </div>
                </div>

                {/* Right side: Order Summary */}
                <div className="lg:col-span-4 border border-gray-200 rounded-sm p-6 bg-white shadow-sm h-fit">
                    <h2 className="text-[16px] font-black text-[#1E293B] mb-6">
                        Order Summary
                    </h2>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-sm font-bold border-b border-gray-50 pb-5">
                            <span className="text-gray-500">Total Post</span>
                            <span className="text-[#1E293B]">1 Vehicle</span>
                        </div>

                        <div className="space-y-4 pt-1">
                            <h4 className="text-[14px] font-black text-[#1E293B]">
                                Price Details
                            </h4>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[13px] font-bold">
                                    <span className="text-gray-500 font-medium">
                                        Listing Fee
                                    </span>
                                    <span className="text-[#1E293B]">
                                        CAD 60$
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-[13px] font-bold">
                                    <span className="text-cyan-500 font-medium">
                                        Discount{" "}
                                        <span className="ml-1">50%</span>
                                    </span>
                                    <span className="text-cyan-600">
                                        CAD 30.01$
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-[13px] font-bold">
                                    <span className="text-gray-500 font-medium">
                                        Tax (HST)
                                    </span>
                                    <span className="text-[#1E293B]">
                                        CAD 0.00$
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                            <span className="text-base font-black text-[#1E293B]">
                                Total:
                            </span>
                            <span className="text-xl font-black text-[#1E293B]">
                                CAD 29.99$
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepPayment;
