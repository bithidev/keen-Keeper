import { NavLink } from "react-router-dom";
import { FaHome, FaChartBar, FaClock } from "react-icons/fa";
 import logoImg from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 text-gray800 px-20 py-5 mx-auto">
      <img src={logoImg} alt="Keen Keeper Logo" />

      <div className="flex gap-6">
        <NavLink to="/" className={({isActive}) => {
          return `flex items-center gap-1 text-[#64748B] font-medium hover:bg-[#244D3F] px-3 py-3 rounded-xl hover:text-white ${isActive ? "bg-[#244D3F] text-white" : ""}`
        }} >
          <FaHome className="inline mr-1" /> Home
        </NavLink>

        <NavLink to="/timeline" className={({isActive}) => {
           return `flex items-center gap-1 text-[#64748B] font-medium hover:bg-[#244D3F] px-3 py-3 rounded-xl hover:text-white ${isActive ? "bg-[#244D3F] text-white" : ""}`
        }} >
          <FaClock className="inline mr-1" /> Timeline
        </NavLink>

        <NavLink to="/stats" className={({isActive}) => {
           return `flex items-center gap-1 text-[#64748B] font-medium hover:bg-[#244D3F] px-3 py-3 rounded-xl hover:text-white ${isActive ? "bg-[#244D3F] text-white" : ""}`
         }} >
          <FaChartBar className="inline mr-1" /> Stats
        </NavLink>
      </div>
    </nav>
  );
}