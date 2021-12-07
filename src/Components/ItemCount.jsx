import * as React from 'react';
import { useState } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";

const ItemCount = ({stock, initial, producto}) => { 
    const [count, setCount] = useState(initial)

    const [newStock, setNewStock] = useState(stock);

    const { addItemToCart } = useCartContext();

    const addItem = () => {
        const newCount = count + 1
        if(newCount <= stock){
            setCount(newCount);
        }
    };

    const restItem = () => {
        const newCount = count - 1
        if(newCount >= initial){
            setCount(newCount);
        }
    };

    const onAdd = () => {
            const message = `Agregaste ${count} productos`;
            (count === 1) ? alert(message) : alert(`${message}s`)
            addItemToCart({item: producto, quantity: count});
            setNewStock(newStock - count);
            setCount(initial);  
    };

  return (
    <>
    <ButtonGroup color="primary" disableElevation variant="contained">
      <Button onClick={restItem}>-</Button>
      <h3>{count}</h3>
      <Button onClick={addItem}>+</Button>
    </ButtonGroup>
    <div>
    <Link style={{ textDecoration:'none' }} to={`/cart/`}>       
    <Button  disableElevation variant="contained" color= "secondary" onClick={() => {onAdd()
    addItem()}}>Agregar al carrito</Button> 
    </Link>
    </div>
    </>
    );
}

export default ItemCount;