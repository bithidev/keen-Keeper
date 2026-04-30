import { useState } from "react";

export default function Timeline() {
  const [filter, setFilter] = useState("all");

  const data = JSON.parse(localStorage.getItem("timeline")) || [];

  const filtered = filter === "all"
    ? data
    : data.filter(d => d.type === filter);
   
    

  return (
    <div className="p-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
         <h1 className="text-5xl font-bold text-[#1F2937]">Timeline</h1>

      <div className="flex gap-2 my-4">
        {["all", "Call", "Text", "Video"].map(f => (
          <button key={f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      {filtered.map((item, i) => (
        <div key={i} className="bg-white p-3 mb-2">
          <img src="" alt="" />
          <p>{item.title}</p>
          <p>{item.date}</p>
          
        </div>
      ))}
      </div>
    </div>
  );
}