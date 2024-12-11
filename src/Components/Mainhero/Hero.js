import "./Hero.css"
import { color, motion } from 'framer-motion';

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },
    
};
const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x: "-220%",
        transition:{
           repeat:Infinity,
           repeatType:"mirror",
           duration:30,
        
        },
    },
    
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
           <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
               <motion.h2 variants={textVariants}>VARA PRASAD</motion.h2>
                <motion.h1 variants={textVariants}>Web and Mern Stack developer</motion.h1>
                <motion.p variants={textVariants}>Frontend Developer with high level of experience in web development,producting the Quality work</motion.p>
                 <motion.div variants={textVariants} className="buttons">
                   <motion.button variants={textVariants}>Resume</motion.button>
                   <motion.button variants={textVariants}>Contact me</motion.button>
                </motion.div>
              <motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll-bar.png" alt=""/>
              </motion.div>
        </motion.div>

        </div>
        <motion.div className="SlidingTextContainer" variants={sliderVariants} animate="animate" initial="initial">
            FrontEnd Developer And Web Designer.

        </motion.div>
        <div className="imageContainer">
            <motion.img src="\Example.png" alt="" whileHover={{scale:1.1}} />
        </div>
    </div>
  )
}

export default Hero