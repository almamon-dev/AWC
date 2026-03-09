import React, { useState, useEffect } from "react";
import { CreditCard, ShieldCheck, Lock, Check, AlertCircle } from "lucide-react";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const StepPayment = ({ data, onComplete }) => {
    const stripe = useStripe();
    const elements = useElements();
    
    const [name, setName] = useState("");
    const [country, setCountry] = useState("Canada");
    const [postalCode, setPostalCode] = useState("");
    
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardType, setCardType] = useState("unknown");

    const handleStripeChange = (name, event) => {
        setErrors((prev) => ({
            ...prev,
            [name]: event.error ? event.error.message : "",
        }));
        
        if (name === "number" && event.brand) {
            setCardType(event.brand);
        }
    };

    const handleBlur = (name) => {
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handlePaymentSubmit = async (e) => {
        if (e) e.preventDefault();
        
        if (!stripe || !elements) return;

        setIsProcessing(true);

        const cardElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
                name: name,
                email: data.contact.email,
                phone: data.contact.phone,
                address: {
                    postal_code: postalCode,
                    country: country === "Canada" ? "CA" : "US",
                },
            },
        });

        if (error) {
            setErrors((prev) => ({ ...prev, stripe: error.message }));
            setIsProcessing(false);
        } else {
            // Success! Send paymentMethod.id to backend
            onComplete({ payment_method_id: paymentMethod.id });
        }
    };

    const renderInputFeedback = (name) => {
        const hasError = (touched[name] || name === 'stripe') && errors[name];
        const isValid = touched[name] && !errors[name] && (name !== 'stripe'); // Simplification
        
        if (hasError) {
            return (
                <p className="text-[10px] text-red-500 font-bold ml-1 mt-1 animate-in fade-in flex items-center gap-1">
                    <AlertCircle size={12} /> {errors[name]}
                </p>
            );
        }
        return null;
    };
    
    const elementOptions = {
        style: {
            base: {
                fontSize: "14px",
                color: "#1E293B",
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                "::placeholder": {
                    color: "#CBD5E1",
                },
            },
            invalid: {
                color: "#EF4444",
            },
        },
    };

    const getElementClass = (fieldName) => {
        const hasError = touched[fieldName] && errors[fieldName];
        let baseClass = "w-full px-4 py-2.5 bg-white border rounded-sm outline-none transition-all ";
        
        if (hasError) return baseClass + "border-red-400 ring-1 ring-red-400";
        if (touched[fieldName] && !errors[fieldName]) return baseClass + "border-green-400 bg-green-50/10";
        return baseClass + "border-gray-200 focus-within:ring-1 focus-within:ring-cyan-400 focus-within:border-cyan-400";
    };

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
                <div className="lg:col-span-8 border border-gray-200 rounded-sm p-6 bg-white shadow-sm space-y-6 relative overflow-hidden">
                    {isProcessing && (
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
                             <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                             <p className="text-[#1E293B] font-black text-xs uppercase tracking-widest">Processing Payment...</p>
                        </div>
                    )}

                    <div>
                        <h2 className="text-[20px] font-black text-[#1E293B] mb-1">
                            Payment
                        </h2>
                        <p className="text-[#64748B] text-[13px] font-medium">
                            Complete your booking securely using your credit or
                            debit card.
                        </p>
                    </div>

                    {/* Customer Info Box */}
                    <div className="border border-gray-200 rounded-sm p-5 bg-white grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Full Name
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B] truncate">
                                {data.contact.fullName}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Email
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B] truncate">
                                {data.contact.email}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Phone
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B] truncate">
                                {data.contact.phone}
                            </p>
                        </div>
                    </div>

                    {/* Payment Details Form */}
                    <div className="space-y-4">
                        <h4 className="text-[13px] font-bold text-[#475569]">
                            Card Information
                        </h4>
                        
                        {errors.stripe && (
                            <div className="bg-red-50 border border-red-100 p-3 rounded flex items-center gap-3 text-red-600 text-xs font-bold animate-in slide-in-from-top-2">
                                <AlertCircle size={16} />
                                {errors.stripe}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => handleBlur("name")}
                                    placeholder="Full name as shown on card"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-sm font-medium"
                                />
                            </div>

                            <div className="col-span-2 space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Card number
                                </label>
                                <div className="relative">
                                    <div className={getElementClass("number")}>
                                        <CardNumberElement 
                                            options={elementOptions} 
                                            onChange={(e) => handleStripeChange("number", e)}
                                            onBlur={() => handleBlur("number")}
                                        />
                                    </div>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1.5 items-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                                            className={`h-2.5 transition-all duration-300 ${cardType === 'visa' ? 'opacity-100 scale-110' : cardType === 'unknown' ? 'opacity-40 grayscale' : 'opacity-10 grayscale hidden'}`}
                                            alt="Visa"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                            className={`h-4 transition-all duration-300 ${cardType === 'mastercard' ? 'opacity-100 scale-110' : cardType === 'unknown' ? 'opacity-40 grayscale' : 'opacity-10 grayscale hidden'}`}
                                            alt="Mastercard"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                                            className={`h-4 transition-all duration-300 ${cardType === 'amex' ? 'opacity-100 scale-110' : 'hidden'}`}
                                            alt="Amex"
                                        />
                                    </div>
                                </div>
                                {renderInputFeedback("number")}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Expiry
                                </label>
                                <div className={getElementClass("expiry")}>
                                    <CardExpiryElement 
                                        options={elementOptions} 
                                        onChange={(e) => handleStripeChange("expiry", e)}
                                        onBlur={() => handleBlur("expiry")}
                                    />
                                </div>
                                {renderInputFeedback("expiry")}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    CVC
                                </label>
                                <div className={getElementClass("cvc")}>
                                    <CardCvcElement 
                                        options={elementOptions} 
                                        onChange={(e) => handleStripeChange("cvc", e)}
                                        onBlur={() => handleBlur("cvc")}
                                    />
                                </div>
                                {renderInputFeedback("cvc")}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider ml-1">
                                    Country
                                </label>
                                <select 
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-sm outline-none focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%206L8%2010L12%206%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
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
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    onBlur={() => handleBlur("postalCode")}
                                    placeholder="M5H 2N2"
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
                        onClick={handlePaymentSubmit}
                        disabled={isProcessing || !stripe}
                        className="w-full bg-[#00F3FF] hover:bg-[#00E5FF] disabled:opacity-50 disabled:cursor-not-allowed text-[#1E293B] py-4 rounded-sm font-black text-[17px] shadow-[0_8px_20px_-8px_rgba(0,243,255,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                        {isProcessing ? "Processing..." : `Complete Payment • $29.99`}
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
