import { DashboardMarquee } from "./DashboardMarquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DashboardPreview() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-24">
            <div className="w-full px-4 md:px-6">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-8 md:mb-12 text-center md:text-left">
                        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4 text-gray-900">
                            Your Business Control Panel
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl">
                            This is how we give you clarity. One screen that shows sales, profit, cashflow, costs and performance — updated automatically.
                        </p>
                    </div>

                    {/* Browser Window Frame with Marquee */}
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white mb-10">
                        {/* Window Controls */}
                        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            <div className="ml-4 text-xs text-gray-500 font-medium">Live Dashboard Preview</div>
                        </div>

                        {/* Dashboard Marquee Content */}
                        <div className="w-full bg-white relative py-8">
                            <DashboardMarquee />
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Link href="/live-demo">
                            <Button
                                size="lg"
                                className="bg-black hover:bg-gray-800 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            >
                                See how it works
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
