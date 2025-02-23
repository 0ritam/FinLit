import { brands } from "@/assets"
//import { Section } from "lucide-react"
import { motion } from "motion/react"
import * as variants from '@/lib/motionVariants'

const Brand = () => {
  return (
    <section className="section">
        <div className="container max-w-screen-lg">
            <motion.p variants={variants.fadeInUp}
            initial = 'start'
            animate = 'end'
            whileInView="end"
            viewport={{once:true}}
             className="text-white text-center mb-4 md:mb-6">
                Financial Knowledge for Today's prodigy and Tomorrow's leader.
            </motion.p>

            <motion.div
            variants={variants.staggerContainer}
            initial = 'start'
            animate = 'end'
            whileInView="end"
            viewport={{once:true}}
             className="flex justify-center flex-wrap gap-5 md:gap-10">
               {brands.map((brands, index) => (
                <motion.figure
                variants={variants.fadeInUp}
                viewport={{once:true}}
                 key={index}>
                    <img src={brands} alt='' className="opacity-[0.6]"/>
                </motion.figure>
               ))} 
            </motion.div>
        </div>
    </section>
  )
}

export default Brand