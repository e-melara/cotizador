import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
 background-color: rgb(127, 224, 237);
 margin-top: 2rem;
 padding: 1rem;
 text-align: center;
`;

const ResultadoCotizacion = styled.div`
 text-align: center;
 padding: 0.5rem;
 margin-top: 1rem;
 position: relative;
 border: 1px solid #26c6da;
 background-color: rgb(127, 224, 237);
`;

const TextoCotizacion = styled.p`
 color: #00838f;
 margin: 0px;
 padding: 1rem;
 font-weight: bold;
 text-transform: uppercase;
`;
const Resultado = ({ cotizacion }) => {
 if (cotizacion === 0) {
  return <Mensaje>Debe seleccionar marca, plan y año</Mensaje>;
 }

 return (
  <ResultadoCotizacion>
   <TextoCotizacion>El total a pagar es $ {cotizacion}</TextoCotizacion>
  </ResultadoCotizacion>
 );
};

export default Resultado;
