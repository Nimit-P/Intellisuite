"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STEPS = [
    {
        number: "1",
        title: "Understand your business reality",
        description:
            "We map your sales, accounts, inventory, and team workflow (as it actually runs today).",
    },
    {
        number: "2",
        title: "Connect your existing data",
        description:
            "We use what you already have (Sheets, Tally exports, CRM, billing, e-commerce) — no disruption.",
    },
    {
        number: "3",
        title: "Build your Control Panel",
        description:
            "We create a founder-friendly view: profit, cashflow, costs, growth, and performance.",
    },
    {
        number: "4",
        title: "Automate weekly reporting",
        description:
            "You receive consistent business updates so you take action early, not after damage is done.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function HowItWorks() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-24">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        How it works
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Same process. Less jargon. Clear outcomes.
                    </p>
                </div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {STEPS.map((step, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow bg-white relative overflow-hidden group">
                                <CardHeader>
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>
                                    <CardTitle className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                                        {step.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
