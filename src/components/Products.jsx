import React, { useState } from 'react';

const Products = () => {
  const initialProduct = { id: 0, name: '', category: '', price: 0, stockQuantity: 0 };

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 20, stockQuantity: 50 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30, stockQuantity: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({ ...initialProduct });
  const [editProduct, setEditProduct] = useState(null);

  const addProduct = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ ...initialProduct });
  };

  const editProductHandler = (product) => {
    setEditProduct(product);
    setNewProduct(product);
  };

  const updateProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === editProduct.id ? newProduct : product))
    );
    setNewProduct({ ...initialProduct });
    setEditProduct(null);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1>Products Management</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price} - Stock: {product.stockQuantity}
            <button onClick={() => editProductHandler(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Add/Edit Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={newProduct.stockQuantity}
          onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: Number(e.target.value) })}
        />
        {editProduct ? (
          <button onClick={updateProduct}>Update Product</button>
        ) : (
          <button onClick={addProduct}>Add Product</button>
        )}
      </div>
    </div>
  );
};

export default Products;
