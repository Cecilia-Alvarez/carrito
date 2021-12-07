import React, { Fragment } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useCartContext } from '../Contexts/CartContext'
import ItemCart from './ItemCart'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, isInCart, clearCart, totalPriceCart} = useCartContext();
    const total = totalPriceCart();
  
    return (
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
        m: 1,
        width: '50em',
        height: '100%',
      },
      }}
      >
        <Paper elevation={24}>
      <div className="">
        {isInCart() > 0 ? (
          cart.map((i) => (
            <>
              <ItemCart
                key={i.id}
                title={i.title}
                price={i.price}
                image={i.image}
                id={i.id}
                quantity={i.quantity}
              />
            </>
          ))
        ) : (
          <>
            <p className="noItemsCart">No hay Items en el Carrito</p>
            <Link to={`/`} style={{ textDecoration:'none', palette:'secondary', size:'medium'}}>
          <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
            <Button disableElevation variant="contained">Volver</Button>
          <ButtonGroup/>
        </Link>
          </>
        )}
        {isInCart() > 0 && (
          <>
            <Fragment>
              <Box
              sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              '& > :not(style)': {
              m: 1,
              width: '30em',
              height: '10%',
            },
            }}
              >
              <Paper elevation={24} className="totalContainer">
              <div className="flexTotal">
              <p className="txtTotal">Total</p>
              <hr className="hrCart" />
              <p className="txtTotalNum">${total.toFixed(2)}</p>
              </div>
              </Paper>
              </Box>
              <div className="flexButtons">
              <Link to={`/`} style={{ textDecoration:'none', palette:'secondary', size:'medium'}}>
                <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
                 <Button disableElevation variant="contained">Seguir Comprando</Button>
                <ButtonGroup/>
            </Link>
                <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
                 <Button clearCart={clearCart} disableElevation variant="contained">Vaciar Carrito</Button>
                <ButtonGroup/>
              </div>
            </Fragment>
          </>
        )};
      </div>
      </Paper>
    </Box>);
  };
  export default Cart;