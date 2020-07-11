import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'

const RouteConfig = () => {
    return (
        <Router>
            <nav>
                <Link  to="/">Home</Link>
                <Link  to="/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route exact path="/products" element={<Products></Products>} />
                <Route path="/products/:slug" element={<Product/>} />
                <Route path="*" element={<h1>not found</h1>} />
            </Routes>
        </Router>
    )
}

export default RouteConfig
