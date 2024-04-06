"use client"

import { motion } from "framer-motion";

const TestPage=()=>{
return (
        <div className="h-full flex items-center justify-center">TestPage
        <motion.div 
        className="w-96 h-96 bg-green-500 rounded"
        initial={{x:-100}}
        animate={{x:400,y:200,opacity:0.7}}
        transition={{delay:1,duration:2}}
        ></motion.div>
        </div>
        
);
};
export default TestPage;