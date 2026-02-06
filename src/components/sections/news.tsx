"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MoveLeft, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export function News() {
    const { news } = siteContent;

    return (
        <section id="news" className="section-padding bg-[#F8F7F1]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <span className="text-[#0B655E] font-bold text-lg mb-2 block">
                            {news.sectionLabel}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A334D]">
                            {news.title}
                        </h2>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0 bg-transparent border-[#0B655E] text-[#0B655E] hover:bg-[#0B655E] hover:text-white">
                        {news.viewAll}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {news.items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-none">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#EDB91D] text-[#0B655E] text-xs font-bold px-3 py-1 rounded-full">
                                        {item.category}
                                    </div>
                                </div>
                                <CardHeader className="p-6 pb-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                        <CalendarDays className="w-4 h-4 text-[#EDB91D]" />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A334D] leading-tight mb-2 min-h-[3.5rem]">
                                        {item.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-6 pt-0">
                                    <p className="text-[#1A334D]/70 text-sm leading-relaxed line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 mt-auto">
                                    <a href="#" className="flex items-center gap-2 text-[#0B655E] font-bold text-sm hover:gap-3 transition-all">
                                        {news.readMore} <MoveLeft className="w-4 h-4" />
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
