
import { motion,useInView} from "framer-motion"
import "./AboutServices.css"
import React, { useRef } from 'react'
import Tilt from "react-parallax-tilt"
import Services from "./AboutIndex"

const variants={
    initial:{
        x:-500,
        y:100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const AboutServices = () => {

    const ref = useRef();

    const isInView =useInView(ref,{margin:"-100px"});
  return (
   <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"isInView" && "animate"}>
    <motion.div className="textContainer">
        <p>
            Innovate
        </p>
        <hr/>

    </motion.div>

    <motion.div className="titleContainer">
        <div className="title">
            <img src="/About.jpg" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>About</motion.b>Me
            </h1>
            <button>WHAT ABOUT US</button>
        </div>
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Skills & Expertise</h2>
            <p>React.js: Expertise in developing robust single-page applications .
                Styling: Skilled in CSS, Sass, and CSS-in-JS libraries such as 
                styled-components and Emotion.
                API Integration: Competent in integrating RESTful APIs to connect frontend applications with 
                backend services.</p>

                <button>KNOW MORE</button>

        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Professional Experience</h2>
            <p>Developed responsive and user-friendly web applications using React.js.
Collaborated with designers and backend developers to implement new features and optimize performance.
Contributed to code reviews and ensured adherence to best practices for code quality and maintainability.</p>

                <button>KNOW MORE</button>

        </motion.div>
       
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Personal Attributes</h2>
            <p>Problem Solver: Enjoy tackling challenges and finding innovative solutions to improve application performance and user experience.
               Team Player: Strong collaborator with excellent communication skills, able to work effectively in agile team environments.</p>

                <button>KNOW MORE</button>

        </motion.div>

        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Let's Connect</h2>
            <p>I'm always excited to take on new challenges and collaborate on innovative projects. Feel free to reach out to discuss potential opportunities or just to connect!</p>

                <button>KNOW MORE</button>

        </motion.div>
    </motion.div>
   </motion.div>
  );
};

export default AboutServices