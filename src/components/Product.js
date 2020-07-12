import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import shoes from './../shoes.json';
import './../App.css'

const Product = () => {

    const { slug } = useParams();
    const shoe = shoes[slug];

    const { cart, addProduct } = useContext(GlobalContext);

    const addthisProduct = e => {
        e.preventDefault();

        if (cart.map(
            product => (product.id === shoe ?  ( product.quantity++ ,true ) : false))
            .includes(true)) {
                
        }else{
            const newProduct = {
                id: shoe,
                text: shoe.name,
                image: shoe.image,
                quantity: 1
            }
    
            addProduct(newProduct)
        }

        
    }

    if (!shoe) {
        return <h2>Page not found</h2>
    }

    return (
        <div className="product">
            <img src={shoe.img} alt={shoe.name} height="500px" width="500px" />
            <h5 className=" product-name">{shoe.name} </h5>
            <button onClick={addthisProduct}>Add to cart</button>
        </div>
    )
}

export default Product
