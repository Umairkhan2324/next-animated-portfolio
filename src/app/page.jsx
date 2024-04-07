"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  const text = "Umair Khan";
  return   ( 
    <motion.div 
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
   <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative border-green-500 z-[10]">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
   {/*body*/}
   <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center z-[20]">
       <h1 className="text-xl md:text-2xl font-bold "> 
        Designing Tomorrows Web Today with <div className="text-2xl font-bold">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
       </h1>
     <p className="font-semibold md:text-sm ">Discover immersive web experiences and cutting-edge designs . As a skilled developer, I specialize in crafting 
      captivating interfaces that engage users and elevate brands. Explore
       my innovative projects and lets collaborate to bring your digital vision to
       life. Welcome to the forefront of web design!</p>
  
       <div className="w-full flex gap-10">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/about">
              About Me
              </Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link  href="/contact">
              Contact Me 
              </Link>
            </button>
  </div>
  </div>
</div>
</motion.div>
  );
};

export default Homepage;
