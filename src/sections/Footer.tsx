import logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinked from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialTube from "@/assets/social-youtube.svg"
import Image from "next/image";


export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:top-1 before:bottom-1 before:w-full before:blur before:content-[''] before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#" >About</a>
          <a href="#" >Feature</a>
          <a href="#" >Customers</a>
          <a href="#" >Pricing</a>
          <a href="#" >Help</a>
          <a href="#" >Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinked />
          <SocialPin />
          <SocialTube />
        </div>
        <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>);
};