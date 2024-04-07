"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll} from "framer-motion";
import { useRef } from "react";

const AboutPage=()=>{
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });
  
    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return(
        <motion.div 
        className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%",trasition:{delay:1}}}
        >
        {/*container*/}
        <div className="h-full overflow-scroll flex flex-col" ref={containerRef}>
            {/*text container*/}
            < div className="p-1 sm:p-4 md:p-8 lg:p-12 xl:p-20 flex flex-col gap-12 md:gap-20 lg:gap-32 xl:gap-48"> 
                {/*biography*/}
                <div className="flex flex-col gap-12 justify-center"> 
                    <h1 className="font-bold text-2xl"> BIOGRAPHY </h1>
                    <p className="text-lg"> A young Ravian with a passion for technology, I have always been drawn to both creative expression and problem-solving. This blend fuels my desire to become a skilled front-end developer, where I can craft user experiences that are both visually engaging and intuitive. </p>
                <span className="italic">
                “You cannot use up creativity. The more you use, the more you have.”
                </span>
                {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end bg-none">
            <svg width="193" height="156" viewBox="0 0 293 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="0" height="0" fill="#F5F5F5"/>
<path d="M286.001 61.7487C268.511 61.7487 250.788 67.2149 233.39 69.3598C204.26 72.9513 175.879 78.6168 147.557 86.3043C132.804 90.3086 117.056 94.0793 101.779 95.5265C91.6676 96.4845 81.2118 95.7487 71.057 95.7487C65.8307 95.7487 61.7516 94.5683 57.0014 92.1932C49.0447 88.2148 40.4261 85.0841 32.6681 80.7487C21.805 74.6782 16.4749 64.628 10.4459 54.1932C6.97377 48.1837 2.00144 37.6883 2.00144 30.7487C2.00144 23.0928 1.70086 17.2193 9.77922 14.5265C20.8261 10.8442 58.8492 -2.29577 60.0014 20.7487C60.3698 28.1164 58.9042 35.1168 57.9459 42.3043C57.1336 48.3961 55.1762 57.892 57.7792 63.7487C60.3223 69.4708 69.9875 68.0304 74.4459 65.1932C77.4072 63.3087 77.2449 60.1093 79.057 57.6932C83.1598 52.2228 83.302 46.2052 85.557 39.971C87.0325 35.8916 87.7971 31.9226 88.7792 27.7487C89.6705 23.9608 89.2397 18.8449 91.4459 15.6932C93.9772 12.077 97.6784 -2.17094 93.7792 9.52651C92.8069 12.4434 91.2014 15.1463 90.2237 17.971C89.3364 20.5341 90.4602 23.3427 88.5014 25.6932C87.1177 27.3537 88.596 30.2524 87.8903 32.1932C86.6991 35.4689 86.0014 36.6882 86.0014 40.7487C86.0014 43.3192 84.1237 44.5488 84.0014 46.7487C83.8869 48.8099 84.5342 51.3898 83.5014 53.2487C81.2623 57.2791 83.0427 67.041 85.2237 70.7487C88.0284 75.5168 90.332 72.307 93.4459 69.1932C94.9464 67.6926 93.247 64.933 94.557 63.2487C96.1908 61.1481 97.5127 58.1552 98.7792 55.7487C99.8031 53.8034 101.74 50.9673 102.001 48.7487C102.294 46.2633 106.001 46.4745 106.001 44.2487C106.001 42.8269 108.121 41.7487 109.501 41.7487C112.721 41.7487 112.001 44.1158 112.001 46.7487C112.001 51.2302 112.001 55.7117 112.001 60.1932C112.001 62.4324 111.001 72.4023 111.001 64.7487C111.001 61.2706 110.431 55.2051 113.501 52.7487C114.334 52.0826 113.788 51.0853 114.113 50.1932C114.728 48.4998 116.516 47.6545 117.446 46.1932C118.078 45.1999 119.802 40.3116 120.446 39.971C124.788 37.6722 128.017 45.5759 129.501 48.2487C131.55 51.9363 131.245 56.3646 131.001 60.7487C130.966 61.3829 128.83 64.1823 129.224 64.5265C130.732 65.8464 132.001 59.2306 132.001 58.2487C132.001 53.885 133.988 47.3837 137.001 44.1932C139.944 41.0776 140.626 36.7487 146.501 36.7487C150.473 36.7487 152.001 43.339 152.001 46.7487C152.001 51.0821 152.001 55.4154 152.001 59.7487C152.001 61.0998 151.178 65.6415 153.001 65.7487C155.462 65.8935 157.982 65.7487 160.446 65.7487C162.75 65.7487 164.034 66.0194 166.001 67.2487C169.543 69.4625 171.99 66.103 175.001 65.7487C177.117 65.4999 181.637 56.8018 181.946 54.6376C182.664 49.6132 184.032 42.7551 181.779 37.7487C180.248 34.346 177.029 32.3322 174.446 29.7487C171.075 26.3782 168.913 28.0217 165.557 30.1932C158.758 34.5923 154.607 50.2083 161.113 56.2487C165.92 60.713 169.513 64.0172 176.224 63.7487C180.959 63.5593 182.408 57.5835 183.89 54.2487C185.669 50.2457 184.001 41.9569 184.001 37.7487C184.001 36.5961 184.62 30.7389 182.001 31.971C180.139 32.8476 181.001 37.4866 181.001 39.2487C181.001 45.1406 179.604 55.5623 185.001 58.971C190.04 62.1532 189.528 66.7487 196.446 66.7487C198.343 66.7487 203.382 67.7851 203.946 65.2487C204.487 62.8148 204.12 61.6008 205.779 59.5265C206.501 58.6243 207.355 53.7983 207.779 52.5265C208.796 49.4776 208.494 45.916 209.501 42.6932C211.064 37.6924 211.001 31.9987 211.001 26.7487C211.001 21.7753 208.001 16.6109 208.001 25.1932C208.001 29.0772 211.001 32.1139 211.001 35.7487C211.001 39.2852 211.323 41.1184 212.779 44.1932C213.881 46.5198 212.505 49.7648 213.057 52.2487C213.976 56.3849 215.087 60.454 219.001 62.5265C222.097 64.1652 230.117 66.9525 233.557 64.1376C245.568 54.3106 247.001 36.0595 247.001 22.1932C247.001 18.9894 245.001 6.72958 245.001 15.971C245.001 20.5881 249.418 25.0702 253.057 27.1932C258.447 30.3376 260.001 24.6884 260.001 20.7487C260.001 18.4154 260.001 16.0821 260.001 13.7487C260.001 12.8399 260.001 17.245 260.001 18.2487C260.001 23.0915 261.744 26.1079 262.001 30.7487C262.096 32.4423 267.946 41.3995 270.001 41.6932C274.003 42.2648 280.026 46.0235 284.224 42.971C288.432 39.9106 291.001 34.4366 291.001 28.7487" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M207.753 2C205.647 2 205.602 4.42437 206.753 5" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>
                </div>
                </div>
                 {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
               {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={{ x: 0 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Graphic Designer
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Digital Marketing
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Content Writer
              </div>
            </motion.div>
            
            {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise 
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    TechnoHacks
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Content Writer and Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded application development,content generation,and
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024- present {" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Marketing Detectives
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-2024{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:flex flex-col sticky top-1 w-1/3 sticky xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
                  </div>
                 </div>
                 </div>
                </motion.div>
    );
};
export default AboutPage;