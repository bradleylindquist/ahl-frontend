export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div className="form-group">
          Description: <input className="form-control" name="description" type="text" />
        </div>
        <div className="form-group">
          Price: <input className="form-control" name="price" type="text" />
        </div>
        <div className="form-group">
          Url: <input className="form-control" name="url" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
