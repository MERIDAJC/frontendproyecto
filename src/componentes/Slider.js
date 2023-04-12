
import React from 'react'
import { motion } from 'framer-motion'
import '../componentes/Slider.css'
import Sliderimagen from './Sliderimagen'



export const Slider = () => {

  return (

    <>
    <div className='a'>
      <h2>En  HOLISTIC HOME encontratras los mejores productos del mercado a los mejores precios somos tu mejor opcion </h2></div>


    <motion.div className='contenedor1'>
      
      <motion.div className='contenedor2' drag="x" dragConstraints={{right:0,left:-2123}}  >
          {Sliderimagen.map(image=>(
               <motion.div className='item'>
                   <img src={image} alt="" className='imagen' />
               </motion.div>
      ))}
      </motion.div>      
    
    </motion.div> 

    
    
    
    
    </>

    
    
  )
}


