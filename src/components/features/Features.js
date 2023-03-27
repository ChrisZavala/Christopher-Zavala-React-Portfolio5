import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import {  FaLaptop } from "react-icons/fa";
import { HiChip, HiServer } from 'react-icons/hi';
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <Card
          title="System Engineer"
          des="As a system engineer I was responsible for providing advice regarding the appropriate 
          hardware and/or software to ensure a client's computer system meets their needs."
         
        />
        <Card
          title="Web App Developer"
          des="I’m a full-stack developer. Currently, I am focused on building responsive full-stack 
          web applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Test Engineer"
          des="Testing all aspects of a product, logging issues and reproducing results
          to ensure a high quality product as a result of through testing."
          icon={<HiServer />}
        />
        <Card
          title="Developer"
          des="Having a wide range of development experience, my focus now is to learn and 
          gain as much experience in the MERN Full-Stack Development."
          icon={<HiChip />}
        />
        <Card
          title="FrontEnd Designer"
          des="I have just begun my journey to learn as much as possible to become a well-rounded
          front end designer to compliment the skills I have on the back end design."
          icon={<SiAntdesign />}
        />
        <Card
          title="Computer Engineer"
          des="My professional experience in computer engineering has been with designing, 
          testing and ensuring over-clocked CPU for high performance single threaded applications."
          icon={<FaLaptop />}
        />
      </motion.div>
    </section>
  );
}

export default Features