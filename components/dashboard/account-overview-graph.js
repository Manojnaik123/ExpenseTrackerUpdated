"use client"

import {
    AreaChart,
    Area,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts"

const data = [
    { month: "Jan", income: 0, expense: 0 },
    { month: "Feb", income: 0, expense: 150 },
    { month: "Mar", income: 0, expense: 300 },
    { month: "Apr", income: 0, expense: 450 },
    { month: "May", income: 0, expense: 600 },
]

export default function HomeGraph() {


    const axisColor = "#9CA3AF4D";

    const labelColor = '#6c757d';

    return (
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                    {/* 🎨 Gradients */}
                    <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.6} />
                            <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                        </linearGradient>

                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#c084fc" stopOpacity={0.6} />
                            <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid horizontal vertical={false} stroke={axisColor} />
                    <XAxis dataKey="month" tick={{ fill: labelColor, fontSize: 12 }} stroke={axisColor}  />
                    <YAxis tick={{ fill: labelColor, fontSize: 12 }} width={35} stroke={axisColor} />
                    <Tooltip />

                    {/* Income */}
                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#60a5fa"
                        fill="url(#incomeGradient)"
                        strokeWidth={1}
                        dot={false}
                    />

                    {/* Expense */}
                    <Area
                        type="monotone"
                        dataKey="expense"
                        stroke="#c084fc"
                        fill="url(#expenseGradient)"
                        strokeWidth={1}
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
