import { PieChart, Pie, Cell } from "recharts";

export default function Stats() {
  const data = JSON.parse(localStorage.getItem("timeline")) || [];

  const count = {
    Call: 0,
    Text: 0,
    Video: 0
  };

  data.forEach(d => count[d.type]++);

  const chartData = Object.keys(count).map(k => ({
    name: k,
    value: count[k]
  }));

  return (
   <div className="bg-[#F8FAFC] py-20">
     <div className="p-6 container mx-auto">
      <h1 className="text-5xl font-bold text-[#1F2937] pb-6">Friendship Analytics</h1>
      <div className="bg-white p-8">
        <h3 className="text-xl font-medium text-[#244D3F]">By Interaction Type</h3>
      <PieChart width={400} height={400}>
        <Pie data={chartData} dataKey="value">
          {chartData.map((_, i) => <Cell key={i} />)}
        </Pie>
      </PieChart>
      </div>
    </div>
   </div>
  );
}