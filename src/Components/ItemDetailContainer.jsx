import { useState, useEffect } from "react";
import getProducts from "../services/handMadePromise";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts.then((res) => {
      setItem(res.find((prod) => prod.id === parseInt(id)));
    });
  }, [id]);
  return <ItemDetail item={item} sx={{ display:'flex', flexDirection:'column', justifyContent: 'space-around' }} />
};
export default ItemDetailContainer;