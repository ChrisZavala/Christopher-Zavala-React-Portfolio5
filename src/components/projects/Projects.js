import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,  projectFour, projectFive, projectSix } from "../../assets/";
import ProjectsCard from './ProjectsCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit my projects and email me your feedback"
          des="Portfolio"
        />
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <ProjectsCard
          title="PlanTracker"
          des=" Plan Tracker is a web based application offering client management services
                to personal trainers with features to plan their schedules, store, track,
                manage client information."
          src={projectOne}
          githubLink="https://github.com/kpeazzoni/plan-tracker-app"
          liveLink="https://plan-tracker-app.herokuapp.com/"
        />
        <ProjectsCard
          title="CineMe"
          des=" CineMe is an app the user will be able to personalize their watch list!
                You are also able to add comments on your favorite movies and rate the movies you have
                watch."
          src={projectTwo}
          githubLink="https://github.com/ChrisZavala/CineMe2.0"
          liveLink="https://cineme-2.herokuapp.com/"
        />
        <ProjectsCard
          title="Drinks R Us"
          des=" Drinks Я US: Alcohol, Ingredients,
                or Cocktail Name. Designed for people on the move looking for a quick way to access information
                on how to make their favorite cocktail."
          src={projectThree}
          githubLink="https://github.com/Re-Gi/Project1-CocktailSearch"
          liveLink="https://re-gi.github.io/Project1-CocktailSearch/"
        />
        <ProjectsCard
          title="The MVC Tech Blog"
          des=" Tech-Blog app, which allows the user to post blog posts and comment to other developers in the
               industry. Users can create accounts, edit and delete their posts and have the interaction of blog 
               app at their convenience."
          src={projectFour}
          githubLink="https://github.com/ChrisZavala/UTA-bootcamp-challenge14"
          liveLink="https://polar-castle-47001.herokuapp.com/"
        />
        <ProjectsCard
          title="CineMe Trailer"
          des=" CineMe Trailer is an extension of CineMe. I just wanted to create a site that would allow you to watch trailers
                to the movies of your choice. Again this was an extension of CineMe and soon I would like to combine both sites. " 
          src={projectFive}
          githubLink=""
          liveLink=""
        />
        <ProjectsCard
          title="Weather Dashboard"
          des=" Created a simple weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
                Pick a different city and see the 5-day forecast of that city to help your travels. Don't forget to check the forecast."
          src={projectSix}
          githubLink="https://github.com/ChrisZavala/UTA-bootcamp-challenge6"
          liveLink="https://chriszavala.github.io/UTA-bootcamp-challenge6/"
        />
      </motion.div>
    </section>
  );
}

export default Projects