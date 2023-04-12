import React from 'react'
import styled from 'styled-components'



function Contacto({children}) {
    

  return (
    <>
       
    <Overlay>
          <Contenedormodal>
            <EncabezadoModal> <h3>BIENVENIDO</h3> </EncabezadoModal>
            
            <BotonCerrar >X</BotonCerrar>
              {children}
            
          </Contenedormodal>

   </Overlay>



    </>
  )
}

export default Contacto

const Overlay = styled.div`

    width: 1550px;
    height: 80%;
    margin: 160px 60px 60px 15px;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;`

const Contenedormodal = styled.div`
    width: 500px;
    min-height: 500px;
    background: aliceblue;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(116, 16, 16, 0.617) 0px 7px 30px 0px;
    padding: 20px;`   
    
const EncabezadoModal = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin-bottom: 20px;
     padding-bottom: 20px;
     border-bottom: 2px solid rgba(116, 30, 30, 0.617);
     h3 {
      font-weight:500px;
      font-size:16px;
      color: #1766dc;
      }  `

const BotonCerrar = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    width: 30px;
    height: 30px;
    background-color: rgb(142, 163, 210);
    border-radius: 8px;
    transition: tranform 200ms,box-shadow 200ms;
    cursor: pointer;

    &:hover{
      background #f2f2f2;
    }`
