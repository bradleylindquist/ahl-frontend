import { useState } from "react";
export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="products-index" className="container text-center">
      <h1>All Pieces</h1>
      Search Piece Names:{" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        list="product-titles"
      />
      <datalist id="product-titles">
        {props.myProducts.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      <div className="row">
        {props.myProducts
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="products col-lg-4 col-md-6 col-12 my-3">
              <h4>{product.name}</h4>
              <img src={product.url} alt="" />
              <div>Method: {product.description}</div>
              <button className="btn btn-secondary" onClick={() => props.onShowProduct(product)}>
                More info
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
