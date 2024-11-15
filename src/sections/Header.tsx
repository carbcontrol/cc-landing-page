import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        {/* <p className="text-white/60 hidden md:block">Seamlessly monitor your calorie intake and stay on track the goals.</p> */}
        <div className="inline-flex gap-1 items-center">
          <p>Starts your free 1st week of Seamlessly monitor your calorie intake and stay on track the goals.</p>
          {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={80} width={80} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" >About</a>
              <a href="#" >Meal plan</a>
              <a href="#" >Scan & track</a>
              <a href="#" >Pricing</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
