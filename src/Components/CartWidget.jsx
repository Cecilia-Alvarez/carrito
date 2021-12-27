import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  let itemsInCart = 0;

  items.map((item) => {
    itemsInCart = itemsInCart + item.count;
  });

  return (
    <div>
      <IconButton size="large" aria-label="show new items" color="inherit">
        <Badge className="itemsInCart" badgeContent={itemsInCart} color="error">
          <Link
            className="links"
            to="/cart"
            style={{ textDecoration: "none", color: "secondary" }}
          >
            <ShoppingCartIcon />
          </Link>
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
