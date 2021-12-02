import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box"
import ItemList from "./ItemList";
import getProducts from "../services/handMadePromise";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts
          .then(res => {
              (id === undefined) ? setProducts(res) : setProducts(res.filter((prod) => products.category == id.toLowerCase()));
          })
          .catch(err => console.log('error al obtener productos', err))
  }, [id])

  return (
    <Box className="container col-12 bg-warning">
      <ItemList products={products} />
    </Box>
  );
};
export default ItemListContainer;