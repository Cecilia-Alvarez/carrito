const ItemDetail = (props) => {
    const { title, price, description, image } = props.item;
    return (
      <div className="flex bg-danger">
        <h3>Item Detail</h3>
        <h3>{title}</h3>
        <h2>${price}</h2>
        <p>{description}</p>
        <img src={`${image}`} alt={`${image}`}></img>
      </div>
    );
  };
  export default ItemDetail;