"use client"
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider=({children})=>{
 
 const pathName = usePathname()
    return(
    <AnimatePresence mode="wait">
    <div  key={pathName} 
          className="flex-full w-screen h-screen bg-gradient-to-b from-blue-50 to-green-300 repeat">
        <motion.div className="h-screen w-screen bg-black fixed rounded-b-[100px] z-40"
        animate={{height:"0vh"}}
        exit={{height:"140vh"}}
        transition={{duration:1}}
        />
         <motion.div className="fixed m-auto top-0 bottom-0 right-0 left-0 text-white text-6xl cursor-default z-50 w-fit h-fit"
        initial={{opacity:1}}
        animate={{opacity:0,transition:{delay:1}}}
        exit={{opacity:0}}
        transition={{opacity:0.7,duration:2}}>
        {pathName.substring(1)}
        </motion.div>
         <motion.div className="h-screen w-screen bg-green-500 rounded-t-[100px] z-30"
        initial={{height:"140vh"}}
        animate={{height:"0vh", transition:{delay:1}}}
        />
          <div className="h-24">
          <Navbar/>
          </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
    </AnimatePresence>
 );
};
export default TransitionProvider