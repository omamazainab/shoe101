import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";


const RouteConfig = () => {
    return (
        <Router>
            <nav>
                <Link  to="/">Home</Link>
                <Link  to="/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<h1>home</h1>} />
                <Route exact path="/products" element={<h1>products</h1>} />
                {/* <Route path="/products/:slug" element={<Product/>} /> */}
                <Route path="*" element={<h1>not found</h1>} />
            </Routes>
        </Router>
    )
}

export default RouteConfig
