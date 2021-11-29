import { useState, useEffect } from "react";
import Box from "@mui/material/Box"
import ItemList from "./ItemList";
import getProducts from "../services/handMadePromise";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => alert("Ha ocurrido un error", err));
  });
  return (
    <Box className="container col-12 bg-warning">
      <ItemList products={products} />
    </Box>
  );
};
export default ItemListContainer;