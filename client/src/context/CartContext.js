import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    items: [],
    addToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
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

    function addToCart(data) {
        setCartProducts(
            [
                ...cartProducts,
                {
                    id: data.car.id,
                    image: data.car.mainImage,
                    make: data.car.make,
                    model: data.car.model,
                    trim: data.car.trim,
                    price: data.car.price,
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

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((data) => {
            const productData = data.price;
            totalCost += (productData * data.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        addToCart,
        deleteFromCart,
        getTotalCost
    }


    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}