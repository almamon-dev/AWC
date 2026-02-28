import React from "react";
import { Star, Compass } from "lucide-react";

/**
 * Testimonials Component
 * Matches the refined, clean aesthetic from the design reference.
 */
const Testimonials = () => {
    const reviews = [
        {
            name: "Michael Thompson",
            location: "Toronto, ON",
            text: "Got 3 offers within 24 hours! Sold my car for $2,500 more than the trade-in quote. Best $29.99 I ever spent.",
            stars: 5,
            image: "https://i.pravatar.cc/150?u=michael",
        },
        {
            name: "Sarah Chen",
            location: "Vancouver, BC",
            text: "So much easier than listing on Kijiji and dealing with tire kickers. Professional dealers only, great experience!",
            stars: 5,
            image: "https://i.pravatar.cc/150?u=sarah",
        },
        {
            name: "David Wilson",
            location: "Calgary, AB",
            text: "The flat fee model is genius. No commissions, no hidden fees. Just dealers competing for my car. Highly recommend!",
            stars: 5,
            image: "https://i.pravatar.cc/150?u=david",
        },
    ];

    return (
        <section
            className="py-16 bg-white relative overflow-hidden"
            id="testimonials"
        >
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] -z-10 select-none pointer-events-none">
                <Compass
                    size={800}
                    strokeWidth={0.5}
                    className="text-[#06B6D4]"
                />
            </div>

            <div className="container mx-auto px-4 max-w-8xl">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <span className="text-[#06B6D4] font-bold text-[14px] tracking-wide block mb-3 uppercase">
                        Success Stories
                    </span>
                    <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1E293B] mb-4 tracking-tight">
                        What Our Customers Say
                    </h2>
                    <p className="text-[#64748B] text-[16px] font-medium max-w-2xl mx-auto">
                        Join thousands of satisfied Canadians who sold their
                        cars the smart way
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-[#F1F5F9]"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Star Ratings */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={15}
                                        className="fill-[#FBBF24] text-[#FBBF24]"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-[#334155] text-[15px] mb-6 font-medium leading-[1.6]">
                                "{review.text}"
                            </p>

                            {/* Author Detail */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                                />
                                <div className="leading-tight">
                                    <h4 className="font-bold text-[#1E293B] text-[15px]">
                                        {review.name}
                                    </h4>
                                    <p className="text-[13px] text-[#94A3B8] font-bold mt-0.5">
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
