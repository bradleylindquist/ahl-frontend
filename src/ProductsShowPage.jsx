import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShowPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleShowProduct = () => {
    console.log({ "Product id is": params.id });
    axios.get(`/products/${params.id}.json`).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  };

  useEffect(handleShowProduct, []);

  return (
    <div>
      <h1>Product Info</h1>
      <img src={product.url} />
      <h4>{product.name}</h4>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
