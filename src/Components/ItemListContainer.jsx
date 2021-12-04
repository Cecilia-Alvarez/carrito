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
    .then((response) => {
      (id === undefined) ? setProducts(response) :
      setProducts(response.filter((products) => products.category === parseInt(id)))})
  }, [id]); 

  return (
    <Box className="container col-12 bg-warning">
      <ItemList products={products} />
    </Box>
  );
};
export default ItemListContainer;