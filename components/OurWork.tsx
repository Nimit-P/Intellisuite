"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OurWork() {
    const cards = [
        {
            badge: "Business Intelligence",
            title: "Clarity on Profit, Cashflow & Performance",
            description:
                "We convert scattered numbers into one clean business view so you know what's working, what's not, and where money is leaking.",
        },
        {
            badge: "Automation",
            title: "Systems that run without follow-ups",
            description:
                "Automate reporting, tracking, and alerts so your business does not stop when people forget, delay, or misreport.",
        },
        {
            badge: "Owner Control",
            title: "60-second daily control view",
            description:
                "One founder-friendly control panel + weekly business report that shows what needs attention before problems become losses.",
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                        What we do <span className="text-gray-500 font-medium">(in simple business language)</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                        We are not "just dashboard people." IntelliSuite acts as your
                        Business Intelligence & Automation partner — bringing clarity,
                        control, and predictability to daily decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 md:min-h-[300px] flex flex-col group"
                        >
                            <CardHeader className="space-y-4">
                                <div className="w-fit">
                                    <Badge
                                        variant="secondary"
                                        className="rounded-full bg-blue-50 text-blue-700 px-4 py-1 text-sm border-blue-100"
                                    >
                                        {card.badge}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl md:text-2xl font-bold leading-tight text-gray-900 group-hover:text-blue-700 transition-colors">
                                    {card.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {card.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
