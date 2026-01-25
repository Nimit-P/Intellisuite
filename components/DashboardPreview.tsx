"use client";

import { cn } from "@/lib/utils";

export function DashboardPreview() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-24">
            <div className="w-full px-4 md:px-6">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4 text-gray-900">
                            Your Business Control Panel
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl">
                            This is how we give you clarity. One screen that shows sales, profit, cashflow, costs and performance — updated automatically.
                        </p>
                    </div>

                    {/* Browser Window Frame */}
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
                        {/* Window Controls */}
                        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            <div className="ml-4 text-xs text-gray-500 font-medium">Embedded Dashboard (Looker Studio)</div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="aspect-[16/9] w-full bg-white relative">
                            <iframe
                                src="https://lookerstudio.google.com/embed/reporting/b69ec576-2182-4c28-8be4-46f275fb241e/page/ASLmF"
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                title="Business Control Panel Dashboard"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
