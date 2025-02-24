import { useState } from "react";
import "./Catalog.css";

export function Catalog({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (products.length === 0) {
    return <p className="empty-message">Nenhum produto disponível.</p>;
  }

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const product = products[currentIndex];

  return (
    <div className="catalog-container">
      <div className="product-item">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Preço: R$ {product.price}</p>
      </div>
      <div className="nav-buttons">
        <button onClick={prevProduct}>← Anterior</button>
        <button onClick={nextProduct}>Próximo →</button>
      </div>
    </div>
  );
}
