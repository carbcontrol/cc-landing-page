"use client";

import productImage from "@/assets/meal-plan.png"
import mealEmptyImage from "@/assets/meal-empty.png"
import pyramindImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <>
      <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#FFF0E4] py-24 overflow-x-clip">
        <div className="container">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag text-[#e43e00]">Meal plan</div>
            </div>
            <h2 className="section-title mt-5">A smarter way to design your diet plan</h2>
            <p className="section-description mt-5">
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
            </p>
          </div>
          <div className="relative">
            <div className="flex flex-col gap-20 items-center justify-center mt-10 lg:flex-row lg:items-end lg:justify-center">
              <Image
                src={mealEmptyImage}
                alt="Product image"
                className="mt-10"
              />
              <Image
                src={productImage}
                alt="Product image"
                className="mt-10"
              />
            </div>
            <motion.img
              src={pyramindImage.src}
              alt="Pyramind image"
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-32"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={tubeImage.src}
              alt="Pyramind image"
              height={248}
              width={248}
              className="hidden md:block absolute bottom-24 -left-36"
              style={{
                translateY,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
