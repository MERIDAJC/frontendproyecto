import React from "react";
import "../componentes/Producto1.css";


export function Producto1(props) {
  return (
    < >   

            
        <div className="producto">
          <a href="#">
            <div className="producto_img">
             <img className="imagen" src={require(`../componentes/Imagenes/${props.imagen}.jpg`)} alt="foto uno" />              
            </div>
          </a>

          <div className="producto_footer">
            <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
            <p className="precio">{props.precio}</p>
          </div>

          <div className="boton">
            <button className="btn">AÑADIR AL CARRITO </button>
          </div>

          <div>
            <a href="#" className="vista">
              VISTA
            </a>
          </div>
        </div>
     
   

     

     
    </>
  );
}


