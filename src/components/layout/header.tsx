"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/content";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[81px] flex items-center justify-center",
                isScrolled
                    ? "bg-[#F8F7F1]/95 backdrop-blur-md shadow-sm border-b border-[#1A334D]/10"
                    : "bg-transparent py-0"
            )}
        >
            <div className="container max-w-[1400px] h-full mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="relative z-50 flex items-center gap-4 group">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-105">
                        <Image
                            src={siteContent.assets.logo}
                            alt={siteContent.header.title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="hidden lg:block text-white">
                        <h1 className={cn("text-xl font-bold leading-none", isScrolled ? "text-[#1A334D]" : "text-white")}>{siteContent.header.title}</h1>
                        <p className={cn("text-[11px]", isScrolled ? "text-[#1A334D]/80" : "text-white/80")}>{siteContent.header.subtitle}</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1A334D]/5 shadow-sm">
                    {siteContent.navigation.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-base font-bold text-[#1A334D] hover:text-[#EDB91D] transition-colors rounded-full hover:bg-[#EDB91D]/10"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button className="font-bold text-lg px-6">{siteContent.header.cta}</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        isScrolled ? "text-[#1A334D]" : "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} className="text-[#1A334D]" /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#F8F7F1] z-40 flex flex-col pt-[100px] px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
                    <nav className="flex flex-col gap-2 w-full">
                        {siteContent.navigation.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold text-[#1A334D] py-4 border-b border-[#1A334D]/10 hover:text-[#EDB91D] transition-colors w-full text-right"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            className="w-full mt-8 h-12 text-lg font-bold"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {siteContent.header.cta}
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
