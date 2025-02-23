
import {motion, useMotionValue, frame} from "motion/react";
import * as variants from '@/lib/motionVariants';
import { useCallback, useRef, useState, MouseEvent } from "react";

type FeatureCardProps ={
    classes?:string,
    children: JSX.Element
}


const FeatureCard = ({classes, children}: FeatureCardProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef  = useRef<HTMLDivElement>(null)

  const [showglow, setShowGlow] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove  = useCallback((event: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();

      frame.read(() => {
        x.set(event.clientX -Number(rect?.left))
        y.set(event.clientY -Number(rect?.top))
      })
  },[x,y])

  return (
    <motion.div 
    variants={variants.staggerContainer}
    initial='start'
    whileInView='end'
    viewport={{once: true}}
    className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}>


        <div className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden" ref={cardRef}
        onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}
        onMouseMove={handleMouseMove}
        >
            {children}
        </div>

        <motion.div className="absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px]" ref={glowRef} initial={{opacity: 0}}
        animate = {{opacity : Number(showglow)}}
        style={{x, y}}
        ></motion.div>

    </motion.div>
  )
}

export default FeatureCard