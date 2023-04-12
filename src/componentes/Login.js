


//import React ,{ useContext } from 'react'
//import { userContext } from './Context/userContex'
import { useState } from 'react'
import axios from 'axios'

import '../componentes/Login.css'
//import { ClienteAxios} from'../componentes/config/axios'



function Login() {
    const [ Registro, setRegistro ]= useState(false)
    const [ Datos , setDatos] = useState({
        username:'',
        email:'',
        password:''
    });

    const handleInputChange = (e) =>{
        let { name,value }= e.target;
        let newDatos = {...Datos, [name]: value};
        setDatos(newDatos);
    }
    
    const handleSubmit = async(e)=>{
     e.preventDefault();
     if(!e.target.CheckValidity()){
        console.log('no se envia ')
     }  else{
        let res =  await axios.post("http://localhost:4000/usuario/login",Datos)

     } 


    }
  return (
 <>
   

    <div className='contenedor-formulario'>
       <h1>{Registro ? 'Registro': 'inicio sesion'}</h1>
       <form  onSubmit={handleSubmit}>
          <div className=''>
            <label className='e'>Nombre</label>
            <input type="text"className='input' onChange={handleInputChange} value={Datos.username} name ="username" placeholder='ingresa nombre' required />
          </div>

          <div className=''>
            <label className='e'>Direccin de email</label>
            <input type="email"className='input' onChange={handleInputChange} value={Datos.email} name ="email" placeholder='ingresa email' required/>
          </div>

          <div className=''>
            <label className='e'>Contrañesa</label>
            <input type="password"className='input'onChange={handleInputChange} value={Datos.password} name ="password" placeholder='ingresa contraseña' required />
          </div>

          

          <button className='boton-inicio'   >
            {Registro? 'Registrate' : 'inicio de sesion' }
          </button>

       </form>

       <div>
           
        <button className='boton-inicio' onClick={ ()=> setRegistro(!Registro) }>
          {Registro ? 'Tienes cuenta? inicia sesion': 'No tienes cuenta? Registrate '}
        </button>
       </div>   
        </div>
</>

  )
}

export default Login