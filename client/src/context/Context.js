// import { useQuery } from '@apollo/client';
// import { GET_CARS } from '../queries/carQueries';
// import { createContext, useContext, useReducer } from "react";
// import { cartReducer } from "./Reducers";


// const Cart = createContext();

// const Context = ({ children }) => {


//   // const products = data.map(() => ({
//   //   id: data.car.id,
//   //   make: data.car.make,
//   //   model: data.car.model,
//   //   exteriorColor: data.car.exteriorColor,
//   // }));

//   const [state, dispatch] = useReducer(cartReducer, {
//     products: products,
//     cart: [],
//   });

//   // const [productState, productDispatch] = useReducer(productReducer, {
//   //   byStock: false,
//   //   byFastDelivery: false,
//   //   byRating: 0,
//   //   searchQuery: "",
//   // });

//   // console.log(productState);

//   return (
//     <Cart.Provider value={{ state, dispatch }}>
//       {children}
//     </Cart.Provider>
//   );
// };

// export const CartState = () => {
//   return useContext(Cart);
// };

// export default Context;