import React from 'react'
import Image from 'next/image'
import Herosvg from './svgs/herosvg'
import Gspheres from './gspheres'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <>
    <Gspheres />
     <main className='hero'>
        
        <div className="hero-content">
            <motion.div
            initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{duration:0.8}}
            className="hero-content-large">
            The best way to<br/> trade tokens on the <br/>
                <span>Stellar DEX</span>
            </motion.div>
            <div className="hero-content-small">
            Easily automate multiple trades at once with our drag and drop interface. It’s time to HACK your crypto profit.
            </div>
            <div>
            <motion.button
            whileHover={{scale:1.05}}
            className="button"> <Image src={'/icons/button-icon.svg'} width={15} height={15} alt={'logo inside button'} /><span>Start trade</span></motion.button>
            </div>
        </div>
        <div className="hero-image">
    <Herosvg />
        </div>
    </main>
    </>
   
  )
}

export default Hero