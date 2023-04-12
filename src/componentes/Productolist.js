import React from "react";
//import { Menu } from './Menu'
import { Producto1 } from "./Producto1";

import PaypalButton from "./PaypalButton";

export const Productolist = () => {
  return (
    <>
      <div className="contenedor_jumbo1">
        <Producto1
          imagen="producto1"
          titulo="VELAS AROMATICAS"
          precio="$60"
          descripcion="Producto para mejor"
        />

        <Producto1
          imagen="producto2"
          titulo="INCIENSOS"
          precio="$80"
          descripcion="Producto para mejor"
        />

        <Producto1
          imagen="producto3"
          titulo="CUENCOS"
          precio="$480"
          descripcion="Producto para mejor"
        />

        <Producto1
          imagen="producto4"
          titulo="ESENCIAS"
          precio="$100"
          descripcion="Producto para mejor"
        />

        <Producto1
          imagen="producto5"
          titulo="DIFUSOR"
          precio="$800"
          descripcion="Producto para mejor"
        />

        <Producto1
          imagen="producto6"
          titulo="PIEDRAS"
          precio="$1200"
          descripcion="Producto para mejor"
        />

        <Producto1
          imagen="producto7"
          titulo="CUARSOS"
          precio="$200"
          descripcion="Producto para mejor"
        />
      </div>

      <PaypalButton value='50'></PaypalButton>
   
    </>
  );
};
