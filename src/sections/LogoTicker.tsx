'use client';

import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celestiaLogo from "@/assets/logo-celestial.png"
import pulesLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return (
    <>
      <div className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image src={acmeLogo} alt="Acme Logo" className="logo-tic" />
              <Image src={quantumLogo} alt="Quantum Logo" className="logo-tic" />
              <Image src={echoLogo} alt="Echo Logo" className="logo-tic" />
              <Image src={celestiaLogo} alt="Celestia Logo" className="logo-tic" />
              <Image src={pulesLogo} alt="Pules Logo" className="logo-tic" />
              <Image src={apexLogo} alt="Apex Logo" className="logo-tic" />
              <Image src={acmeLogo} alt="Acme Logo" className="logo-tic" />
              <Image src={quantumLogo} alt="Quantum Logo" className="logo-tic" />
              <Image src={echoLogo} alt="Echo Logo" className="logo-tic" />
              <Image src={celestiaLogo} alt="Celestia Logo" className="logo-tic" />
              <Image src={pulesLogo} alt="Pules Logo" className="logo-tic" />
              <Image src={apexLogo} alt="Apex Logo" className="logo-tic" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
