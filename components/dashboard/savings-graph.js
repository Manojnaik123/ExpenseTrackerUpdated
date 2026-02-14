"use client"

import { useCurrency } from "@/app/application/context/CurrencyContext";
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

export const generateSavingsChartData = (savings = [], timeSpanId) => {
    const now = new Date();

    // =====================================
    // 🔹 THIS MONTH → Daily Data
    // =====================================
    if (timeSpanId === 3) {
        const currentMonth = now.getMonth(); // 0-based
        const currentYear = now.getFullYear();

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Create array with all days of this month
        const chartData = Array.from({ length: daysInMonth }, (_, i) => ({
            xAxisVal: i + 1,
            value: 0,
        }));

        savings.forEach((saving) => {
            if (!saving.date) return;

            const [savingYear, savingMonth, savingDay] =
                saving.date.split("-").map(Number);

            // savingMonth is 1-based → convert to 0-based
            if (
                savingYear === currentYear &&
                savingMonth - 1 === currentMonth
            ) {
                const amount = Number(saving.amount) || 0;

                const value = amount;

                chartData[savingDay - 1].value += value;
            }
        });

        return chartData;
    }

    // =====================================
    // 🔹 LAST 3 / 6 MONTHS → Monthly Data
    // =====================================
    const monthCountMap = { 1: 6, 2: 3 };
    const monthCount = monthCountMap[timeSpanId] || 6;

    const chartData = [];

    for (let i = monthCount - 1; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

        const year = date.getFullYear();
        const month = date.getMonth();

        const monthLabel = date.toLocaleString("default", {
            month: "short",
        });

        let total = 0;

        savings.forEach((saving) => {
            if (!saving.date) return;

            const [savingYear, savingMonth] =
                saving.date.split("-").map(Number);

            if (savingYear === year && savingMonth - 1 === month) {
                const amount = Number(saving.amount) || 0;
                total += amount
            }
        });

        chartData.push({
            xAxisVal: monthLabel,
            value: total,
        });
    }

    return chartData;
};

export default function SavingGraph({ values, timeSpanId }) {

    const axisColor = "#9CA3AF4D";

    const labelColor = '#6c757d';

    const {currentCurrencySymbol} = useCurrency();

    const data = generateSavingsChartData(values, timeSpanId);

    return (
        <div className="w-full h-[350px] md:h-full">
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
                    <XAxis dataKey="xAxisVal" tick={{ fill: labelColor, fontSize: 12 }} stroke={axisColor} />
                    <YAxis
                        tick={{ fill: labelColor, fontSize: 12 }}
                        width='auto'
                        stroke={axisColor}
                        tickFormatter={(value) => {
                            if (value >= 1000)
                                return currentCurrencySymbol + (value / 1000).toFixed(1).replace(/\.0$/, '') + "K";
                            return currentCurrencySymbol +  value;
                        }}
                    />

                    {/* <Tooltip /> */}
                    <Tooltip
                        formatter={(value) => {
                            if (value >= 1000)
                                return (value / 1000).toFixed(1).replace(/\.0$/, '') + "K";
                            return value;
                        }}
                    />


                    <Area
                        type="monotone"
                        dataKey="value"
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
