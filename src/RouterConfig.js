import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import Cart from './components/Cart'
import Footer from './components/Footer';
import { GlobalContext } from './context/GlobalState';
import './App.css'

const RouteConfig = () => {

    const { cart } = useContext(GlobalContext);
    const productQuantities = cart.map(product => product.quantity);
    const total = productQuantities.reduce((totalItems, quantity) => (totalItems += quantity), 0);


    return (
        <Router>
            <nav className="Navbar" >
                <Link  to="/" className="Link">Home</Link>
                <Link  to="/products" className="Link">Products</Link>
                <Link  to="/cart" className="Link">Cart<Badge variant="light" className="mx-2">{total}</Badge></Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route exact path="/products" element={<Products></Products>} />
                <Route path="/products/:slug" element={<Product/>} />
                <Route path="/cart" element={<Cart></Cart>} />
                <Route path="*" element={<h1>not found</h1>} />
            </Routes>

            <Footer></Footer>
        </Router>
    )
}

export default RouteConfig
