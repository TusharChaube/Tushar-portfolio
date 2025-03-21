import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/hero.png'
import { motion } from "framer-motion"

const conatiner = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay:delay}
    }
    })


const Hero = () => {
  return(
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap sm:justify-center">
            <div className="w=full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={conatiner(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">Tushar Chaube</motion.h1>
                    <motion.span variants={conatiner(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-blue-300 via-sky-600 to-blue-800 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</motion.span>
                    <motion.p variants={conatiner(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter sm:text-center lg:text-start">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="Tushar Chaube" />
                </div>
            </div>
        </div>
  </div>
  )
 
}

export default Hero