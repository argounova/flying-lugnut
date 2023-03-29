import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import ComingSoon from "./components/ComingSoon/component";
import Navbar from './components/Navbar/component';
import Footer from './components/Footer/component';
import CarDetail from "./components/CarDetail/component";

// Pages
import Home from "./pages/Home/component";
import BrowseAllProducts from "./pages/BrowseAll/component";
import NewInventory from './pages/NewInventory/component';
import Cart from "./pages/Cart/component";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

const client = new ApolloClient ({ 
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <Navbar/>
                        <Routes>
                            <Route
                                path="/"
                                element={ <Home /> }
                            />
                            <Route
                                path="/new-inventory"
                                element={ <NewInventory /> }
                            />
                            <Route
                                path="/browse-all"
                                element={ <BrowseAllProducts /> }
                            />
                            <Route
                                path="/coming-soon"
                                element={ <ComingSoon /> }
                            />
                            <Route
                                path="/cars/:id"
                                element={ <CarDetail /> }
                            />
                            <Route 
                                path="/cart"
                                element={ <Cart /> }
                            />
                            <Route 
                                path="/success"
                                element={ <Success /> }
                            />
                            <Route 
                                path="/cancel"
                                element={ <Cancel /> }
                            />
                        </Routes>
                    <Footer/>
                </Router>
            </ApolloProvider>
        </>
    );
}

export default App;