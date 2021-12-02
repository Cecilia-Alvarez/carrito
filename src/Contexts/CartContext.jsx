// import * as React from 'react';
// import { createContext, useContext, useState } from 'react';
// import { ItemCart } from '../Components/ItemCart'

// const CartContext = createContext();

// export const useCartContext = () => useContext(CartContext);

// export const CartContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addItemToCart = () => (item) => {
      
//     if (isInCart(item)) {
//         const newCart = cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
//         setCart(newCart);
//         console.log(newCart)
//     } else {
//         const newCart = [...cart, item];
//         setCart(newCart);
//     }
//   }

//   const isInCart = (item) => {
//     return cart.some((cartItem) => cartItem.id === item.id);
//     console.log(cartItem)
//   };

//   const clearCart = () => {
//     setCart([]);
// }

// const extractItem = (Id) => {
//     const deleteProduct = cart.filter ((productInCart) => productInCart.item.Id !== Id);
//     setCart ([...deleteProduct]);
// };

//   return (
//     <CartContext.Provider
//       value={{ cart, setCart, isInCart, extractItem, clearCart, addItemToCart }}
//     >
//     </CartContext.Provider>
//   );
// };