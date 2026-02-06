"use client";

import { Card } from "@/components/ui/card";
import { Clock, MapPin, MoveLeft } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export function Events() {
    const { events } = siteContent;

    return (
        <section id="events" className="section-padding bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B655E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Header & Info */}
                    <div className="lg:w-1/3">
                        <span className="text-[#0B655E] font-bold text-lg mb-2 block">
                            {events.sectionLabel}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A334D] mb-6">
                            {events.title}
                        </h2>
                        <p className="text-[#1A334D]/70 text-lg leading-relaxed mb-8">
                            {events.description}
                        </p>
                        <div className="hidden lg:block">
                            <a href="#" className="inline-flex items-center gap-2 text-[#0B655E] font-bold text-lg hover:gap-4 transition-all">
                                {events.viewCalendar} <MoveLeft className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Events List */}
                    <div className="lg:w-2/3 space-y-6">
                        {events.items.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col md:flex-row overflow-hidden border border-gray-100 hover:border-[#EDB91D]/30 transition-colors group">
                                    {/* Date Block */}
                                    <div className="bg-[#0B655E] text-white p-6 md:w-32 flex flex-col items-center justify-center shrink-0">
                                        <span className="text-3xl font-bold">{event.day}</span>
                                        <span className="text-sm font-medium opacity-80">{event.month}</span>
                                    </div>

                                    {/* Details */}
                                    <div className="p-6 flex-grow flex flex-col justify-center">
                                        <h3 className="text-xl font-bold text-[#1A334D] mb-3 group-hover:text-[#EDB91D] transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-[#1A334D]/60 mb-3">
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4 text-[#EDB91D]" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-[#EDB91D]" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#1A334D]/80">
                                            <span className="font-semibold text-[#0B655E]">{events.presenterLabel}</span> {event.presenters}
                                        </p>
                                    </div>

                                    {/* Action (Mobile only usually, or consistent) */}
                                    <div className="hidden md:flex items-center px-6 border-r border-gray-100 text-[#0B655E]">
                                        <MoveLeft className="w-6 h-6 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                        <div className="lg:hidden mt-8 text-center">
                            <a href="#" className="inline-flex items-center gap-2 text-[#0B655E] font-bold text-lg hover:gap-4 transition-all">
                                {events.viewCalendar} <MoveLeft className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
