import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    items: [],
    addToCart: () => {},
    deleteFromCart: () => {},
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'), []);

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState(cartFromLocalStorage);

    // useEffect(() => {
    //     const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    //     if (cartFromLocalStorage) {
    //         setCartProducts(cartProducts);
    //     }
    // }, []);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProducts));
    }, [cartProducts])

    function addToCart(id) {
        setCartProducts(
            [
                ...cartProducts,
                {
                    id: id,
                    quantity: 1,
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