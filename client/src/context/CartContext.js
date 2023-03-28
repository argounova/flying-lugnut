import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    addToCart: () => {},
    deleteFromCart: () => {},
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function addToCart(id) {
        setCartProducts(
            [
                ...cartProducts,
                {
                    id: id,
                    quantity: 1
                }
            ]
        )
    }

    console.log(cartProducts);

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        )
    }

    const contextValue = {
        items: cartProducts,
        addToCart,
        deleteFromCart,
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}