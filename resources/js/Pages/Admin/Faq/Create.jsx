import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { Home, ChevronLeft } from "lucide-react";

export default function CreateOrEdit({ faq = null }) {
    const isEdit = !!faq;
    const { data, setData, post, put, processing, errors } = useForm({
        question: faq?.question || "",
        answer: faq?.answer || "",
        order: faq?.order || 0,
        is_active: faq?.is_active ?? true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route("admin.faqs.update", faq.id));
        } else {
            post(route("admin.faqs.store"));
        }
    };

    return (
        <AdminLayout>
            <Head title={isEdit ? "Edit FAQ" : "Create New FAQ"} />

            <div className="space-y-6 max-w-[1240px] mx-auto pb-20">
                {/* Header & Breadcrumb */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[24px] font-bold text-[#2f3344] tracking-tight">
                            {isEdit ? "Edit FAQ" : "Create New FAQ"}
                        </h1>
                        <div className="flex items-center gap-2 text-[13px] text-[#727586] mt-1">
                            <Home size={16} />
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Content</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>{isEdit ? "Edit FAQ" : "Create FAQ"}</span>
                        </div>
                    </div>
                    <Link
                        href={route("admin.faqs.index")}
                        className="flex items-center gap-2 text-[#673ab7] hover:underline font-bold text-[14px]"
                    >
                        <ChevronLeft size={18} />
                        Back to FAQs
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white rounded-[10px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                        <div className="px-7 py-5 border-b border-[#e3e4e8]">
                            <h2 className="text-[18px] font-bold text-[#2f3344]">
                                FAQ Details
                            </h2>
                        </div>

                        <div className="p-8 space-y-6">
                            {/* Question */}
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">
                                    Question{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.question}
                                    onChange={(e) =>
                                        setData("question", e.target.value)
                                    }
                                    className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${errors.question ? "border-red-500" : "border-[#e3e4e8]"} rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                />
                                {errors.question && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.question}
                                    </p>
                                )}
                            </div>

                            {/* Answer */}
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#2f3344]">
                                    Answer{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={data.answer}
                                    onChange={(e) =>
                                        setData("answer", e.target.value)
                                    }
                                    className={`w-full px-4 py-3 bg-[#f1f3f5] border ${errors.answer ? "border-red-500" : "border-[#e3e4e8]"} rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all min-h-[150px] resize-none`}
                                />
                                {errors.answer && (
                                    <p className="text-red-500 text-xs mt-1 font-medium">
                                        {errors.answer}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Order */}
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#2f3344]">
                                        Display Order
                                    </label>
                                    <input
                                        type="number"
                                        value={data.order}
                                        onChange={(e) =>
                                            setData("order", e.target.value)
                                        }
                                        className={`w-full h-[45px] px-4 bg-[#f1f3f5] border ${errors.order ? "border-red-500" : "border-[#e3e4e8]"} rounded-[6px] text-[14px] text-[#2f3344] focus:outline-none focus:border-[#673ab7] transition-all`}
                                    />
                                    {errors.order && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">
                                            {errors.order}
                                        </p>
                                    )}
                                </div>

                                {/* Is Active */}
                                <div className="space-y-2 flex flex-col justify-center">
                                    <label className="text-[14px] font-bold text-[#2f3344] mb-2">
                                        Status
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setData(
                                                    "is_active",
                                                    !data.is_active,
                                                )
                                            }
                                            className={`w-12 h-6 rounded-full relative transition-all duration-300 ${data.is_active ? "bg-[#673ab7]" : "bg-gray-300"}`}
                                        >
                                            <div
                                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${data.is_active ? "translate-x-6" : ""}`}
                                            ></div>
                                        </button>
                                        <span
                                            className={`text-[14px] font-bold ${data.is_active ? "text-[#673ab7]" : "text-gray-400"}`}
                                        >
                                            {data.is_active
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#2c8af8] text-white px-[40px] py-[12px] rounded-[6px] font-bold text-[15px] hover:bg-[#1a7ae8] transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
                        >
                            {processing
                                ? "Saving..."
                                : isEdit
                                  ? "Update FAQ"
                                  : "Save FAQ"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
