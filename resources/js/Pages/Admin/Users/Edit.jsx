import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { Home, ChevronLeft, Check, User as UserIcon, Mail } from "lucide-react";

export default function Edit({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.users.update", user.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit User" />

            <div className="space-y-6 max-w-[1240px] mx-auto pb-20">
                {/* Header & Breadcrumb */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[24px] font-bold text-[#2f3344] tracking-tight">
                            Users
                        </h1>
                        <div className="flex items-center gap-2 text-[13px] text-[#727586] mt-1">
                            <Home size={16} />
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Account</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Edit User</span>
                        </div>
                    </div>
                    <Link
                        href={route("admin.users.index")}
                        className="flex items-center gap-2 text-[#673ab7] hover:underline font-bold text-[14px]"
                    >
                        <ChevronLeft size={18} />
                        Back to list
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info Card */}
                    <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                        <div className="px-7 py-5 border-b border-[#e3e4e8]">
                            <h2 className="text-[18px] font-bold text-[#2f3344]">
                                User Settings
                            </h2>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#2f3344]">
                                        Full Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${errors.name ? "border-red-500" : "border-[#e3e4e8]"} rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#2f3344]">
                                        Email Address{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${errors.email ? "border-red-500" : "border-[#e3e4e8]"} rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button - Bottom Right Blue */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#2c8af8] text-white px-[50px] py-[13px] rounded-[6px] font-bold text-[15px] hover:bg-[#1a7ae8] transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Update User Account"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
