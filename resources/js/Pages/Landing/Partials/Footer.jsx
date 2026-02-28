import { Mail, Car } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white pt-8 pb-8 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[#00E5FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                                <Car
                                    size={24}
                                    className="text-black"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <span className="text-[20px] font-bold tracking-tight text-[#00E5FF]">
                                AutoWholesaleCanada
                            </span>
                        </div>
                        <p className="text-[#94A3B8] text-[15px] leading-relaxed max-w-xs font-medium">
                            Canada's trusted platform for selling your car to
                            verified dealers.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-[17px] font-bold text-white tracking-wide uppercase">
                            Page
                        </h4>
                        <ul className="space-y-3">
                            {["About Us", "How It Works", "FAQ"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#94A3B8] hover:text-[#00E5FF] text-[15px] font-medium transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-transparent group-hover:bg-[#00E5FF] rounded-full transition-all"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-[17px] font-bold text-white tracking-wide uppercase">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Privacy Policy",
                                "Terms of Service",
                                "Cookie Policy",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#94A3B8] hover:text-[#00E5FF] text-[15px] font-medium transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-transparent group-hover:bg-[#00E5FF] rounded-full transition-all"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-[17px] font-bold text-white tracking-wide uppercase">
                            Any Questions?
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:info@autowholesalecanada.ca"
                                className="flex items-center gap-3 text-[#94A3B8] hover:text-[#00E5FF] transition-all group"
                            >
                                <div className="w-9 h-9 rounded-lg border border-[#334155] flex items-center justify-center group-hover:border-[#00E5FF]/50 transition-colors">
                                    <Mail
                                        size={16}
                                        className="text-[#94A3B8] group-hover:text-[#00E5FF]"
                                    />
                                </div>
                                <span className="text-[15px] font-semibold tracking-tight">
                                    info@autowholesalecanada.ca
                                </span>
                            </a>
                            <p className="text-[#64748B] text-[14px] leading-relaxed font-medium">
                                Feel free! Ask us anything
                                <br />
                                related to our service
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#334155]/30 pt-10 text-center">
                    <p className="text-[#64748B] text-[14px] font-bold tracking-wider">
                        2026 Powered by Auto wholesale Canada
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
