export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>URL: {props.product.url}</p>
    </div>
  );
}
