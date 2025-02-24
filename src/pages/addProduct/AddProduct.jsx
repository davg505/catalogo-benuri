import { useState } from "react";
import "./AddProduct.css";

export function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({ name: "", price: "", category: "sofa", image: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price && product.image) {
      addProduct(product);
      setProduct({ name: "", price: "", category: "sofa", image: "" });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome do Produto"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={product.price}
          onChange={handleChange}
        />
        <select name="category" value={product.category} onChange={handleChange}>
          <option value="sofa">Sofá</option>
          <option value="cozinha">Cozinha</option>
          <option value="cama">Cama</option>
          <option value="outros">Outros</option>
        </select>
        <input
          type="text"
          name="image"
          placeholder="URL da Imagem"
          value={product.image}
          onChange={handleChange}
        />
        <button type="submit">Salvar Produto</button>
      </form>
    </div>
  );
}
