import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartPieLabelCustom } from './PieChart';
import { AnimatedBeamDemo } from './AppIntegrations';
import { BarChart3, Briefcase, CheckCircle, Cloud, Factory, Lock, Shield, ShieldCheck, ShoppingBag, Stethoscope, TrendingUp, Truck, Zap } from 'lucide-react';
import MessageDialog from './MessageDialog';
import { ChartTooltipIndicatorLine } from './TooltipChart';

export default function AboutUS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Why to Choose Intellisuite?
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Manage Clients Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2"></div>
              <CardTitle className="text-2xl font-bold mb-2">Works with the tools you already use</CardTitle>
              <CardDescription className="text-base text-gray-600">
                You do not need to replace your current tools. IntelliSuite connects, cleans, and makes them decision-ready.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatedBeamDemo />
            </CardContent>
          </Card>

          {/* Customize Dashboards Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2"></div>
              <CardTitle className="text-2xl font-bold mb-2">Features</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Replace guesswork with a founder-friendly operating view.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-2 sm:p-4'>
              <FeaturesCards />
            </CardContent>
          </Card>

          {/* Automate Reporting Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2"></div>
              <CardTitle className="text-2xl font-bold mb-2">Who It’s For</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Built for Indian Businesses like:
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <ChartPieLabelCustom/> */}
              <div className="space-y-3 mb-6">
                {[
                  {
                    icon: <Factory className="w-5 h-5" />,
                    title: "Manufacturers",
                    desc: "Track production costs and inventory in real-time",
                    color: "blue"
                  },
                  {
                    icon: <Truck className="w-5 h-5" />,
                    title: "Distributors & Traders",
                    desc: "Manage supply chain and margins effectively",
                    color: "purple"
                  },
                  {
                    icon: <Stethoscope className="w-5 h-5" />,
                    title: "Clinics & Healthcare",
                    desc: "Streamline patient records and billing",
                    color: "pink"
                  },
                  {
                    icon: <Briefcase className="w-5 h-5" />,
                    title: "Service Companies",
                    desc: "Optimize resource allocation and project tracking",
                    color: "indigo"
                  },
                  {
                    icon: <ShoppingBag className="w-5 h-5" />,
                    title: "D2C & E-commerce Brands",
                    desc: "Unify sales data from all channels",
                    color: "orange"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
                  >
                    <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center text-${item.color}-600 flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 px-2">
                <p className="text-sm text-gray-500 italic">
                  We understand how Indian businesses really run — part cash, part software, part chaos.
                </p>
              </div>

              <MessageDialog title='Sample Dashboards' description='We provide Looker Studio template previews for social, sales, and finance dashboards.' triggerText='See Sample Dashboards →' className='w-full' />
            </CardContent>
          </Card>

          {/* Generate Insights Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="text-sm font-medium text-gray-600 mb-2"></div>
              <CardTitle className="text-2xl font-bold mb-2">Your Data. Your Control.</CardTitle>
              <CardDescription className="text-base text-gray-600">
                We take your privacy seriously — every dashboard runs securely on Google’s infrastructure with:
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <ChartBarMultiple/> */}
              <div className="space-y-1 mb-6">
                {[
                  {
                    icon: <Lock className="w-5 h-5" />,
                    text: "End-to-end encryption for all data connections",
                    color: "blue"
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    text: "OAuth-based access — you control what's shared",
                    color: "green"
                  },
                  {
                    icon: <Cloud className="w-5 h-5" />,
                    text: "No external storage — your data never leaves your Google account",
                    color: "purple"
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    text: "Compliance-ready setup for GDPR and Indian data protection norms",
                    color: "orange"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex  items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                  >
                    <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center text-${item.color}-600 flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <p className="text-gray-700 flex-1 text-sm sm:text-base">{item.text}</p>
                  </div>
                ))}

                <div className='p-3 sm:p-4'>
                  {/* <Badge variant="secondary" className="gap-1.5">
                <span
                  className="size-2 rounded-full bg-[#3b82f6]"
                  aria-hidden="true"
                ></span>
               <span className='text-[14px] text-foreground tracking-wide'>Powered by Google Cloud Security</span>
              </Badge> */}
                  <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-950/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                    <ShieldCheck className="size-4" />
                    <span>Powered by Google Cloud Security</span>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center gap-2 sm:gap-4 p-1 sm:p-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200 mb-2">
              <Cloud className="w-5 h-5 sm:w-8 sm:h-8 text-blue-[] flex-shrink-0" />
              <p className="font-semibold text-gray-900 text-sm sm:text-base">Powered by Google Cloud Security</p>
            </div> */}

              <MessageDialog title='Security Details' description='We use OAuth, end-to-end encryption, and keep dashboards within your Google account — no external storage.' triggerText='Learn How We Keep Your Data Safe' className='w-full' variantType='outline' />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

function ClientRow({ name, email, time, status, color, initial }: any) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3 flex-1">
        <div className={`w-8 h-8 rounded-full ${color === 'bg-blue-500' ? 'bg-blue-500' : color === 'bg-white' ? 'bg-orange-400' : 'bg-purple-400'} flex items-center justify-center text-white text-sm font-semibold`}>
          {initial}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1 md:gap-4 items-center">
          <span className="font-medium text-sm">{name}</span>
          <span className=" text-sm text-gray-600">{email}</span>
          <span className="hidden md:visible  text-sm text-gray-500">{time}</span>
        </div>
      </div>
      <Badge variant={status === 'Client' ? 'default' : 'secondary'} className={status === 'Client' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}>
        {status}
      </Badge>
    </div>
  );
}

const FEATURES_DATA = [
  {
    title: "Profit & Cashflow Tracking",
    description: "We convert scattered numbers into one clean business view so you know what’s working, what’s not, and where money is leaking.",
  },
  {
    title: "Revenue Performance",
    description: "Sales and revenue performance by product, channel & team—so you can double down on what works.",
  },
  {
    title: "Leak Detection",
    description: "Expense and cost leak detection to stop silent losses before they grow.",
  },
  {
    title: "Inventory Visibility",
    description: "Inventory and stock movement visibility to avoid dead stock and prevent shortages.",
  },
  {
    title: "GST-Ready View",
    description: "GST-ready data view so compliance becomes simpler and faster.",
  },
  {
    title: "Reports & Alerts",
    description: "Founder-friendly dashboards with automatic reports & alerts—daily, weekly, and monthly.",
  },
];

function FeaturesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {FEATURES_DATA.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-4 rounded-xl border bg-card p-6 text-left shadow-sm transition-all hover:shadow-md"
        >
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            {feature.title}
          </Badge>
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}