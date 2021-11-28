import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import getProducts from "../services/handMadePromise";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => alert("Ha ocurrido un error", err));
  });
  return (
    <div className="container col-12 bg-warning">
      <ItemCount stock={5} initial={1} />
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;