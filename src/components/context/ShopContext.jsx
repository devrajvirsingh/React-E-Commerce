import React, { createContext, useState } from "react";
import all_product from '../Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}
const ShopContextProvider = (props) => {
    const [cartitem, setCartitem] = useState(getDefaultCart())

    const addtocart = (itemId) => {
        setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartitem)
    }
    const removetocart = (itemId) => {
        setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const ContextValue = { all_product, cartitem, addtocart, removetocart }
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;