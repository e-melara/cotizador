import React, { useState } from "react";
import styled from "@emotion/styled";

import { getDiffYear, getMarcaPage, getSeguro } from "../helpers";

const Campo = styled.div`
 display: flex;
 margin-bottom: 1rem;
 align-items: center;
`;

const Label = styled.label`
 flex: 0 0 100px;
`;

const Radio = styled.input`
 margin: 0 1rem;
`;

const Select = styled.select`
 display: block;
 width: 100%;
 padding: 1rem;
 border: 1px solid #e1e1e1;
 appearance: none;
`;

const Boton = styled.button`
 background-color: #00838f;
 font-size: 16px;
 width: 100%;
 padding: 1rem;
 color: #fff;
 text-transform: uppercase;
 font-weight: bold;
 border: none;
 margin-top: 2rem;
 transition: background-color 0.3s ease;

 &:hover {
  background-color: #26c6da;
  cursor: pointer;
 }
`;

const Error = styled.div`
 background-color: red;
 color: white;
 padding: 1rem;
 width: 100%;
 margin-bottom: 2rem;
 text-align: center;
`;

const Formulario = ({ resumen }) => {
 const [error, setError] = useState(false);
 const [datos, setDatos] = useState({
  marca: "",
  year: "",
  plan: "",
 });

 const { marca, year, plan } = datos;
 const onHandlerChange = (e) => {
  setDatos({
   ...datos,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
   setError(true);
   return;
  }

  let resultado = 2000;
  const diff = getDiffYear(year);
  resultado -= diff * resultado * 0.03;
  resultado *= getMarcaPage(marca);
  resultado *= getSeguro(plan);
  resultado = parseFloat(resultado).toFixed(2);
  resumen({
   cotizacion: resultado,
   datos,
  });
 };

 return (
  <form onSubmit={handleSubmit}>
   {error && <Error>Todos los campos son obligatorios</Error>}

   <Campo>
    <Label htmlFor="marca">Marca</Label>
    <Select name="marca" id="marca" value={marca} onChange={onHandlerChange}>
     <option value="">-- Seleccione --</option>
     <option value="americano">Americano</option>
     <option value="europeo">Europeo </option>
     <option value="asiatico">Asiatico</option>
    </Select>
   </Campo>
   <Campo>
    <Label htmlFor="year">Año</Label>
    <Select name="year" id="year" value={year} onChange={onHandlerChange}>
     <option value="">-- Seleccione --</option>
     <option value="2021">2021</option>
     <option value="2020">2020</option>
     <option value="2019">2019</option>
     <option value="2018">2018</option>
     <option value="2017">2017</option>
     <option value="2016">2016</option>
     <option value="2015">2015</option>
     <option value="2014">2014</option>
     <option value="2013">2013</option>
     <option value="2012">2012</option>
    </Select>
   </Campo>
   <Campo>
    <Label htmlFor="plan">Plan</Label>
    <Radio
     type="radio"
     name="plan"
     onChange={onHandlerChange}
     value="basico"
     checked={plan === "basico"}
    />
    Basico
    <Radio
     type="radio"
     name="plan"
     onChange={onHandlerChange}
     value="completo"
     checked={plan === "completo"}
    />
    Completo
   </Campo>
   <Boton type="submit">Cotizar</Boton>
  </form>
 );
};

export default Formulario;
