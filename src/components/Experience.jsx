import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion }  from "framer-motion"


const Experience = () => {
  return (
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y: -100}} transition={{duration: 0.5}} className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-200'>{experience.year}</p>
              </motion.div>
              <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity:0, x: 100}} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>
                  {experience.role} - {" "}
                  <span className='text-sm bg-gradient-to-r from-blue-300 via-sky-600 to-blue-700 bg-clip-text text-transparent'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-300'>{experience.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="mt-4 rounded bg-blue-900 px-2 py-1 text-sm font-medium text-neutral-50">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experience