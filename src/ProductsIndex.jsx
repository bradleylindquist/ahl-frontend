export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.description}</h2>
          <h2>{product.price}</h2>
          {/* <h2>{product.supplier_id}</h2> */}
          <img src={product.url} />
        </div>
      ))}
    </div>
  );
}
