import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/lib/content";

export function Footer() {
    const { footer, assets } = siteContent;

    return (
        <footer className="bg-[#0B655E] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative h-12 w-12">
                                <Image
                                    src={assets.footerLogo}
                                    alt={footer.about.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold">{footer.about.title}</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm">
                            {footer.about.text}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-[#EDB91D] font-bold text-lg mb-6">{footer.quickLinks.title}</h4>
                        <ul className="space-y-3">
                            {footer.quickLinks.links.map((link, idx) => (
                                <li key={idx}><Link href={link.href} className="hover:text-[#EDB91D] transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-[#EDB91D] font-bold text-lg mb-6">{footer.resources.title}</h4>
                        <ul className="space-y-3">
                            {footer.resources.links.map((link, idx) => (
                                <li key={idx}><Link href={link.href} className="hover:text-[#EDB91D] transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-[#EDB91D] font-bold text-lg mb-6">{footer.contact.title}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-[#EDB91D] shrink-0" size={20} />
                                <span className="text-sm">{footer.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-[#EDB91D] shrink-0" size={20} />
                                <span className="text-sm">{footer.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-[#EDB91D] shrink-0" size={20} />
                                <span className="text-sm">{footer.contact.email}</span>
                            </li>
                        </ul>

                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#EDB91D] hover:text-[#0B655E] transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#EDB91D] hover:text-[#0B655E] transition-all">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#EDB91D] hover:text-[#0B655E] transition-all">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
                    <p>{footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
