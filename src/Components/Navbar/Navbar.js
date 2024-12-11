
import './Navbar.css';
import {motion} from "framer-motion"
import Sidebar from './Sidebar/sidebar';


const Navbar = () => {
  return (
    <div className='navbar'>
        {/*sidebar*/}
        <Sidebar/>
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Portfolio</motion.span>
            <div className='social' >
                <motion.a href="icons" whileHover={{scale:1.5}}><img src='/facebook.png' alt=''/></motion.a>
                <motion.a href="icons" whileHover={{scale:1.5}}><img src='/instagram.png' alt=''/></motion.a>
                <motion.a href="icons" whileHover={{scale:1.5}}><img src='/linkedin.png' alt=''/></motion.a>
                <motion.a href="icons" whileHover={{scale:1.5}}><img src='/youtube.png' alt=''/></motion.a>

            </div>

        </div>

    </div>
  )
}

export default Navbar