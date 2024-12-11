import React, { useRef } from 'react'
import "./FutureProjects.css"
import { motion,useScroll,useSpring,useTransform } from 'framer-motion';

const items = [
  {
    id:1,
    title:"Perfect Potraits ",
    img:"https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400",
    decs:"lorem ipsum sum of the a tiny code extension made up of a few commands that generate a and insert a lorem ipsum"
  },
  {
    id:2,
    title:"React Commerce",
    img:"https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=400",
    decs:"lorem ipsum sum of the a tiny code extension made up of a few commands that generate a and insert a lorem ipsum"
  },
  {
    id:3,
    title:"TO-DO_List_App",
    img:"https://images.pexels.com/photos/3832031/pexels-photo-3832031.jpeg?auto=compress&cs=tinysrgb&w=400",
    decs:"lorem ipsum sum of the a tiny code extension made up of a few commands that generate a and insert a lorem ipsum"
  },
  {
    id:4,
    title:"electronic app",
    img:"https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg?auto=compress&cs=tinysrgb&w=400",
    decs:"lorem ipsum sum of the a tiny code extension made up of a few commands that generate a and insert a lorem ipsum"
  },
];

const Single = ({item}) =>{
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["end end","start start"]
  });
  
  const y = useTransform(scrollYProgress, [0,1],["0%","-300"]);

  return(

    <section >
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
        <img src={item.img} alt=''/>
        </div>
        <motion.div className='textContainer'>
          <h2>{item.title}</h2>
          <p>{item.decs}</p>
          <button >
          <a href='http://localhost:3001/'></a>
            See Demo </button>
        </motion.div>
        </div>
      </div>

    </section>
  );
};


const FutureProjects = () => {

  const ref = useRef();

  const {scrollYProgress} =  useScroll({target: ref, offset:["end end","start start"]});

  const scaleX = useSpring(scrollYProgress,{
    stiffness :100,
    damping :30,

  });
  return (
    <div className='projects' ref={ref}>
      <div className='progress'>
        <h1>Featured Projects</h1>

        <motion.div style={{scaleX}} className="ProgressBar">

        </motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
      </div>
  )
};

export default FutureProjects;
