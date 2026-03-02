import React, { useRef, useState, useEffect } from "react";
import { Upload, Plus, X, ImagePlus, ArrowUp, Camera } from "lucide-react";

const PhotoSlot = ({
    label,
    imageSrc,
    isDamage,
    onFileSelect,
    initialFile,
}) => {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (initialFile instanceof File) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(initialFile);
        } else if (typeof initialFile === "string") {
            setPreview(initialFile);
        }
    }, [initialFile]);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            if (onFileSelect) onFileSelect(file);
        }
    };

    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center p-3 bg-white border-2 border-dashed border-gray-100 rounded-xl hover:border-cyan-400 hover:bg-slate-50 transition-all cursor-pointer group aspect-square relative shadow-sm hover:shadow-md overflow-hidden"
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
            />

            {/* Label at the top */}
            <span className="text-[11px] font-bold text-gray-500 mb-1 text-center group-hover:text-cyan-600 transition-colors tracking-tight z-10">
                {label}
            </span>

            {/* Main Visual Area */}
            <div className="flex-1 w-full flex items-center justify-center mb-1 overflow-hidden relative">
                {preview ? (
                    <div className="absolute inset-0 w-full h-full p-1 animate-in fade-in duration-300">
                        <img
                            src={preview}
                            alt="preview"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                            <Camera size={24} className="text-white" />
                        </div>
                    </div>
                ) : isDamage ? (
                    <div className="text-gray-300 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:scale-110">
                        <ImagePlus size={44} strokeWidth={1} />
                    </div>
                ) : imageSrc ? (
                    <div className="w-full h-full flex items-center justify-center p-1 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-500">
                        <img
                            src={imageSrc}
                            alt={label}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ) : (
                    <div className="text-gray-200 group-hover:text-cyan-200 transition-colors">
                        <Camera size={36} strokeWidth={1} />
                    </div>
                )}
            </div>

            {/* Upload Action at the bottom */}
            <div className="flex flex-col items-center gap-0.5 mt-auto z-10">
                <ArrowUp
                    size={14}
                    className="text-gray-300 group-hover:text-cyan-500 transition-colors"
                    strokeWidth={2}
                />
                <span className="text-[10px] font-black text-gray-400 group-hover:text-gray-600 transition-colors leading-tight uppercase tracking-wide">
                    {preview ? "Change Photo" : "Upload Photo"}
                </span>
            </div>
        </div>
    );
};

const StepPhotosUpload = ({ data, updateData }) => {
    const handleFileSelect = (slotLabel, file) => {
        const currentPhotos = data.photos || {};
        updateData("photos", {
            ...currentPhotos,
            [slotLabel]: file,
        });
    };

    const exteriorSlots = [
        { label: "Driver Front", img: "/images/Extorior/driver_front.png" },
        { label: "Front", img: "/images/Extorior/front.png" },
        {
            label: "Passenger Front",
            img: "/images/Extorior/presenger_front.png",
        },
        {
            label: "Passenger Side",
            img: "/images/Extorior/pressenger_side.png",
        },
        { label: "Rear", img: "/images/Extorior/rear.png" },
        { label: "Driver Rear", img: "/images/Extorior/driver_rear.png" },
        { label: "Driver Side", img: "/images/Extorior/driver_side.png" },
    ];

    const interiorSlots = [
        { label: "Driver Front", img: "/images/Intorior/driver_front.png" },
        {
            label: "Headliner/Sunroof",
            img: "/images/Intorior/headlinerSunroof.png",
        },
        {
            label: "Instrument Cluster",
            img: "/images/Intorior/Instrument Cluster.png",
        },
        { label: "Upper Console", img: "/images/Intorior/Upper Console.png" },
        { label: "Rear Seats", img: "/images/Intorior/Rear Seats.png" },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-8 space-y-6">
            <div className="px-1">
                <div className="mb-4">
                    <h3 className="text-[19px] font-black text-[#1E293B]">
                        Vehicle Photos
                    </h3>
                    <p className="text-[12px] font-medium text-gray-400">
                        Upload high-quality photos to get better offers
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Exterior Section */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="space-y-5">
                            <h4 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Exterior Photos
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {exteriorSlots.map((slot) => (
                                    <PhotoSlot
                                        key={slot.label}
                                        label={slot.label}
                                        imageSrc={slot.img}
                                        initialFile={data?.photos?.[slot.label]}
                                        onFileSelect={(file) =>
                                            handleFileSelect(slot.label, file)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interior Section */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="space-y-5">
                            <h4 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Interior Photos
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {interiorSlots.map((slot) => (
                                    <PhotoSlot
                                        key={slot.label}
                                        label={slot.label}
                                        imageSrc={slot.img}
                                        initialFile={data?.photos?.[slot.label]}
                                        onFileSelect={(file) =>
                                            handleFileSelect(slot.label, file)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Damage Section */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="space-y-5">
                            <h4 className="text-[13px] font-black text-[#475569] uppercase tracking-wider">
                                Damage Photos (Optional)
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <PhotoSlot
                                        key={i}
                                        label={`Damage ${i}`}
                                        isDamage={true}
                                        initialFile={
                                            data?.photos?.[`Damage ${i}`]
                                        }
                                        onFileSelect={(file) =>
                                            handleFileSelect(
                                                `Damage ${i}`,
                                                file,
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StepPhotosUpload;
