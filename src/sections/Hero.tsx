'use client';

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cyclinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start',]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FF7049,#FFF0E4_60%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-full mt-5">
            <div className="flex justify-center">
              <div className="tag text-[#e43e00]">Version 1.0 is here</div>
            </div>
            <h1 className="md:text-7xl text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#e43e00] to-[#FF4500] text-transparent bg-clip-text mt-6" >
              <div className="text-center">Carb Control</div>
            </h1>
            <p className="text-xl text-[#FF4500] tracking-tight mt-6 text-center">Get personalized diet plans and easily track calories by scanning your meals, helping Get personalized diet plans and easily track calories by scanning your meals, helping Get personalized diet plans and easily track calories by scanning your meals, helping Get personalized diet plans and you stay on track with your health goals.</p>
            <div className="flex gap-1 justify-center items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
            {/* <div
              className="mt-20 md:mt-0 md:h-[648px] relative">
              <motion.img
                src={cogImage.src}
                alt="cog image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:left-40 md:mt-20 lg:left-80 lg:mt-20"
                animate={{
                  translateY: [-10, 10]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 6,
                  ease: "easeInOut"
                }}
              /> */}
              {/* <motion.img
                src={cyclinderImage.src}
                width={220}
                height={220}
                alt="cyclinder image"
                className="hidden md:block -top-10 -left-62 md:absolute"
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src={noodleImage.src}
                width={200}
                alt="Noodle Image"
                className="hidden: lg:block absolute top-[524px] left-[948px] rotate-[30deg]"
                style={{
                  translateY: translateY,
                }}
              /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
