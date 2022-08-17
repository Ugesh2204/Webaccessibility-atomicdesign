import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrowup from '../../assets/images/arrowup.png'
import arrowdown from '../../assets/images/arrowdown.png'

function Accordionframermotion({ id,title,content}) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="question"  id={`accordion-header-${id}`}
          aria-expanded={isOpen}
          aria-controls= {`section_${id}`}
         
          onClick={() => setIsOpen(!isOpen)}
          className={`accordion-button
                w-full flex justify-between px-3 py-2 
              bg-blue-custom text-white font-black   mb-1 rounded-[50px] text-[0.8rem] items-center`}
        >
         
            {title}
            <span className='p-1 transition-all'>
                      {
                        isOpen ? <img src={arrowup} alt="Open accordion"/> : <img src={arrowdown} alt="Close accordion"/>
                      }
                  </span>
          
        </motion.div>

        {isOpen && (
          <motion.div
          id={`section_${id}`}  aria-labelledby={`accordion-header-${id}`}  
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="p-2 text-lg text-gray-700"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Accordionframermotion