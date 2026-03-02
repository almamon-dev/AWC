import React, { useState } from "react";
import { Check, X } from "lucide-react";

const ToggleButton = ({
    active,
    onClick,
    label,
    activeColor = "bg-[#00E5FF]",
}) => (
    <button
        onClick={onClick}
        className={`px-6 py-2.5 text-[13px] font-black rounded-sm transition-all duration-300 border-2 ${
            active
                ? `${activeColor} text-slate-900 border-transparent shadow-[0_4px_12px_rgba(0,229,255,0.2)]`
                : "bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-slate-600"
        }`}
    >
        {label}
    </button>
);

const SymptomGroup = ({ title, items, values, onToggle }) => {
    return (
        <div className="space-y-4 pt-6 border-t border-gray-100 first:border-0 first:pt-0">
            <h4 className="text-[15px] font-bold text-cyan-600 underline underline-offset-4 decoration-2 decoration-cyan-100">
                {title}
            </h4>
            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between group"
                    >
                        <span className="text-sm font-medium text-gray-700">
                            {idx + 1}. {item}
                        </span>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name={`${title}-${idx}`}
                                    checked={values[item] === false}
                                    onChange={() => onToggle(item, false)}
                                    className="hidden"
                                />
                                <div
                                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                                        values[item] === false
                                            ? "border-red-500 bg-red-50"
                                            : "border-gray-200"
                                    }`}
                                >
                                    {values[item] === false && (
                                        <X
                                            size={10}
                                            className="text-red-500 stroke-[3]"
                                        />
                                    )}
                                </div>
                                <span
                                    className={`text-xs font-bold ${values[item] === false ? "text-red-500" : "text-gray-400"}`}
                                >
                                    No
                                </span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name={`${title}-${idx}`}
                                    checked={values[item] === true}
                                    onChange={() => onToggle(item, true)}
                                    className="hidden"
                                />
                                <div
                                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                                        values[item] === true
                                            ? "border-teal-500 bg-teal-50"
                                            : "border-gray-200"
                                    }`}
                                >
                                    {values[item] === true && (
                                        <Check
                                            size={10}
                                            className="text-teal-500 stroke-[3]"
                                        />
                                    )}
                                </div>
                                <span
                                    className={`text-xs font-bold ${values[item] === true ? "text-teal-500" : "text-gray-400"}`}
                                >
                                    Yes
                                </span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StepVehicleCondition = ({ data, updateData }) => {
    const symptomGroups = [
        {
            title: "Engine Issues",
            items: [
                "Engine misfires or idles roughly",
                "Knocking sounds or unusual noises",
                "Loss of power or hesitation when accelerating",
                "Excessive smoke from exhaust",
                "Check engine light on",
                "Overheating or abnormal engine temperature",
                "Leaking or burning oil smell",
            ],
        },
        {
            title: "Transmission Problems",
            items: [
                "Transmission slips",
                "Grinding sounds or unusual noises",
                "Hesitant or hard shift progress",
                "Delayed or rough shifting",
                "Grinding or torque converter during shifting",
                "Transmission warning lights on",
            ],
        },
        {
            title: "Brakes & Suspension",
            items: [
                "Squealing or grinding noises when braking",
                "Spongy or wooden feeling brake performance",
                "Vibration or pulsing when braking",
                "Vehicle pulls to one side",
                "Swaying or excessive body lean",
                "Uneven tire wear",
            ],
        },
        {
            title: "Electrical & Battery",
            items: [
                "Issues starting, reluctant starting/misfire parts",
                "Battery warning light or dead battery",
                "Alternator problems",
                "Fuses blowing on electrical shorts",
                "AC not cooling/poor temperature",
                "Heating not working properly",
            ],
        },
        {
            title: "Fuel & Exhaust System",
            items: [
                "Poor fuel economy or engine stalling",
                "Difficulty starting, especially when cold",
                "Fuel odor or visible leaks",
                "Loud exhaust noise or exhaust smoke",
                "Gas fumes inside the cabin",
            ],
        },
        {
            title: "Lights & Tires",
            items: [
                "Headlights, brake lights, or blinkers not working",
                "Tire pressure warning lights on",
                "Driveability issues or tire vibration",
                "Abnormal or shaking wheels during driving",
            ],
        },
    ];

    const handleToggleSymptom = (item, val) => {
        updateData("condition", {
            symptoms: {
                ...data.condition.symptoms,
                [item]: val,
            },
        });
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <div className="px-1">
                <div className="mb-4">
                    <h3 className="text-[19px] font-black text-[#1E293B]">
                        Vehicle Condition
                    </h3>
                    <p className="text-[12px] font-medium text-gray-400">
                        Help dealers understand your vehicle's condition
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Section: Vehicle History */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="space-y-5">
                            <h4 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Vehicle History
                            </h4>
                            <label className="block text-[14px] font-bold text-slate-700">
                                1. Question:{" "}
                                <span className="font-semibold text-slate-600">
                                    Has this vehicle ever been involved in an
                                    accident?
                                </span>
                            </label>
                            <div className="flex items-center gap-3">
                                <ToggleButton
                                    label="No"
                                    active={
                                        data.condition.hasAccident === false
                                    }
                                    onClick={() =>
                                        updateData("condition", {
                                            hasAccident: false,
                                        })
                                    }
                                />
                                <ToggleButton
                                    label="Yes"
                                    active={data.condition.hasAccident === true}
                                    onClick={() =>
                                        updateData("condition", {
                                            hasAccident: true,
                                        })
                                    }
                                />
                            </div>
                            {data.condition.hasAccident && (
                                <div className="animate-in slide-in-from-top-3 duration-300 pt-1">
                                    <label className="text-[11px] font-bold text-gray-400 ml-1 mb-2 block uppercase tracking-wider">
                                        Describe any damage or repair costs:
                                    </label>
                                    <textarea
                                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-sm font-medium h-28"
                                        placeholder="Enter details here..."
                                        value={data.condition.accidentDetails}
                                        onChange={(e) =>
                                            updateData("condition", {
                                                accidentDetails: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Section: Mechanical Status */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="space-y-5">
                            <h4 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Mechanical Status
                            </h4>
                            <label className="block text-[14px] font-bold text-slate-700">
                                1. Question:{" "}
                                <span className="font-semibold text-slate-600">
                                    Are there any known mechanical issues or
                                    dashboard warning lights?
                                </span>
                            </label>
                            <div className="flex items-center gap-3">
                                <ToggleButton
                                    label="Runs Perfectly"
                                    active={
                                        data.condition.hasMechanicalIssues ===
                                        false
                                    }
                                    onClick={() =>
                                        updateData("condition", {
                                            hasMechanicalIssues: false,
                                        })
                                    }
                                />
                                <ToggleButton
                                    label="Has Issues"
                                    active={
                                        data.condition.hasMechanicalIssues ===
                                        true
                                    }
                                    onClick={() =>
                                        updateData("condition", {
                                            hasMechanicalIssues: true,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Symptoms Checklist */}
                    {data.condition.hasMechanicalIssues && (
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-in slide-in-from-top-4 duration-500">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[13px] font-black text-[#475569] uppercase tracking-wider mb-1">
                                        List of Symptoms
                                    </h4>
                                    <p className="text-[11px] font-bold text-gray-400 leading-tight">
                                        To give them accurate quote, audit will
                                        help us give you the most accurate price
                                        for your car.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {symptomGroups.map((group, idx) => (
                                        <SymptomGroup
                                            key={idx}
                                            title={group.title}
                                            items={group.items}
                                            values={data.condition.symptoms}
                                            onToggle={handleToggleSymptom}
                                        />
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100 space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 ml-1 mb-2 block uppercase tracking-wider">
                                        Other Issues:
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-sm outline-none focus:bg-white focus:border-[#00E5FF] transition-all text-sm font-medium"
                                        placeholder="Describe any other issues..."
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <label className="flex items-center gap-3 cursor-pointer group select-none">
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="peer hidden"
                                checked={data.condition.acceptedTerms}
                                onChange={(e) =>
                                    updateData("condition", {
                                        acceptedTerms: e.target.checked,
                                    })
                                }
                            />
                            <div className="h-5 w-5 shrink-0 rounded-sm border-2 border-slate-200 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 peer-checked:bg-[#00E5FF] peer-checked:border-[#00E5FF] peer-checked:scale-110 active:scale-95 transition-all duration-200 group-hover:border-[#00E5FF] flex items-center justify-center">
                                <Check
                                    className={`h-3.5 w-3.5 text-white transition-all duration-200 ${data.condition.acceptedTerms ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                                    strokeWidth={4}
                                />
                            </div>
                        </div>
                        <span className="text-[14px] font-bold text-slate-500 group-hover:text-slate-800 transition-colors">
                            I have read, and accept the{" "}
                            <span className="text-[#00E5FF] hover:text-[#00D1EB] transition-colors decoration-2 decoration-cyan-100/50">
                                Terms & Conditions
                            </span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StepVehicleCondition;
