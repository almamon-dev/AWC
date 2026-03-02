import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { Home } from "lucide-react";

export default function Index({ about }) {
    const [activeTab, setActiveTab] = React.useState("en");

    const { data, setData, post, processing, errors } = useForm({
        title: about?.title || "About US",
        subtitle: about?.subtitle || "Your car's solution—made simple",
        description:
            about?.description ||
            "Welcome to Auto Wholesale Canada, the trusted platform for selling your car quickly, easily, and at the best price. We are passionate about simplifying the car-selling process, offering a seamless and transparent experience for our customers.\n\nWith cutting-edge technology and a customer-first approach, we ensure accurate car valuations, instant payments, and hassle-free services. Whether you're looking to upgrade your vehicle or simply sell it for a fair price, we are here to make the process smooth and stress-free.\n\nOur team of experts is dedicated to providing you with personalized support every step of the way. From valuation to final payment, we aim to exceed your expectations and deliver an experience you'll recommend to others.\n\nAt Auto Wholesale Canada, we value your time and trust. That's why we've designed a platform that combines efficiency, reliability, and simplicity—all tailored to meet your needs.",
        image_url:
            about?.image_url ||
            "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
        image: null,
        happy_customers: about?.happy_customers || "10k+",

        // French fields
        title_fr: about?.title_fr || "À propos de nous",
        subtitle_fr:
            about?.subtitle_fr ||
            "La solution pour votre voiture—en toute simplicité",
        description_fr:
            about?.description_fr ||
            "Bienvenue chez Auto Wholesale Canada, la plateforme de confiance pour vendre votre voiture rapidement, facilement et au meilleur prix.",
        image_url_fr: about?.image_url_fr || "",
        image_fr: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.about-content.update"), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="About Content Management" />

            <div className="space-y-6 max-w-[1240px] mx-auto pb-20">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[24px] font-bold text-[#2f3344] tracking-tight">
                            About Us Content
                        </h1>
                        <div className="flex items-center gap-2 text-[13px] text-[#727586] mt-1">
                            <Home size={16} />
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Content</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>About Us</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white rounded-[12px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                        <div className="px-7 py-5 border-b border-[#e3e4e8] flex items-center justify-between">
                            <h2 className="text-[18px] font-bold text-[#2f3344]">
                                Main Content Settings
                            </h2>
                            <div className="flex bg-[#f1f3f5] p-1 rounded-lg">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("en")}
                                    className={`px-6 py-2 rounded-md text-[14px] font-bold transition-all ${activeTab === "en" ? "bg-white shadow-sm text-[#2f3344]" : "text-[#727586] hover:text-[#2f3344]"}`}
                                >
                                    English
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("fr")}
                                    className={`px-6 py-2 rounded-md text-[14px] font-bold transition-all ${activeTab === "fr" ? "bg-white shadow-sm text-[#2f3344]" : "text-[#727586] hover:text-[#2f3344]"}`}
                                >
                                    French
                                </button>
                            </div>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Toggleable English / French Views */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#2f3344]">
                                        Title ({activeTab.toUpperCase()})
                                    </label>
                                    <input
                                        type="text"
                                        value={
                                            activeTab === "en"
                                                ? data.title
                                                : data.title_fr
                                        }
                                        onChange={(e) =>
                                            setData(
                                                activeTab === "en"
                                                    ? "title"
                                                    : "title_fr",
                                                e.target.value,
                                            )
                                        }
                                        className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${(activeTab === "en" ? errors.title : errors.title_fr) ? "border-red-500" : "border-[#e3e4e8]"} rounded-[8px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                    />
                                    {(activeTab === "en"
                                        ? errors.title
                                        : errors.title_fr) && (
                                        <p className="text-red-500 text-xs">
                                            {activeTab === "en"
                                                ? errors.title
                                                : errors.title_fr}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#2f3344]">
                                        Subtitle ({activeTab.toUpperCase()})
                                    </label>
                                    <input
                                        type="text"
                                        value={
                                            activeTab === "en"
                                                ? data.subtitle
                                                : data.subtitle_fr
                                        }
                                        onChange={(e) =>
                                            setData(
                                                activeTab === "en"
                                                    ? "subtitle"
                                                    : "subtitle_fr",
                                                e.target.value,
                                            )
                                        }
                                        className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${(activeTab === "en" ? errors.subtitle : errors.subtitle_fr) ? "border-red-500" : "border-[#e3e4e8]"} rounded-[8px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                    />
                                    {(activeTab === "en"
                                        ? errors.subtitle
                                        : errors.subtitle_fr) && (
                                        <p className="text-red-500 text-xs">
                                            {activeTab === "en"
                                                ? errors.subtitle
                                                : errors.subtitle_fr}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">
                                    Description ({activeTab.toUpperCase()})
                                </label>
                                <textarea
                                    value={
                                        activeTab === "en"
                                            ? data.description
                                            : data.description_fr
                                    }
                                    onChange={(e) =>
                                        setData(
                                            activeTab === "en"
                                                ? "description"
                                                : "description_fr",
                                            e.target.value,
                                        )
                                    }
                                    className={`w-full px-4 py-4 bg-[#f1f3f5] border ${(activeTab === "en" ? errors.description : errors.description_fr) ? "border-red-500" : "border-[#e3e4e8]"} rounded-[8px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all min-h-[300px] resize-none leading-relaxed`}
                                />
                                {(activeTab === "en"
                                    ? errors.description
                                    : errors.description_fr) && (
                                    <p className="text-red-500 text-xs">
                                        {activeTab === "en"
                                            ? errors.description
                                            : errors.description_fr}
                                    </p>
                                )}
                                <p className="text-[12px] text-gray-400 italic">
                                    Separate paragraphs with double newlines.
                                </p>
                            </div>

                            {/* Image & Customers */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[14px] font-bold text-[#2f3344]">
                                        Hero Image ({activeTab.toUpperCase()})
                                    </label>

                                    {/* Image Preview */}
                                    <div className="w-full h-[200px] border border-[#e3e4e8] rounded-[8px] overflow-hidden bg-[#f8f9fa] flex items-center justify-center relative group">
                                        {(activeTab === "en"
                                            ? data.image_url
                                            : data.image_url_fr) &&
                                        !(activeTab === "en"
                                            ? data.image
                                            : data.image_fr) ? (
                                            <img
                                                src={
                                                    activeTab === "en"
                                                        ? data.image_url
                                                        : data.image_url_fr
                                                }
                                                alt={`Current Hero ${activeTab}`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                              activeTab === "en"
                                                  ? data.image
                                                  : data.image_fr
                                          ) ? (
                                            <img
                                                src={URL.createObjectURL(
                                                    activeTab === "en"
                                                        ? data.image
                                                        : data.image_fr,
                                                )}
                                                alt={`New Hero Preview ${activeTab}`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-[#94a3b8] flex flex-col items-center gap-2">
                                                <span className="text-sm font-medium">
                                                    No image uploaded
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <label className="cursor-pointer bg-white text-[#2f3344] px-4 py-2 rounded-[6px] font-bold text-[13px] hover:bg-gray-100 transition-colors shadow-sm">
                                                Select New Image
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={(e) =>
                                                        setData(
                                                            activeTab === "en"
                                                                ? "image"
                                                                : "image_fr",
                                                            e.target.files[0],
                                                        )
                                                    }
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    {(activeTab === "en"
                                        ? errors.image
                                        : errors.image_fr) && (
                                        <p className="text-red-500 text-xs">
                                            {activeTab === "en"
                                                ? errors.image
                                                : errors.image_fr}
                                        </p>
                                    )}
                                </div>
                                {activeTab === "en" && (
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-[#2f3344]">
                                            Happy Customers Badge
                                        </label>
                                        <input
                                            type="text"
                                            value={data.happy_customers}
                                            onChange={(e) =>
                                                setData(
                                                    "happy_customers",
                                                    e.target.value,
                                                )
                                            }
                                            className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${errors.happy_customers ? "border-red-500" : "border-[#e3e4e8]"} rounded-[8px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                        />
                                        {errors.happy_customers && (
                                            <p className="text-red-500 text-xs">
                                                {errors.happy_customers}
                                            </p>
                                        )}
                                        <p className="text-[12px] text-gray-400 mt-2">
                                            Applies to both English and French.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#2c8af8] text-white px-[50px] py-[13px] rounded-[6px] font-bold text-[15px] hover:bg-[#1a7ae8] transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
