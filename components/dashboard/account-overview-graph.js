"use client"

import { useCurrency } from "@/app/application/context/CurrencyContext";
import { useLanguage } from "@/app/application/context/LanguageContext";
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

export default function HomeGraph({ income = [], expense = [] }) {

    const { currentCurrencySymbol } = useCurrency();

    const axisColor = "#9CA3AF4D";
    const labelColor = '#6c757d';

    // 🔥 Merge both arrays
    const mergedData = income.map((incItem, index) => ({
        xAxisVal: incItem.xAxisVal,
        income: incItem.value || 0,
        expense: expense[index]?.value || 0,
    }));

    return (
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={mergedData}
                    margin={{ top: 0, right: 0, bottom: 0, left: 20 }}
                >

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

                    <XAxis
                        dataKey="xAxisVal"
                        tick={{ fill: labelColor, fontSize: 12 }}
                        stroke={axisColor}
                    />

                    <YAxis
                        tick={{ fill: labelColor, fontSize: 12 }}
                        width={35}
                        stroke={axisColor}
                        tickFormatter={(value) => {
                            if (value >= 1000)
                                return currentCurrencySymbol + (value / 1000).toFixed(1).replace(/\.0$/, '') + "K";
                            return currentCurrencySymbol + value;
                        }}
                    />

                    <Tooltip
                        formatter={(value) => {
                            if (value >= 1000)
                                return (value / 1000).toFixed(1).replace(/\.0$/, '') + "K";
                            return value;
                        }}
                    />
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
    );
}
