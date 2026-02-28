import React from "react";

const Logos = () => {
    const brands = [
        {
            name: "Toyota",
            url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_car_logo.svg",
        },
        {
            name: "Hyundai",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
        },
        {
            name: "Mitsubishi",
            url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mitsubishi_logo.svg",
        },
        {
            name: "Honda",
            url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
        },
        {
            name: "Ford",
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg",
        },
    ];

    return (
        <section className="bg-white border-y border-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-32 md:w-40"
                        >
                            <img
                                src={brand.url}
                                alt={brand.name}
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
