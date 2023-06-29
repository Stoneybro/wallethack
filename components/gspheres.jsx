import React from 'react'
import { motion } from 'framer-motion'
const gspheres = () => {
  return (
    <div className="g-frame">
        <motion.div
       
        animate={{
          translateX:[5,800,80,300,50],
          translateY:[20,300,400,150,50],
          scale:[1,1.2,0.8,0.5,1]
          
        }}
        transition={{duration:30,repeat:Infinity,repeatType:'reverse'}}
        className="g-sphere one"></motion.div>

<motion.div
              
                      animate={{
                translateX:[-200,200,-400,300,50],
                translateY:[200,50,120,70,10],
                scale:[1,1.2,0.8,0.5,1]
                
              }}
              transition={{duration:30,repeat:Infinity,repeatType:'reverse'}}
              className="g-sphere three"></motion.div>

        <motion.div
               
                animate={{
                  translateY:[-300,20,120,50,150],
                  translateX:[5,-200,-50,-300,50],
                 
                  scale:[1,1.2,0.8,0.5,1]
                  
                }}
                transition={{duration:30,repeat:Infinity,repeatType:'reverse'}}
        className="g-sphere two"></motion.div>

    </div>
  )
}

export default gspheres