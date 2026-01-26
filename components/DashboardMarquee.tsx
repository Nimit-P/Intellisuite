"use client"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, DollarSign, Users, Activity, ShoppingCart, AlertCircle, BarChart3 } from "lucide-react"
import { Marquee } from "./ui/marquee"

// Components for different dashboard widgets
const StatWidget = ({ title, value, change, trend }: { title: string, value: string, change: string, trend: 'up' | 'down' }) => {
    return (
        <div className="relative w-56 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-500">{title}</span>
                <div className={`p-1.5 rounded-lg ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
            <div className={`text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                {change} from last month
            </div>
        </div>
    )
}

const GraphWidget = ({ title, color }: { title: string, color: string }) => {
    return (
        <div className="relative w-72 h-40 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">{title}</span>
                <BarChart3 className="text-gray-400" size={18} />
            </div>
            <div className="flex items-end gap-2 h-24 w-full pt-4">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-t-sm opacity-80 ${color}`}
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>
        </div>
    )
}

const AlertWidget = ({ message, type }: { message: string, type: 'warning' | 'info' }) => {
    return (
        <div className="relative w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-3">
            <div className={`p-2 rounded-full ${type === 'warning' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                <AlertCircle size={20} />
            </div>
            <div>
                <div className="text-sm font-semibold text-gray-900">System Alert</div>
                <div className="text-xs text-gray-500">{message}</div>
            </div>
        </div>
    )
}

const SalesWidget = () => {
    return (
        <div className="relative w-80 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">Recent Sales</span>
                <span className="text-xs text-blue-600 font-medium">View All</span>
            </div>
            <div className="space-y-3">
                {[
                    { name: 'Product A', amt: '$1,200', time: '2m ago' },
                    { name: 'Service B', amt: '$850', time: '15m ago' },
                    { name: 'Plan C', amt: '$2,400', time: '1h ago' },
                ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-gray-700">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-900">{item.amt}</span>
                            <span className="text-gray-400 text-xs">{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const firstRow = [
    <StatWidget key="1" title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" />,
    <GraphWidget key="2" title="Daily Active Users" color="bg-blue-500" />,
    <StatWidget key="3" title="Expenses" value="$12,450.00" change="-4.5%" trend="down" />,
    <AlertWidget key="4" message="Inventory low on SKU-124" type="warning" />,
    <SalesWidget key="5" />,
]

const secondRow = [
    <GraphWidget key="1" title="Profit Margins" color="bg-green-500" />,
    <StatWidget key="2" title="Net Profit" value="$32,781.89" change="+12.3%" trend="up" />,
    <AlertWidget key="3" message="New integration connected" type="info" />,
    <GraphWidget key="4" title="Growth Rate" color="bg-purple-500" />,
    <StatWidget key="5" title="Customer CAC" value="$45.00" change="-2.1%" trend="up" />,
]

export function DashboardMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white/50 py-8 gap-6">
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((item, index) => (
                    <div key={index} className="px-3">{item}</div>
                ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:40s]">
                {secondRow.map((item, index) => (
                    <div key={index} className="px-3">{item}</div>
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50/50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50/50"></div>
        </div>
    )
}
