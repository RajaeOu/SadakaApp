import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Casablanca', annonces: 540 },
  { name: 'Rabat', annonces: 620 },
  { name: 'Mohammedia', annonces: 210 },
  { name: 'Fes', annonces: 103 },
  { name: 'Beni Mellal', annonces: 410 },
  { name: 'Marrakech', annonces: 700 },
  { name: 'Tanger', annonces: 80 },
  // Add more data if needed
];

const RADIAN = Math.PI / 180;
const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#FF0000']; // Add more colors if necessary
const OTHERS_COLOR = '#AAAAAA'; // Color for the "Others" category

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BuyerProfilePieChart() {
  // Sorting data in descending order
  const sortedData = [...data].sort((a, b) => b.annonces - a.annonces);
  // Selecting the top 5 elements
  const topData = sortedData.slice(0, 5);
  // Selecting "Others" data
  const othersData = sortedData.slice(5);
  // Calculating the total annonces for "Others"
  const othersTotal = othersData.reduce((acc, cur) => acc + cur.annonces, 0);

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Annonces</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={topData}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="annonces"
            >
              {topData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Pie
              data={[{ name: 'Others', annonces: othersTotal }]}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              innerRadius={110}
              fill={OTHERS_COLOR}
              dataKey="annonces"
            >
              <Cell fill={OTHERS_COLOR} />
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
