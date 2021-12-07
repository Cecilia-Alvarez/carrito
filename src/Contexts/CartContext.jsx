import { createContext, useContext, useState } from 'react';


const cartContext = createContext();

export const useCartContext = () => useContext(cartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (idItem) => {
        const producto = cart.find(item => item.id === idItem);

        if(producto != null)
            return true;
        else
            return false;
    };

    const addItemToCart = ({item, quantity}) => {

        if (isInCart(item.id)) 
        {
            const newCart = cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, cantidad: cartItem.cantidad + quantity } : cartItem);
            setCart(newCart);
        } 
        else 
        {
            item.cantidad = quantity;
            const newCart = [...cart, item];
            setCart(newCart);         
        }
        
    };

    const extractItemFromCart = (idItem) => {

        if (isInCart(idItem)) 
        {
            const newCart = cart.filter(cartItem => cartItem.id !== idItem);
            setCart(newCart);
        }
    };

    const clearCart = () => {

        setCart([]);
    };

    const countItemsCart = () => {

        const count = 0;

        cart.reduce((count, prod) => count + prod.cantidad, 0);

        return count;
    };

    const totalPriceCart = () => {

        let precioTotal = 0;

        precioTotal = cart.reduce((precioTotal, prod) => precioTotal + prod.cantidad * prod.precio, 0);

        return precioTotal;
    };

    return (
        <cartContext.Provider
            value={{ cart, setCart, isInCart, addItemToCart, extractItemFromCart, clearCart, countItemsCart, totalPriceCart }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default useCartContext;