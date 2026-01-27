"use client"
import React from 'react';
import { Badge } from '@/components/ui/badge';
import AvatarGroupTooltip from './Avatar';
import { MarqueeHorizontal, MarqueeVertical } from './MarqueeCards';
import MessageDialog from './MessageDialog';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="min-h-screen p-2 md:p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border bg-[#f3f4f6] rounded-xl p-1 md:px-2 shadow-sm ">
              <Badge className="bg-foreground/90 text-white px-2 py-1 text-[12px] md:text-sm font-medium rounded-2xl">
                Google Cloud's secure ecosystem
              </Badge>
              <span className="text-gray-600 text-[11px] md:text-sm ">Solution for client-facing businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Turn Your Data into Decisions — Instantly.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              IntelliSuite helps Indian business owners increase profit, reduce leakages, and regain control using business intelligence and smart automation — without hiring a data team. </p>
            <p>
              Sales, expenses, cashflow, inventory, GST, and team performance — consolidated into one simple, founder-friendly view.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <MessageDialog
                title="Book a Business Health Check"
                description="Book a Business Health Check. We will show templates and onboarding steps."
                triggerText="Book a Business Health Check"
                variantType="default"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium"
              />
              {/* <MessageDialog
                title="Chat with an Expert"
                description="Start a chat over WhatsApp or email. Human support during onboarding."
                triggerText="Chat with Expert"
                variantType="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium"
              /> */}
              <Link href={"https://wa.me/message/Q2UVGWRJWAGNA1"}>
                <Button size="lg" variant={"outline"} className={`border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium cursor-pointer`}>
                  Chat with Expert
                </Button>
              </Link>
            </div>

            {/* Reviews Section */}
            <div className="flex items-center gap-4 pt-4">
              <div>
                <AvatarGroupTooltip />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">From 4000+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Cards */}
          <MarqueeVertical />
          <MarqueeHorizontal />
        </div>
      </div>
    </div>
  );
}