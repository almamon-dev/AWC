import React from "react";
import { X } from "lucide-react";

const VinHelpModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-10 p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white w-full max-w-[560px] rounded-2xl p-6 shadow-xl animate-in zoom-in duration-300 overflow-y-auto max-h-[95vh]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>

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
    );
};

export default VinHelpModal;
