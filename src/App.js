import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Barra from "./componentes/Barra.js";
import Contacto from "./componentes/Contacto";

import { Productolist } from "./componentes/Productolist";
import "boxicons";
import { Slider } from "./componentes/Slider";
import Login from "./componentes/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Barra></Barra>

        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/Productos" element={<Productolist></Productolist>} />

          <Route path="/Login" element={<Contacto> <Login></Login></Contacto>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
