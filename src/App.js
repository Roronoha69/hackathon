
import './App.scss';
import Twitter from './assets/twitter.png'
import Insta from './assets/insta.png'
import Fb from './assets/facebook.png'
import sun from './assets/sun.png'
import {useState} from 'react';
import cubes from './assets/cubes.png'
import cube from './assets/cubes2.png'
import bonhomme from './assets/bonhomme.png'
import astro from './assets/astro.png'
import arrow from './assets/arrow.png'
import togglBtn from './assets/toggle.png'
import {motion} from 'framer-motion'

function App() {

const [content, changeContent] = useState()

  
  return (
    <div className="App">

      <div className="side-bar">
        <h1>Xae</h1>
        <div className="icons">
        <div className="fb">
          <img src={Fb} alt="" />
        </div>
        <div className="inst">
        <img src={Insta} alt="" />
        </div>

        <div className='tt'>
        <img src={Twitter} alt="" />
        </div>
       
        </div>
      </div>

        <div className="header">

        <div className='toggle'>
          <h1 className='txt'>Xae</h1>
          <img src={togglBtn} alt="" />
        </div>
      <div className='nav'>
        <div className="btn">
        <p>Home</p>
        <p>About</p>
        <p>Gallery</p>
        <p>Contact</p>
        </div>
        <img src={sun} alt="" />
      </div>

      <div className='container'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="text"
    >
        
          <h1>Adventure together</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, minima minus officiis optio beatae unde veniam vero iusto quibusdam nemo voluptatem aliquid voluptatum.</p>
        </motion.div>
        
        <div className="images">
          <img  className='cube' src={cube} alt="" />
          <img className='cubes' src={cubes} alt="" />
          <img className='bnh' src={bonhomme} alt="" />
        </div>
</div>

<motion.div
      whileInView={{ y: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="footer"
    >
        
          <div className="foot"></div>
          <img className='astro' src={astro} alt="" />
          <div className='wrap'>
          <h1>Exploration</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab dolor asperiores optio voluptates!</p>
         
          </div>
 <img className='arrow' src={arrow} alt="" />
         
          <div className='wrap1'>
               <h1>Footprint</h1>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
       
        
</motion.div>







        <div className="footer-r">
          <div className="foot-r"></div>
          <img className='astro-r' src={astro} alt="" />

          <div className={`wrap-r ${content? '':'invisible'}`} >
          <h1>Exploration</h1>
          <p>Lorem ipsum dolor, sit amet consectetur Neil Armstrong</p>
          <img className='arrow-r' src={arrow} alt="" onClick={()=> changeContent(false)}/>
          </div>


          <div className={`wrap1-r ${content? 'invisible':''}`} >
          <h1>Footprint</h1>
          <p>Lorem ipsum dolor, sit amet consectetur</p>
          <img className='arrow-r' src={arrow} alt="" onClick={()=> changeContent(true)}/>
          </div>
       
        </div>

      
      </div>

    </div>
  );
}

export default App;
