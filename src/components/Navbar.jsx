"use client";


import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import {motion} from "framer-motion";


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar=()=>{
    const[open,setOpen]= useState(false);
    const topVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)",
        }
    };
    const centerVariants={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
    };
    const bottomVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)",
        }
    };
    const listVariants={
        closed:{
            x:"100vw"
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2
            }
        },
    };
    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl hover:gray-200">
         <div className="hidden md:flex gap-5 xl:w-1/3 " >
            {links.map((link)=>( 
                <NavLink link={link} key={link.title}/>
            ))}
         </div>
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                <span className="text-white mr-1"> Umair </span>
                <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center"> Khan </span>
            </Link>
        </div>
        <div className="hidden md:flex gap-4 w-1/3">
            <Link href="https://github.com/Umairkhan2324">
            <Image src="/github.png" alt="github" width={30} height={30}/>
            </Link>
            <Link href="https://www.linkedin.com/in/umair-khan-7b87a4146/">
            <Image src="/linkedin.png" alt="linkedin" width={30} height={30}/>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100012279000643">
            <Image src="/facebook.png" alt="facebook" width={30} height={30}/>
            </Link>
            <Link href="https://www.instagram.com/umair.khan_6133/">
            <Image src="/instagram.png" alt="instagram" width={30} height={30}/>
            </Link>
        </div>
        <div className="md:hidden">
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
            onClick={() => setOpen((prev)=> !prev)}
            >
            <motion.div variants={topVariants} animate={open ? "opened":"closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            <motion.div variants={centerVariants} animate={open ? "opened":"closed"} className="w-10 h-1 bg-black rounded "></motion.div>
            <motion.div variants={bottomVariants} animate={open ? "opened":"closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            </button>
            { }
            {open && (
                <motion.div 
                variants={listVariants}
                initial="closed"
                animate="opened"
                className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl hv:gray-200 z-40">
                {links.map((link)=>(
                  <motion.div variants={listVariants} className="" key={link.title}> 
                     <Link href={link.url} key ={link.title}>
                    {link.title}
                    </Link>
                    </motion.div>
                ))}
            </motion.div>)}
        </div>
    </div>
    )
}
export default Navbar