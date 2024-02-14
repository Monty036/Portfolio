import { useRef } from "react";

import "./services.scss";
import { inView, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView={"animate"}
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on writing clean code
          <br /> which execute faster
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          {/* <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1> */}
        </div>
        {/* <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div> */}
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>B.Tech at IIT Mandi</h2>
          <p>
          I'm a dedicated Electrical Engineering Bachelor's student at IIT Mandi with a CGPA of 8.19. 
          My passion lies in software development. Armed with strong analytical skills, 
          I'm eager to contribute to innovative solutions. 
          
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Data Structures and Algorithms</h2>
          <p>
          I'm deeply passionate about Data Structures and Algorithms, as evidenced by my Codeforces rating surpassing 1200. 
          With a track record of solving over 300 coding questions across various platforms, I thrive on tackling complex problems.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          Proficient in React and Node.js, 
          I specialize in web development with expertise in Docker, MySQL, MongoDB, WebSocket, etc. 
          With a solid grasp of these technologies, I craft dynamic and scalable solutions for a seamless user experience
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ML & AI</h2>
          <p>
           
          I am well-versed in the intricacies of machine learning. Eager to explore the evolving landscape, 
          I seek to stay abreast of the latest advancements, fostering a continuous journey of learning and growth in the field of AI.
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;