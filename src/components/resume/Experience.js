import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#58C0A9] tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#58C0A9] tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Additional Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Network Administrator"
            subTitle="Motorola (1997 - 1999)"
            result="Austin, TX"
            des="Worked fulltime after completing two internships, first generation network and systems administrator. "
          />
          <ResumeCard
            title="System Engineer (Contractor)"
            subTitle="Corvalent (2012 - 2013)"
            result="Cedar Park, TX"
            des="Worked in conjunction with operations and external manufactures towards successful implementation of the test and assembly process plan for new products."
          />
          <ResumeCard
            title="Summer Intern"
            subTitle="Motorola (1997 - 1998)"
            result="Austin, TX"
            des="Had two successful summer internships and got an offer to work full time as a result of my work experience."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
