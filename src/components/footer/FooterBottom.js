import React from 'react'
import { FaGithub, FaMailBulk, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"
import { Link } from "react-router-dom"

const FooterBottom = () => {
 return (
  <div className='flex-grow'>
    <div className="w-full h-[100vmin] flex flex-col items-center justify-end py-4">
      <div className="w-full flex flex-col items-center gap-4 pb-8">
        <img className="w-32" src={logo} alt="logo" />
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
  </div>
 );
}

export default FooterBottom;
