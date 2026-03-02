import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Home, Plus, Search, Mail, Trash2, Edit } from "lucide-react";

export default function Index({ faqs }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this FAQ?")) {
            router.delete(route("admin.faqs.destroy", id));
        }
    };

    return (
        <AdminLayout>
            <Head title="FAQ Management" />

            <div className="space-y-6 max-w-[1240px] mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[24px] font-bold text-[#2f3344] tracking-tight">
                            FAQs
                        </h1>
                        <div className="flex items-center gap-2 text-[13px] text-[#727586] mt-1">
                            <Home size={16} />
                            <span className="text-[#c3c4ca]">-</span>
                            <span>Content</span>
                            <span className="text-[#c3c4ca]">-</span>
                            <span>FAQs</span>
                        </div>
                    </div>
                    <Link
                        href={route("admin.faqs.create")}
                        className="bg-[#673ab7] text-white px-5 py-2.5 rounded-[8px] font-bold text-[14px] flex items-center gap-2 hover:bg-[#5e35a6] transition-all shadow-md active:scale-95"
                    >
                        <Plus size={18} />
                        Add New FAQ
                    </Link>
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-[12px] border border-[#e3e4e8] shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#fafbfc] border-b border-[#f1f2f4]">
                                    <th className="text-left px-6 py-4 text-[13px] font-bold text-[#2f3344] uppercase tracking-wider">
                                        Question
                                    </th>
                                    <th className="text-left px-6 py-4 text-[13px] font-bold text-[#2f3344] uppercase tracking-wider">
                                        Order
                                    </th>
                                    <th className="text-left px-6 py-4 text-[13px] font-bold text-[#2f3344] uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f1f2f4]">
                                {faqs.length > 0 ? (
                                    faqs.map((faq) => (
                                        <tr
                                            key={faq.id}
                                            className="hover:bg-[#fafbfc] transition-colors"
                                        >
                                            <td className="px-6 py-5">
                                                <div className="text-[14px] font-bold text-[#2f3344] max-w-[500px] truncate">
                                                    {faq.question}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-[14px] text-[#727586]">
                                                    {faq.order}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${faq.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                                                >
                                                    {faq.is_active
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex items-center justify-end gap-3">
                                                    <Link
                                                        href={route(
                                                            "admin.faqs.edit",
                                                            faq.id,
                                                        )}
                                                        className="h-[36px] w-[36px] flex items-center justify-center bg-white border border-[#e3e4e8] text-[#2f3344] rounded-[8px] hover:border-[#673ab7] hover:text-[#673ab7] transition-all"
                                                        title="Edit"
                                                    >
                                                        <Edit size={16} />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(faq.id)
                                                        }
                                                        className="h-[36px] w-[36px] flex items-center justify-center bg-white border border-[#e3e4e8] text-[#727586] rounded-[8px] hover:bg-red-50 hover:text-red-500 hover:border-red-500 transition-all font-bold"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="px-6 py-10 text-center text-[#727586]"
                                        >
                                            No FAQs found. Add one to get
                                            started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
