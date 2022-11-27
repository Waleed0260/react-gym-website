import React from "react";
import "./Hero.css";
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import NumberCounter from "number-counter";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";
import Plans from "../Plans/Plans";
import Testimonials from '../Testimonials/Testimonials';
import Join from '../Join/Join';

import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (

    <div>
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          {/* <Header/> */}
          {/* the best ad */}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile? "158px": "208px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          </div>
          {/* main text */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            {/* single line */}
            <div>
              <span className="span">
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
            {/* figures */}
          </div>
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={140} start={100} delay='4' preFix="+"/>
              </span>
              <span>Expert coaches</span>
            </div>
            <div>
              <span>
              <NumberCounter end={970} start={850} delay='4' preFix="+"/>
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
              <NumberCounter end={50} start={20} delay='2' preFix="+"/>
              </span>
              <span>fitness programs</span>
            </div>
          </div>
          {/* hero buttons */}
          <div className="hero-buttons">
            <button className="btn">Get started</button>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={heart} alt="" />
            <span>Heart rate</span>
            <span>116 bmps</span>
          </motion.div>
          {/* hero image */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={hero_image_back}
            alt=""
            className="hero-image-back"
          />

          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className="calories"
          >
            <img src={calories} alt="" />
            <div>
              <span>calories burn</span>
              <span> 220 kal</span>
            </div>
          </motion.div>
        </div>
      </div>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
    </div>
  );
};

export default Hero;