import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "primary.main",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const { items, removeItem, clearCart, totalPriceCart, totalPrice } =
    useContext(CartContext);

  const [orderId, setOrderId] = useState();

  const [confirmationOrder, setConfirmationOrder] = useState(true);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const inputs = [
    {
      label: "Nombre y Apellido",
      name: "name",
    },
    {
      label: "Correo",
      name: "email",
    },
    {
      label: "Teléfono",
      name: "phone",
    },
  ];

  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const onChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };
  function checkOut() {
    const order = {
      items: items,
      buyer: formInfo,
      total: totalPrice,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  }

  if (items.length > 0) {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Box>
            {items.map((item) => (
              <div key={item.id} style={{ fontFamily: "sans-serif" }}>
                <h1>Producto: {item.name}</h1>
                <h2>Cantidad: {item.count}</h2>
                <h2>${item.price * item.count}</h2>
                <ButtonGroup
                  color="secondary"
                  size="medium"
                  disableElevation
                  variant="contained"
                />
                <Button
                  onClick={() => {
                    removeItem(item.id);
                    totalPriceCart();
                  }}
                  disableElevation
                  variant="contained"
                >
                  BORRAR
                </Button>
                <ButtonGroup />
              </div>
            ))}
            <Box
              sx={{ display: "flex", marginTop: 3, justifyContent: "flex-end" }}
            >
              <Typography>
                <h2>Precio total: $ {totalPrice}</h2>
              </Typography>
              <Typography sx={{ marginRight: 3 }}>
                {totalPriceCart()}
              </Typography>
            </Box>
            <Button
              style={{ marginTop: 40 }}
              onClick={() => clearCart()}
              disableElevation
              variant="contained"
              color="secondary"
            >
              VACIAR CARRO
            </Button>
          </Box>
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
                  />
                ))}
                <Button
                  style={{ marginTop: 40 }}
                  type="button"
                  onClick={() => {
                    checkOut();
                    handleOpen();
                  }}
                  disableElevation
                  variant="contained"
                  color="secondary"
                >
                  REALIZAR ORDEN
                </Button>
              </FormControl>
            </div>
          </Box>
        </Box>
        {orderId !== undefined && (
          <Modal open={open}>
            <Box sx={style}>
              <Link
                to={`/`}
                style={{
                  textDecoration: "none",
                  palette: "secondary",
                  size: "medium",
                }}
              >
                <IconButton
                  aria-label="close"
                  color="secondary"
                  size="small"
                  onClick={() => {
                    setConfirmationOrder(false);
                    clearCart();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </Link>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                ¡Tu pedido fue realizado con exito!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Tu código de orden es {orderId}.
              </Typography>
            </Box>
          </Modal>
        )}
      </div>
    );
  } else {
    return (
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <Box>
          <h1 color="secondary">¡Tu carrito está vacío!</h1>
        </Box>
        <Box>
          <Link
            to={`/`}
            style={{
              textDecoration: "none",
              palette: "secondary",
              size: "medium",
            }}
          >
            <ButtonGroup
              color="secondary"
              size="medium"
              disableElevation
              variant="contained"
            />
            <Button disableElevation variant="contained">
              IR A SECCIÓN DE PRODUCTOS
            </Button>
            <ButtonGroup />
          </Link>
        </Box>
      </Box>
    );
  }
};

export default Cart;
