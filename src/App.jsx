import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { AddProduct } from "./pages/addProduct/AddProduct";
import { Catalog } from "./pages/catalog/Catalog";
import { ProductList } from "./pages/productList/ProductList";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Sofá Luxo", price: "1200", category: "sofa", image: "sofa.jpg" },
    { id: 2, name: "Mesa de Jantar", price: "800", category: "cozinha", image: "mesa.jpg" },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const editProduct = (id, newName, newPrice) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, name: newName, price: newPrice } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
          <Route path="/catalog" element={<Catalog products={products} />} />
          <Route path="/products" element={<ProductList products={products} editProduct={editProduct} removeProduct={removeProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}
