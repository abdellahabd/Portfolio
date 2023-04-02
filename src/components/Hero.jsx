import React from "react";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
const Hero = () => {
  return (
    <section className="relative w-full mx-auto h-screen">
      <div
        className={`${styles.paddingX} max-w-7xl inset-0  absolute  top-[120px] mx-auto  flex flex-row gap-5 items-start
    `}
      >
        <div className="flex flex-col  items-center mt-5">
          <div className="h-5 w-5 bg-[#915eff] rounded-full" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi,i'm <span className="text-[#915eff] ">Abdellah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            handsum chikor <br className="sm:block hidden" />
            mdir l borak
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 rounded-3xl flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
