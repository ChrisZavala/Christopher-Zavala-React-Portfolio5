import React from 'react'
import { FaGithub, FaMailBulk, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Christopher Zavala</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Full-Stack Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Please contact me at your earliest opportunity to talk about any job opportunities.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">512.435.9399</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">frappejcat@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4"></h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/ChrisZavala">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:frappejcat@gmail.com">
            <FaMailBulk />
            </a>
          </span>
        
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/christopher-zavala-569703268/">
            <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft