import Image from "next/image";


const Homepage = () => {
  return   ( 
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/*img */}
   <div className="h-1/2 lg:h-full lg:w-1/2 position-relative">
      <Image src="/hero.png" alt="me" layout="fill" className="object-contain"/>
   </div>
   {/*body*/}
   <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col  p-5 gap-8 items-center justify-center">
       <h1 className="text-4xl md:text-6xl font-bold mb-4"> 
        Designing Tomorrows Web Today: Welcome to My Frontend Showcase
       </h1>
     <p className="font-semibold md:text-xl mb-4">Discover immersive web experiences and cutting-edge designs . As a skilled developer, I specialize in crafting 
      captivating interfaces that engage users and elevate brands. Explore
       my innovative projects and lets collaborate to bring your digital vision to
       life. Welcome to the forefront of web design!</p>
        {/*body*/}
       <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me 
            </button>
  </div>
  </div>
</div>
  );
};

export default Homepage
