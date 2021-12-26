// import React, { Fragment } from 'react';
// import app from '../services/getFirebase';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Link } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {
  collection,
  getFirestore,
  addDoc,
} from "firebase/firestore";

const Cart = () => {

    const { items, removeItem, clearCart, totalPriceCart, totalPrice} = useContext(CartContext);

    const inputs = [
      {
        label: "nombre y apellido",
        name: "name"
      },
      {
        label: "correo",
        name: "email"
      },
      {
        label: "telefono",
        name: "phone"
      }
    ];

    const [formInfo, setFormInfo] = useState({
      name: "",
      phone: "",
      email: "",
    });
    // const [buttonState, setButtonState] = useState(true);
    const onChange = (event) => {
      setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
    };
    function checkOut() {
      totalPriceCart()
      const order = {
        items: items,
        buyer: formInfo,
        total: totalPrice,
      }

  
      const db = getFirestore();
  
      const ordersCollection = collection(db, "orders");
  
      addDoc(ordersCollection, order).then(({ id }) => {
        console.log(id);
      });
    }
    
    if(items.length > 0) {
    return (
        <Box sx={{ display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
          <Box>
            {
                items.map((item) =>(
                    <div key={item.id}>
                        <h1>Producto: {item.name}</h1>
                        <h2>Cantidad: {item.count}</h2>
                        <h2>${item.price * item.count}</h2>
                        <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
                            <Button onClick={ () => {removeItem(item.id); totalPriceCart()} } disableElevation variant="contained">BORRAR</Button>
                        <ButtonGroup/>
                    </div>
                ))
            }
            {/* <h2>Total: ${totalPrice}</h2> */}
            <Button style={{ marginTop:40 }} onClick={() => clearCart()}  disableElevation variant="contained" color= "secondary">VACIAR CARRO</Button>
            </Box>
            {/* <div> */}
                  {/* <form className="formContainer">
                    <h4>Ingrese sus datos para efectuar la Compra</h4>
                    <label className='titlesForm'>
                      Nombre Completo:
                      <input
                        type="text"
                        name="name"
                        value={formInfo.name}
                        onChange={handleChange}
                        className='controls'
                      />
                    </label>
                    <label className='titlesForm'>
                      Número de Teléfono:
                      <input
                        type="text"
                        name="phone"
                        value={formInfo.phone}
                        onChange={handleChange}
                        className='controls'
                      />
                    </label>
                    <label className='titlesForm'>
                      E-mail:
                      <input
                        type="text"
                        name="email"
                        value={formInfo.email}
                        onChange={handleChange}
                        className='controls'
                      />
                    </label>
                      <Button style={{ marginTop:40 }} className="botonFinalizar"
                      disabled={ !(formInfo.name && formInfo.phone && formInfo.email) } type="button" onClick={checkOut()}  disableElevation variant="contained" color= "secondary">FINALIZAR COMPRA
                      </Button>
                  </form> */}
                    <Box>
                      <div sx={{ marginRight: 10 }}>
                        <FormControl sx={{ position: "fixed" }}>
                          {inputs.map(({ name, label }) => (
                            <TextField
                              id="outlined-textarea"
                              label={label}
                              value={formInfo[name]}
                              name={name}
                              onChange={onChange}
                              sx={{ margin: 2 }}
                            />))}
                      <Button style={{ marginTop:40 }} type="button" onClick={checkOut}  disableElevation variant="contained" color= "secondary">REALIZAR ORDEN
                      </Button>
                        </FormControl>
                      </div>
                  </Box>
        </Box>
    );
    } else {
      return (
        <div>
          <h1 color="secondary">¡Tu carrito está vacío!</h1>
          <Link to={`/`} style={{ textDecoration:'none', palette:'secondary', size:'medium'}}>
              <ButtonGroup color="secondary" size="medium" disableElevation variant="contained"/>
                <Button disableElevation variant="contained">IR A SECCIÓN DE PRODUCTOS</Button>
              <ButtonGroup/>
            </Link>
        </div>
      )
    };
  };

  export default Cart;