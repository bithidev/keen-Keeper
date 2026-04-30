import { useEffect, useState } from "react";
import PlusIcon from "../assets/Plus.png";
import FriendCard from "../components/FriendCard";

export default function Home() {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    fetch("friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  if (!friends) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <div className="bg-[#F8FAFC] py-20">
        <div className=" container mx-auto">
          <div className="text-center py-10 ">
        <h1 className="text-[#1F2937] font-bold text-5xl">Friends to keep close in your life</h1>
        <p className="text-[#64748B] pt-4 pb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
         relationships that matter most.</p>
         <div className="inline-flex ">
          <button className="bg-[#244D3F] flex px-4 py-3 rounded-sm gap-2 text-white font-medium items-center"><img src={PlusIcon} alt="Add Friend" />Add a Friend</button>
         </div>
      </div>

      <h2 className="text-[#1F2937] font-semibold text-2xl">Your Friends</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 p-6">
        {friends.map(f => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>
        </div>
      </div>
    </>
  );
}