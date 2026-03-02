import React from "react";

const PageHero = ({ title, bgImage = "/images/landing/Hero.png" }) => {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{
                    backgroundImage: `url("${bgImage}")`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight animate-in slide-in-from-bottom-8 duration-700">
                    {title}
                </h1>
                <div className="mt-4 w-24 h-1.5 bg-[#00E5FF] mx-auto rounded-full animate-in slide-in-from-left duration-1000 delay-300"></div>
            </div>
        </section>
    );
};

export default PageHero;
