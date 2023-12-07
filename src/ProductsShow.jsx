export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>URL: {props.product.url}</p>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Name: <input defaultValue={props.product.name} className="form-control" name="name" type="text" />
        </div>
        <div className="form-group">
          Description:{" "}
          <input defaultValue={props.product.description} className="form-control" name="description" type="text" />
        </div>
        <div className="form-group">
          Price: <input defaultValue={props.product.price} className="form-control" name="price" type="integer" />
        </div>
        <div className="form-group">
          URL: <input defaultValue={props.product.url} className="form-control" name="url" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick} className="btn btn-danger">
        Delete Product
      </button>
    </div>
  );
}
