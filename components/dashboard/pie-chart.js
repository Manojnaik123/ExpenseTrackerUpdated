"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
  // ResponsiveContainer
} from "recharts";

const data = [
  { name: "Housing", value: 400 },
  { name: "Social Events", value: 800 },
  { name: "Education", value: 300 },
];

const COLORS = ["red", "yellow", "green"];

export default function PieChartComp() {
  return (
    <div className="w-full h-[100%]  flex justify-center items-center">
      {/* <ResponsiveContainer className="h-full w-full max-w-175 max-h-125"> */}
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="95%"
            innerRadius="40%"
            paddingAngle={3}
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
                  {value}
                </text>
              );
            }}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

            {/* Center label */}
            <Label value="Expenses" position="center" className="text-light-primary-text dark:text-dark-primary-text" />
          </Pie>

          <Tooltip />
        </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}
