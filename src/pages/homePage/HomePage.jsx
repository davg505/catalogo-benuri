import { useState } from "react"; 
import "./HomePage.css";
import logoBenuri from "../../image/LogoBenuri.png";

export function HomePage() {
  return (
    <div className="homepage-container">
     <img src={logoBenuri} alt="Logo Benuri" className="logo" />
      <h2>  Catalogo - 2025  </h2>
      <div className="homepage-buttons"> 
        <button>Produtos</button>
        <button>Vendas</button>
      </div>
      <h5> Benuri - 2025 </h5>
    </div>
  );
}