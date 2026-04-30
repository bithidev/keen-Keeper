import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LuPhoneCall } from "react-icons/lu";
import { MdTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { RiNotificationSnoozeLine } from "react-icons/ri";


export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/keen-keeper/friends.json")
      .then(res => res.json())
      .then(data => setFriend(data.find(f => f.id == id)));
  }, [id]);

  const handleAction = (type) => {
    const entry = {
      type,
      date: new Date().toLocaleDateString(),
      title: `${type} with ${friend.name}`
      
      
    };

    const prev = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([entry, ...prev]));

    toast.success(`${type} added!`);
  };

  if (!friend) return <p>Loading...</p>;

  const statusColor = {
    overdue: "bg-[#EF4444]",
    "almost due": "bg-[#EFAD44]",
    "on-track": "bg-[#244D3F]",
  };
  return (
    <div className=" bg-[#F8FAFC] py-20">
     <div className=" container mx-auto grid grid-cols-2 gap-6">
       <Toaster />
     <div className="bg-white p-6">
      <img src={friend.picture} className="w-16 h-16 rounded-full mx-auto mb-3 " />
      <h1 className="text-2xl font-bold text-center py-3">{friend.name}</h1>
      
       <div className="text-center">
         <button  className={`px-4 text-[17px] py-2 rounded-full cursor-pointer font-medium text-white ${statusColor[friend.status]}`}>{friend.status}</button>
      </div>

      <div className="flex flex-wrap gap-1 mt-2 justify-center py-2">
        {friend.tags.map(tag => (
          <span key={tag} className="text-xs bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F] font-medium ">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-center py-3 text-[#64748B] font-medium">{friend.bio}</p>
      <p className="text-center text-[#64748B] font-medium">Preferred: {friend.email}</p>
     </div>
     <div className="">
      <div className="flex gap-8">
        <div className="bg-white px-4 py-8 rounded-lg w-full">
          <h2 className=" text-3xl text-[#244D3F] font-semibold text-center">{friend.days_since_contact}</h2>
          <p className="text-lg text-[#64748B] pt-2 text-center">Days Since Contact</p>
        </div>
        <div className="bg-white px-4 py-8 rounded-lg w-full">
          <h2 className="text-2xl text-[#244D3F] font-semibold text-center">{friend.goal}</h2>
          <p className="text-lg text-[#64748B] pt-2 text-center">Goal</p>
        </div>
        <div className="bg-white px-4 py-8 rounded-lg w-full">
          <h2 className="text-2xl text-[#244D3F] font-semibold text-center">{friend.next_due_date}</h2>
          <p className="text-lg text-[#64748B] pt-2 text-center">Next Due Date</p>
        </div>
      </div>
      <div className="bg-white p-6 mt-8">
        <h3 className="text-[#244D3F] text-lg font-semibold pb-4">Relationship Goal</h3>
        <p className="text-[#64748B]">Connect every <span className="text-[#244D3F] font-bold">{friend.goal} days</span> </p>
      </div>
     </div>
     <div className=" flex-row ">
      <div className="bg-white my-5 p-4 rounded-lg ">
         <button className="text-[#1F2937] font-medium flex items-center gap-1">
          <RiNotificationSnoozeLine />

           <p>Snooze 2 weeks </p>
        </button>
      </div>
      <div className="bg-white my-5 p-4 rounded-lg ">
         <button className="text-[#1F2937] font-medium flex items-center text-center gap-2">
          <BsArchive />

           <p>Archive </p>
        </button>
      </div>
      <div className="bg-white my-5 p-4 rounded-lg">
         <button className="text-red-500 flex items-center gap-2 ">
          <MdDeleteOutline />
           <p>Delete </p>
        </button>
      </div>
     </div>
     <div> 

      <div className="mt-6 gap-4 bg-white p-6 rounded-lg">
        <h3 className="text-xl font-medium pb-4">Quick Check-In</h3>
        <div className="flex gap-6">
          <div className="bg-[#F8FAFC]">
          <button onClick={() => handleAction("Call")} className="btn p-10 w-full"><LuPhoneCall />Call</button>
          </div>
        <div className="bg-[#F8FAFC]">
          <button onClick={() => handleAction("Text")} className="btn p-10"> <MdTextsms />Text</button>
        </div>
        <div className="bg-[#F8FAFC]">
          <button onClick={() => handleAction("Video")} className="btn p-10"><CiVideoOn />Video</button>
        </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  );
}