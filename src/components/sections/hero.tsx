"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export function Hero() {
    const { hero, assets } = siteContent;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0B655E] overflow-hidden pt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
                <Image
                    src={assets.heroPattern}
                    alt="Pattern"
                    fill
                    className="object-cover"
                />
            </div>
            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/20 z-0" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#EDB91D]/20 border border-[#EDB91D]/30 backdrop-blur-sm"
                >
                    <span className="text-[#EDB91D] font-bold text-sm md:text-base">
                        {hero.badge}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[72px] font-bold text-[#F8F7F1] mb-6 leading-tight"
                >
                    {hero.title} <span className="text-[#EDB91D]">{hero.highlight}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#F8F7F1]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto text-lg px-10">
                        {hero.ctaPrimary}
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto text-lg px-10"
                    >
                        {hero.ctaSecondary}
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B655E] to-transparent z-10" />
        </section>
    );
}
