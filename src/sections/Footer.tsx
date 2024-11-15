import logo from "@/assets/logo.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinked from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialTube from "@/assets/social-youtube.svg"
import Image from "next/image";


export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10">
      <div className="container flex">
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            alt="Logo"
            height={200}
            className=""
          />
          <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
        <div className="flex ml-40 flex-col gap-3">
          <div className="text-xl">Address</div>
          <div>4763 Rambling Drive,</div>
          <div>Troy Michigan 48098</div>
        </div>
        <nav className="flex ml-40 flex-col gap-3">
          <div className="text-xl">Policy</div>
          <a href="#" >Application Policy</a>
          <a href="#" >Account Deletion</a>
        </nav>
      </div>
    </footer>);
};
