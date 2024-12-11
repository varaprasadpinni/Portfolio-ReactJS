import React from 'react'
import { motion } from 'framer-motion';

const variants ={
    open:{
        transition:{
            staggerChildren:0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        },
    },
};
const itemVariants ={
    open:{
       y:0,
       opacity:1,
    },
    closed:{
       y:50,
       opacity:0,
    },
};
const Links = () => {
    const items=[
        "Home",
        "About",
        "Experience",
        "Projects",
        "Contact"
    ];
  return (
    <motion.div className='links' variants={variants}>{
        items.map((items)=>(
            <motion.a href={`#${items}`} key={items} whileHover={{scale:1.5}} whileTap={{scale:1.1}} variants={itemVariants}>{items}</motion.a>
            )
        )
    }
    </motion.div>
  )
}

export default Links