import React from "react";
import { bannerImg } from "../../assets";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact } from "react-icons/fa";
import {  SiExpress, SiNodedotjs, SiJavascript, SiMongodb } from "react-icons/si";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Electrical Engineer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#212428]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Christopher Zavala
            </h2>
          <h2 className="text-3xl sm:text-2xl font-bold text-[#58C0A9]">
            {text}
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="white"
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a full-stack developer. Currently, I am focused on
            building responsive full-stack web applications. I am also an
            Electrical Engineer. I love to work on web application using technologies like
            Mongoose, Express, React, and Node.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#565f69] to-[#333333] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

          </div>
          <br />
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
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


        <div>
          <img
            src={bannerImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
