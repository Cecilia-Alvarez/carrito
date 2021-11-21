import { useState } from "react";
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial}) => { 
    const [count, setCount] = useState(initial)
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
        const message = `Agregaste ${count} producto`;
        (count === 1) ? alert(message) : alert(`${message}s`)       
    };

  return (
    <>
    <ButtonGroup color="primary" disableElevation variant="contained">
      <Button onClick={restItem}>-</Button>
      <h3>{count}</h3>
      <Button onClick={addItem}>+</Button>
    </ButtonGroup>
    <div>
    <Button disableElevation variant="contained" color= "secondary" onClick={onAdd}>Agregar al carrito</Button> 
    </div>
    </>
    );
}

export default ItemCount;