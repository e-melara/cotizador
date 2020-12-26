import React from "react";
import styled from "@emotion/styled";

import { upperCaseFirst } from "../helpers";

const ContenedorResumen = styled.div`
 padding: 1rem;
 color: #fff;
 margin-top: 1rem;
 text-align: center;
 background-color: #00838f;
`;

const Resumen = ({ marca, plan, year }) => {
 return (
  <ContenedorResumen>
   <h2>Resumen de Cotizacion</h2>
   <ul>
    <li>Marca: {upperCaseFirst(marca)}</li>
    <li>Plan: {upperCaseFirst(plan)}</li>
    <li>Año del Auto: {upperCaseFirst(year)}</li>
   </ul>
  </ContenedorResumen>
 );
};

export default Resumen;
