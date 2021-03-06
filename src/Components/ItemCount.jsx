import * as React from "react";
import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const ItemCount = ({ item, stock, initial, addItem }) => {
  const [count, setCount] = useState(initial);

  const addProduct = () => {
    const newCount = count + 1;
    if (newCount <= stock) {
      setCount(newCount);
    }
  };

  const restProduct = () => {
    const newCount = count - 1;
    if (newCount >= initial) {
      setCount(newCount);
    }
  };

  return (
    <>
      <ButtonGroup color="primary" disableElevation variant="contained">
        <Button onClick={restProduct}>-</Button>
        <h3 style={{ textAlign:"center"}}>{count}</h3>
        <Button onClick={addProduct}>+</Button>
      </ButtonGroup>
      <div>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          onClick={() => {
            addItem(item, count);
          }}
        >
          AGREGAR AL CARRITO
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
