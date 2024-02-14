import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Chat Realm",
    img: "./ChatApp.png",
    desc: "Chat Realm is a full stack real time messaging app which is built using React, NodeJS, Express, MongoDB, TailwindCSS, JavaScript and WebSocket.",
  },
  {
    id: 2,
    title: "Face Detection App",
    img: "./SmartBrain.png",
    desc: "Developed a robust face detection app with React, NodeJS and PostgreSQL by integrating a machine learning model .Implemented image count tracking, incrementing by 1 with each submission.",
  },
  {
    id: 3,
    title: "Cryptocurrency Prediction",
    img: "https://media.istockphoto.com/id/1317587887/photo/trading-charts-on-a-display.jpg?s=612x612&w=0&k=20&c=Yy2ULUp7jRXFRaOeClA45OUQr5Juv34cf7GCTRhLKO4=",
    desc: "Worked on time series data to build a model that can predict the stock prices based on the previous prices.Leveraged LSTM to forecast time series data of the stock prices containing over 10000 tuples.",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
