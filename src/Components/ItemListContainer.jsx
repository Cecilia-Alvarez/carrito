import { useState, useEffect } from 'react'
import getProducts from '../services/handMadePromise'
import ItemList from './ItemList'
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts
    .then(res => {
      setProducts(res)
    })
    .catch(err => alert('Estamos ante un problema', err))
  },[])

  return (
    <>
    <br/>
      <ItemCount stock={5} initial={1} />
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;