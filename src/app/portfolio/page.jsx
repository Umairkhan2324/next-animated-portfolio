"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-100 to-green-500",
    title: "React Commerce",
    desc: "Crafted with React, this dynamic e-commerce website delivers a seamless shopping experience.  ",
    img: "/Ecommerce.jpg",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-100 to-green-500",
    title: "Next.js Medium Blog",
    desc: "Next.js's official Medium blog, by the React team, offers a wealth of knowledge for developers.",
    img: "/blog.png",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-blue-100 to-green-500",
    title: "Netflix App",
    desc: "Calling all movie and show enthusiasts! Build your own Netflix-like platform with React!",
    img: "/netflix.png",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-blue-100 to-green-500",
    title: "Spotify Music App",
    desc: "Bring your musical vision to life! This React-based Spotify clone empowers you to build a music streaming app.",
    img: "/spotify.jpg",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative " ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Expertise
        </div>
        <div className="sticky top-0 flex h-screen gap-1 items-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-500" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-36 md:w-56 md:h-34 lg:w-[300px] lg:h-[200px] xl:w-[350px] xl:h-[220px]">
                    <Image src={item.img} alt="" fill/>
                  </div>
                  <p className="w-60 md:w76 lg:w-[400px] lg:text-lg xl:w-[500px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    <button className="p-2 text-sm flex flex-col md:p-4 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded" layout='fill'>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center relative">
        <h1 className="text-6xl relative justify-center items-end">Do you have a project?</h1>
        <div className="relative">
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;