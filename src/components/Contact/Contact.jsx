import React from 'react'

import './Contact.css'
import linkedin from "../../assets/linkedin.png";
import heart from "../../assets/heart.png";
import { motion } from "framer-motion"

const Contact = () => {
  const transition = { type: "spring", duration: 3 };



  return (
    <div className='Contact'>
      <motion.div className="contact-us"
             initial={{opacity: 0, x: -100}}
             animate={{opacity: 1, x:0}}
             exit={{opacity:1, x: 100}}
             transition={transition}
      >
        <h1>Connect With Us</h1>
        <div className="number">
            <span><img src={linkedin} alt="" /></span>
            <p>Shop #3, 6-C, 4th Commercial Lane, Zamzama, Phase V, DHA, Karachi.</p>
        </div>
        <div className="phone">
          <span><img src={heart} alt="" /></span>
          <p>+9235878864</p>
        </div>
        <div className="phone-2">
          <span><img src={heart} alt="" /></span>
          <p>++923217561259</p>
        </div>
        <div className="mail">
          <span><img src={linkedin} alt="" /></span>
          <p>++info@fitnessfactory.com.pk</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </motion.div>
      <motion.div className="get-in-touch"
                   initial={{opacity: 0, x: 100}}
                   animate={{opacity: 1, x:0}}
                   exit={{opacity:1, x: -100}}
                   transition={transition}
       >
        <h1>Get In Touch With Us</h1>
        <form action="" className='Form' >
          <input type="text" name="user_email" id="name" placeholder='Your Name' required/>
          <input type="email" name="user_email" id="email" placeholder='Your Email' required/>
          <input type="text" name="use_email" id="phone" placeholder='Your Phone Number'/>
          <input type="text" name="use_email" id="company" placeholder='Your Company Name'/>
          <input type="text" name="use_email" id="message" placeholder=' Your Message'/>
          <button className="btn">Send</button>
        </form>
        <div className="blur contact-blur"></div>
        <br />
      </motion.div>
    </div>
  )
}

export default Contact
