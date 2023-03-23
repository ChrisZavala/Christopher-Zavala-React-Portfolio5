import React from 'react'
import { FaMailBulk, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className='flex-grow'>
      <div className="justify-between flex flex-col items-center h-full">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-2">
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
      <div className="w-full py-10">
        <p className="text-center text-gray-500 text-base">
           Christopher Zavala © 2023 
        </p>
      </div>
    </div>
  );
}

export default Footer;
