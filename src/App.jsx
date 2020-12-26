import React, { useState } from "react";
import styled from "@emotion/styled";

import Header from "./components/Header";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
 max-width: 600px;
 margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
 background-color: white;
 padding: 3rem;
`;

function App() {
 const [resumen, setResumen] = useState({
  cotizacion: 0,
  datos: {
   marca: "",
   plan: "",
   year: "",
  },
 });

 const { cotizacion, datos } = resumen;

 return (
  <Contenedor>
   <Header title="Cotizador de Seguros" />
   <ContenedorFormulario>
    <Formulario resumen={setResumen} />
    {cotizacion !== 0 && <Resumen {...datos} />}
    <Resultado cotizacion={cotizacion} />
   </ContenedorFormulario>
  </Contenedor>
 );
}

export default App;
