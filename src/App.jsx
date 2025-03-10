import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { AddProduct } from "./pages/addProduct/AddProduct";
import { Catalog } from "./pages/catalog/Catalog";
import { ProductList } from "./pages/productList/ProductList";
import logo from './image/2 lugares.png';
import logo1 from './image/shopping.webp';
import logo2 from './image/2.webp';

export default function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "Sofá Belgica 1,50M 2 Lugares", price: "1200", codigo: "1200", category: "sofa", image: logo },
    { id: 2, name: "Mesa de Jantar", price: "800", category: "cozinha", image: logo1 },
    { id: 3, name: "Gaurda Roupa ", price: "1200", category: "Quarto", image: logo2 },
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
