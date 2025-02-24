import "./ProductList.css";

export function ProductList({ products, editProduct, removeProduct }) {
  const handleEdit = (id) => {
    const newName = prompt("Digite o novo nome do produto:");
    const newPrice = prompt("Digite o novo preço:");
    if (newName && newPrice) {
      editProduct(id, newName, newPrice);
    }
  };

  return (
    <div className="product-list-container">
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>R$ {product.price}</td>
              <td>{product.category}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(product.id)}>Editar</button>
                <button className="remove-btn" onClick={() => removeProduct(product.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
