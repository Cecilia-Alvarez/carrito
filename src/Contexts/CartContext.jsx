import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [ items, setItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState([]);

    const isInCart = (id) => {
        const found = items.find( item => item.id === id );
        return(found);
    }

    const addItem = (item, count) =>{
        isInCart(item.id)
        ?
        setItems(items.map((prod)=>{
            if(prod.id === item.id) {
                prod.count += count;
            }
            return prod
        }))
        :
        setItems([...items, { id: item.id, name: item.title, price: item.price, count: count }])
    }

    const removeItem = (id) => {
        setItems(items.filter( item => item.id !== id ));
    }

    const clearCart = () => {
        setItems([]);
        setTotalPrice();
    };


    const totalPriceCart = () => {
        setTotalPrice(items.reduce((sum, value) => (typeof value.price == "number" ? sum + (value.price * value.count) : sum), 0));
    };

    return(
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalPriceCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
