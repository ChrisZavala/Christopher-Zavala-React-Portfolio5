import React from "react";
import { motion } from "framer-motion";
// import ResumeCard from "./ResumeCard";
import html from "../resume/skills/html.png";
import css from "../resume/skills/css.png";
import javascript from "../resume/skills/javascript.png";
import reactImage from "../resume/skills/react.png";
import nextjs from "../resume/skills/nextjs.png";
import graphql from "../resume/skills/graphql.png";
import github from "../resume/skills/github.png";
import tailwind from "../resume/skills/tailwind.png";
import node from "../resume/skills/node.png";
import mongo from "../resume/skills/mongo.png";
import firebase from "../resume/skills/firebase.png";
import express from "../resume/skills/express.png";

const technicalSkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="font-titleFont flex gap-20"
    >
      <div
        name="experience"
        className="bg-gradient-to-b bg-bodyColor to-black w-full h-screen/2" // change height to take up less space
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
  
};

export default technicalSkills;
