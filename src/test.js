import {motion} from "framer-motion"

import React, { useState } from 'react'

const Test = () => {
    const [open, setOpen] = useState(false)                  // Using useState

    const variants ={
        visible:(i)=>(
            {opacity:1, x:800, transition:{delay: i * 0.3 },
        }),
        hidden:{opacity:0},
    }

    const items=["item1","item2","item3","item4"];

  return (
    <div className='course'>
       <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,i)=>(            // Using Map method

         <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
         ))}
       </motion.ul>
    </div>
  );
};

export default Test