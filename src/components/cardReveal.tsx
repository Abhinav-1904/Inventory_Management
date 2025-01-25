'use client'
import {motion, useAnimation, useInView} from 'motion/react'
import { useEffect, useRef } from 'react';


interface RevealProps{
  children:React.JSX.Element;
}
export default function CardReveal({children}:RevealProps){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true});
  const mainControls=useAnimation()
  
  useEffect(()=>{
    if(inView){
      mainControls.start('visible'); 
    }
  },[inView])
  return (
    <div ref={ref} style={{width:'100%',position:'relative',overflow:'hidden'}}>
      <motion.div
        variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.5,delay:0.5}}
      >
        {children}
      </motion.div>
    </div>
  )
}