
import React, { useState } from 'react'
//import { Button, Card, Form } from 'react-bootstrap'

function VentanaRegistro() {

    const [Registro, setRegistro]= useState(false)
    

    
    

  return (
   <>
   <h1>formlario</h1>  
   
   <div className='contenedor-formulario'>
       <h1>{Registro ? 'Registro': 'inicio sesion'}</h1>
       <form>
          <div className='input'>
            <label className='e'>Nombre</label>
            <input type="text"className='nombre' name ="username" placeholder='ingresa nombre' required />
          </div>

          <div className='input'>
            <label className='e'>Direccin de email</label>
            <input type="email"className='email' name ="email" placeholder='ingresa email' required/>
          </div>

          <div className='input'>
            <label className='e'>Contrañesa</label>
            <input type="password"className='password' name ="password" placeholder='ingresa contraseña' required />
          </div>

          

          <button className='boton-inicio'   >
            {Registro? 'Registrate' : 'inicio de sesion' }
          </button>

       </form>

       <div>
           
        <button className='boton-registro' onClick={ ()=> setRegistro(!Registro) }>
          {Registro ? 'Tienes cuenta? inicia sesion': 'No tienes cuenta? Registrate '}
        </button>
       </div>   
        </div>
       
     {/*

       <Card>
        <Card.body>
          <Form.Group id='email'>
            <Form.label className='mt-2'>email</Form.label>
            <Form.Control type='email'requiere />
          </Form.Group>  

          <Form.Group id='password'>
            <Form.label className='mt-2'>password</Form.label>
            <Form.Control type='password'requiere />
          </Form.Group>

          <Form.Group id='password-confirm'>
            <Form.label className='mt-2'>confirmacion de password </Form.label>
            <Form.Control type='password'requiere />
          </Form.Group>

          <Button className='bt bt-primary'></Button>

            


            
        </Card.body>
       </Card>

  */}

           

  
   
   
   </>
  )
}

export default VentanaRegistro