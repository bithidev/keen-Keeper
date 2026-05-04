import { useState } from "react";
import callIcon from "../../assets/call.png";
import videoIcon from "../../assets/video.png";
import textIcon from "../../assets/text.png";
export default function Timeline() {
  const [filter, setFilter] = useState("all");

  const data = JSON.parse(localStorage.getItem("timeline")) || [];

  const filtered = filter === "all"
    ? data
    : data.filter(d => d.type === filter);
   const icons = {
    Call: callIcon,
    Text: textIcon,
    Video: videoIcon
  };

  return (
    <div className="p-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
         <h1 className="text-5xl font-bold text-[#1F2937]">Timeline</h1>

      <div className="flex gap-2 my-4">
        {["All", "Call", "Text", "Video"].map(f => (
          // <button className="text-[#64748B] font-medium hover:bg-[#244D3F] px-3 py-3 rounded-xl hover:text-white " key={f} onClick={() => setFilter(f)}>{f}</button>
          <button
            key={f}
             onClick={() => setFilter(f)}
            className={`text-[#64748B] font-medium px-5 py-3 rounded-xl hover:bg-[#244D3F] hover:text-white 
           ${filter === f ? "bg-[#244D3F] text-white" : ""}`}
          >
            {f}
         </button>
        ))}
      </div>

      {filtered.map((item, i) => (
        <div key={i} className="bg-white p-4 rounded-lg flex items-center mb-6 gap-6">
          <div className="">
            <img src={icons[item.type]} alt="Icon" />
          </div>
          <div>
            {/* <p className="text-[#64748B] text-lg">{item.title}</p> */}
            <p className="text-[#64748B] text-lg">
               <span className="text-[#244D3F] font-medium text-xl">{item.type}</span> with {item.name}
           </p>
          <p className="text-[#64748B]">{item.date}</p>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  );
}