import React, { useState, useEffect } from 'react';
import styles from '../components/Products.module.css';
import { v4 as uuidv4 } from 'uuid'; 

const Products = () => {
  const initialProduct = { id: 0, name: '', category: '', price: 0, stockQuantity: 0 };

  const initialProducts = JSON.parse(localStorage.getItem('products')) || [
    { id: uuidv4(), name: 'Product 1', category: 'Category A', price: 20, stockQuantity: 50 },
    { id: uuidv4(), name: 'Product 2', category: 'Category B', price: 30, stockQuantity: 30 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ ...initialProduct });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (e) => {
    e.preventDefault(); 
    const newProductWithId = { ...newProduct, id: uuidv4() };
    setProducts([...products, newProductWithId]);
    setNewProduct({ ...initialProduct });
  };
  
  const updateProduct = (e) => {
    e.preventDefault(); 
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === editProduct.id ? newProduct : product))
    );
    setNewProduct({ ...initialProduct });
    setEditProduct(null);
  };

  const editProductHandler = (product) => {
    setEditProduct(product);
    setNewProduct(product);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1 className={styles.title}>Products Management</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button onClick={() => editProductHandler(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.formContainer}>
        <h2>Add/Edit Product</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />

          <label>Category</label>
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />

          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
          />

          <label>Stock Quantity</label>
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
        </form>
      </div>
    </div>
  );
};

export default Products;
