
import './App.css';
import AboutServices from './Components/AboutServices/AboutServices';
import Hero from './Components/Mainhero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import FutureProjects from './Components/FutureProjects/FutureProjects';
import Test from './test';

function App() {
  return (
     <div>
       <section id='Home'>
        
        <Navbar />
          <Hero/>
       </section>
         <section id='About'>
          <AboutServices/>
         </section>
         
            <FutureProjects/>
         
          <section>parallax</section>
          
          <section id='Contact'>
            <Contact/>
          </section>
      
    </div>
   
  );
}

export default App;
