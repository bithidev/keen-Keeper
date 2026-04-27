import React from "react";
import logoImg from "../../assets/logo.png";
import homeIcon from "../../assets/vector.png";
import timelineIcon from "../../assets/Clock.png";
import statsIcon from "../../assets/ChartLine.png";
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between px-20 py-4 mx-auto">
     <img src={logoImg} alt="Keen Keeper Logo" />
     <ul className="flex gap-4">
      <li><a href="/home" className="flex gap-2 text-[#64748B] font-medium"><img src={homeIcon} alt="Home" />Home</a></li>
      <li><a href="/timeline" className="flex gap-2 text-[#64748B] font-medium"><img src={timelineIcon} alt="timeline" />Timeline</a></li>
      <li><a href="/contact" className="flex gap-2 text-[#64748B] font-medium"><img src={statsIcon} alt="timeline" />Stats</a></li>
     </ul>
    </nav>
    
    </>
  );
};

export default Navbar;