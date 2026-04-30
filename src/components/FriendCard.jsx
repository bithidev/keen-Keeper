import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusColor = {
    overdue: "bg-[#EF4444]",
    "almost due": "bg-[#EFAD44]",
    "on-track": "bg-[#244D3F]",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className={`bg-white p-10 rounded-lg `}
     
    >
      <img src={friend.picture} className="w-16 h-16 rounded-full mx-auto mb-3" />
      <h2 className="text-center text-xl font-semibold">{friend.name}</h2>
      <p className="text-center text-[#64748B] text-sm pt-2">{friend.days_since_contact} days ago</p>

      <div className="flex flex-wrap gap-1 mt-2 justify-center py-3">
        {friend.tags.map(tag => (
          <span key={tag} className="text-xs bg-[#CBFADB] px-2 py-1 rounded-full text-[#244D3F] font-medium ">
            {tag}
          </span>
        ))}
      </div>
      <div className="text-center">
         <button  className={`px-4 text-[17px] py-2 rounded-full cursor-pointer font-medium text-white ${statusColor[friend.status]}`}>{friend.status}</button>
      </div>
      
    </div>
  );
}