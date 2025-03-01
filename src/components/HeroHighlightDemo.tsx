"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Devops{" "}
        <Highlight className="text-black dark:text-white">
          Without the Red Tape
        </Highlight>
      </motion.h1>
      <div className="header-con flex flex-col items-center gap-4 text-center">
        <div className="text-center">
          At Massdriver, we believe in prevention, not permission.
        </div>
        <div className="text-center">
          Our platform lets "ops" teams encode their expertise and your
          organization’s non-negotiables into preapproved self-service
          infrastructure powered by the IaC tools you already know.
        </div>
        <div className="text-center">
          Massdriver—Fast by default. Safe by design.
        </div>
        <div className="home-button-con">
          <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>
          <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>
        </div>
      </div>
    </HeroHighlight>
  );
}
