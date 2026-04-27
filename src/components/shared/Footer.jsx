import React from "react";
import footerLogo from "../../assets/Footerlogo.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
const Footer = () => {
  return (
    <>
    <footer>
      <div className="bg-[#244D3F] ">
        <div className="py-20 container mx-auto justify-center text-center">
          <img src={footerLogo} alt="Footer Logo" className="inline-block" />
          <p className="pt-4 pb-6 text-[#d7d9db]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
           <p className="pb-4 text-[#d7d9db] font-semibold text-lg">Social Links</p>
          <div className="gap-4 flex justify-center">
            <div className="inline-flex gap-4 pb-10">
              <img src={facebookIcon} alt="Facebook" />
              <img src={twitterIcon} alt="Twitter" />
              <img src={instagramIcon} alt="Instagram" />
            </div>
          </div>
        
        <div className="flex text-[#ffffff93] justify-between border-t pt-7 ">
          <p>© 2026 Digitools. All rights reserved.</p>
          <ul className="flex gap-4">
            <li>Privacy Policy</li>
            <li> Terms of Service</li>
            <li> Cookies</li>
          </ul>
         </div>
        </div>
      </div>
     
    </footer>
    
    </>
  );
};

export default Footer;