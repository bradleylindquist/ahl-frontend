import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { ProductsShowPage } from "./ProductsShowPage";
// import { Cart } from "./Cart";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    axios
      .post("/products.json", params)
      .then((response) => {
        console.log(response.data);
        setProducts([...products, response.data]);
        successCallback();
        window.location.href = "/products";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateProduct = (id, params) => {
    axios.patch(`/products/${id}.json`, params).then((response) => {
      console.log(response.data);
      setCurrentProduct(response.data);
      // updates array after updating
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      // closes modal after update
      handleClose();
    });
  };

  const handleShowProduct = (product) => {
    console.log(product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleDestroyProduct = (product) => {
    axios.delete(`/products/${product.id}.json`).then((response) => {
      console.log(response.data);
      setProducts(products.filter((r) => r.id !== product.id));
      handleClose();
    });
  };

  const handleClose = () => {
    setIsProductsShowVisible(false);
  };

  // handleIndexProducts(); -> Old way of calling function on load
  useEffect(handleIndexProducts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
        <Route path="/products" element={<ProductsIndex myProducts={products} onShowProduct={handleShowProduct} />} />
        <Route path="/" element={<ProductsIndex myProducts={products} onShowProduct={handleShowProduct} />} />

        <Route path="/products/:id" element={<ProductsShowPage />} />
      </Routes>

      {/* <button onClick={handleIndexProducts}>Load Products</button> */}
      {/* <ProductsIndex myProducts={products} onShowProduct={handleShowProduct} /> */}
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
