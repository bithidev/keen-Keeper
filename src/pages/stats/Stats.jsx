// import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// export default function Stats() {
//   // const data = JSON.parse(localStorage.getItem("timeline")) || [];

//   // const count = {
//   //   Call: 0,
//   //   Text: 0,
//   //   Video: 0
//   // };

//   // data.forEach(d => count[d.type]++);

//   // const chartData = Object.keys(count).map(k => ({
//   //   name: k,
//   //   value: count[k]
//   // }));


// const data = [
//   { name: 'Text', value: 400, fill: '#7E35E1' },
//   { name: 'Call', value: 300, fill: '#244D3F' },
//   { name: 'Video', value: 300, fill: '#37A163' },
  
// ];

//   return (
//    <div className="bg-[#F8FAFC] py-20">
//      <div className="p-6 container mx-auto">
//       <h1 className="text-5xl font-bold text-[#1F2937] pb-6">Friendship Analytics</h1>
//       <div className="bg-white p-8">
//         <h3 className="text-xl font-medium text-[#244D3F]">By Interaction Type</h3>
//       {/* <PieChart width={400} height={400}>
//         <Pie data={chartData} dataKey="value">
//           {chartData.map((_, i) => <Cell key={i} />)}
//         </Pie>
//       </PieChart> */}
//        <div className="flex justify-center items-center ">
//           <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
//       <Pie
//         data={data}
//         innerRadius="80%"
//         outerRadius="100%"
        
//         cornerRadius="50%"
//         fill="#8884d8"
       
//         paddingAngle={5}
//         dataKey="value"
//         isAnimationActive={true}
//       />
//      <Legend/>
//       <Tooltip />
//     </PieChart>
//        </div>
//       </div>
//     </div>
//    </div>
//   );
// }

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function Stats() {
  const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

  
  const count = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    if (count[item.type] !== undefined) {
      count[item.type]++;
    }
  });

 
  const data = [
    { name: "Call", value: count.Call, fill: "#7E35E1" },
    { name: "Text", value: count.Text, fill: "#244D3F" },
    { name: "Video", value: count.Video, fill: "#37A163" },
  ];

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="p-6 container mx-auto">
       <h1 className="text-5xl font-bold text-[#1F2937] pb-6">Friendship Analytics</h1>
      
      <div className="bg-white p-8">
         <h3 className="text-xl font-medium text-[#244D3F]">By Interaction Type</h3>
         <div className="w-full max-w-md mx-auto h-100 py-6">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="100%"
              cornerRadius={10}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      </div>
      
      </div>
    </div>
  );
}