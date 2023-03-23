import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#58C0A9] tracking-[4px]">2000 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Background</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Electrical Engineering"
            subTitle="The University of Texas at San Antonio (2008 - 2010)"
            result="3.10/4"
            des="My focus was Computer Engineering."
          />
          <ResumeCard
            title="MERN Full-Stack Web Developer"
            subTitle="The University of Texas at Austin (2022-2023)"
            result="93.9/100"
            des="Coding Boot Camp that included foundations taught in the MERN Full-Stack Web Development Program."
          />
          <ResumeCard
            title="Electrical Engineering (2000-2003)"
            subTitle="Texas A&M University"
            result=""
            des="This is where I started my work on my BS Electrical Engineering"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-[#58C0A9] tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Platform Support Technician"
            subTitle="Intel - (2021 - 2022)"
            result="Austin, TX"
            des="Assembling various computer systems using various hardware components.
            Debugging issues in the computer systems to have these systems functioning for engineers. ."
          />
          <ResumeCard
            title="System Engineer"
            subTitle="BOXX Technologies, - (2013 - 2020)"
            result="Austin, TX"
            des="In-depth Management of ODM and OEM partners for product development. Development of engineering
            schedules and processes for successful delivery of products."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="General Dynamics C4 Systems - (2010 - 2012)"
            result="Phoenix, AZ"
            des="Contributed to the software development for the Taclane Multibook Project. 
            Performs detailed design and test of software, electrical, or mechanical components or subsystems. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education