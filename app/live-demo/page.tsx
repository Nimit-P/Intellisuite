"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LiveDemoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Simple Header */}
            <header className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <div className="font-bold text-xl text-gray-900">IntelliSuite <span className="text-blue-600">Live Demo</span></div>
                    <div className="w-24"></div> {/* Spacer for center alignment */}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-xl bg-white flex flex-col">
                    {/* Window Controls */}
                    {/* <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        <div className="ml-4 text-xs text-gray-500 font-medium">Business Control Panel (Live Interactable View)</div>
                    </div> */}

                    {/* Iframe */}
                    <div className="flex-1 w-full min-h-[1300px] bg-white relative border">
                        <iframe
                            src="https://lookerstudio.google.com/embed/reporting/b69ec576-2182-4c28-8be4-46f275fb241e/page/ASLmF"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            title="Business Control Panel Dashboard"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
