import React from 'react'
import "./About.css"
import { motion } from "framer-motion";

import aboutImg from "../../assets/aboutImg.jpg";
const About = () => {
    const transition = { type: "spring", duration: 3 };

  return (
    <div className='About' id='about'>
        <motion.h1 className='about-head' 
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y:0}}
        exit={{opacity:1, y: 100}}
        transition={transition}
        >ABOUT US</motion.h1>
        <div className="aboutus">
            <div className="blur about-blur"></div>

            <motion.div className="about-writ"
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 1, x: 100}}
                    transition={transition}>
            Fitness Factory is a Karachi based retailer and wholesaler of fitness equipment and products. For the last 25 years, we have been pushing the envelope of health and fitness in Pakistan operating under the firm belief that fitness is accessible to anyone. We carry a wide range of products and product lines from highly reputable brands to cater to commercial, corporate, outdoor and home gym needs. Over the last two decades, we have demonstrated our emphasis on quality and robustness to make our users workout experience better. We represent Body Solid and Steelflex in Pakistan alongside several other esteemed names in the fitness equipment industry. Each of our products are thoughtfully curated and selected to meet a high standard of safety, quality, comfort and value for money. We remain committed to earning our customers trust and look forward to being of service.
            </motion.div>
            <motion.div className="about-img" 
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}} 
            exit={{opacity: 1, x: -100}}
            transition={transition}
            >
                <img src={aboutImg} alt="" className='about-img'/>
            </motion.div>
         </div>
    </div>
  )
}

export default About
