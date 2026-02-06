"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export function Stats() {
    return (
        <section className="relative -mt-20 z-20 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteContent.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card variant="glass" className="p-6 text-center hover:scale-105 transition-transform duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#EDB91D]/20 p-3 rounded-full">
                                        <stat.icon className="text-[#EDB91D] w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2 font-sans">
                                    {stat.value}
                                </h3>
                                <p className="text-white/80 font-medium">{stat.label}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
