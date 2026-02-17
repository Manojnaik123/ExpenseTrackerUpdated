"use client";

import { useLanguage } from "@/app/application/context/LanguageContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";

export const PIECOLORS = ["#EC6B56", "#FFC154", "#47B39C"];

export default function PieChartComp({ data, expenseOrIncome }) {
  const { nav } = useLanguage();
  return (

    <ResponsiveContainer className="h-full w-full">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius="100%"
          innerRadius="50%"
          // paddingAngle={3}
          stroke="none"
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
            const RADIAN = Math.PI / 180;
            const radius =
              innerRadius + (outerRadius - innerRadius) / 2;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
              >
                {new Intl.NumberFormat().format(value)}
              </text>
            );
          }}
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={PIECOLORS[index % PIECOLORS.length]}
            />
          ))}

          {/* Center label */}
          <Label value={`${expenseOrIncome == 2 ? nav.expense : nav.income}`} position="center" className="text-light-primary-text dark:text-dark-primary-text" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
