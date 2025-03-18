import { useState } from "react"; 
import "./Category.css";
import logoBenuri from "../../image/LogoBenuri.png";

export function Category() {
  return (
    <div className="category-container">
     <img src={logoBenuri} alt="Logo Benuri" className="logo" />
      <h1>  Categorias  </h1>
      <div className="category-buttons"> 
        <button>Sofás</button>
        <button>Poltronas</button>
        <button>Quarto</button>
        <button>Sala de Jantar</button>
        <button>Colchões</button>
        <button>Fogão</button>
      </div>
    </div>
  );
}