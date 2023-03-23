import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiNodedotjs, SiJavascript, SiMongodb } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Electrical Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 pl-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"></h4>
        <h1 className="text-6xl font-bold text-white">
        <span className="text-[#58C0A9] capitalize" style= {{color: '#58C0A9'}}>Christopher Zavala</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="white"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a full-stack developer. Currently, I am focused on building responsive full-stack web applications. 
        I am also an Electrical Engineer. I love to work on web application using technologies like Mongoose, 
        Express, React, and Node.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
