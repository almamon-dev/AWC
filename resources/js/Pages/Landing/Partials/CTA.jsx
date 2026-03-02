import { ArrowRight } from "lucide-react";

const CTA = ({ onGetOffersClick }) => {
    return (
        <section className="">
            <div className="w-full">
                <div className="relative overflow-hidden min-h-[250px] flex items-center justify-center text-center p-8 lg:p-16">
                    {/* Background with darker overlay */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("/images/landing/CTA.png")',
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/10"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-[36px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
                                Ready to Get the Best Offers for Your Car?
                            </h2>
                            <p className="text-[#94A3B8] text-[18px] lg:text-[20px] font-medium max-w-2xl mx-auto">
                                Join thousands of Canadians who chose the
                                smarter way to sell
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={onGetOffersClick}
                                className="bg-[#00E5FF] hover:bg-[#00D1EB] text-black px-12 py-4 rounded-xl font-bold text-[17px] flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_15px_30px_-5px_rgba(0,229,255,0.4)]"
                            >
                                Get Started <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
