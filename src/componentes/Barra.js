import React from 'react'
import "../componentes/Barra.css"
import { Link } from 'react-router-dom'


const Barra = () => {
  return (
    <>
    <div className='barra'>
     <div className='logo'><img src={require("../componentes/Imagenes/logohh1.png")} alt="foto uno" /> </div>
     
     
     <div>
       <ul>
       <li> <Link to='/'>INICIO</Link></li>
       <li> <Link to='/Productos'>PRODUCTOS</Link></li>
       
       <li> <Link to='/Login' > <box-icon className="login" name = "user" type="solid"></box-icon> </Link></li>  
       </ul>
     </div>

  
     
     <div className='cart'>
      <box-icon name = "cart"></box-icon> 
      <span className='pruductos-totales'>0</span>     
     </div>

     


        
    </div>
    </>
  )
}

export default Barra



