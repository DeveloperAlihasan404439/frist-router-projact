import React from "react";
import { SiShopify } from "react-icons/si";
import { BsTwitter,BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-6 p-10 bg-[#150F2D] text-white">
      <aside>
        <SiShopify className="text-8xl"/>
        <p className="font-bold">
          MCTI Industries Ltd. <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © 21-09-2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-4xl">
          <BsTwitter/>
          <BsFacebook/>
          <AiFillYoutube/>
          <BiLogoLinkedin/>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
