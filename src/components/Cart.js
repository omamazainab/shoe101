import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
// import {} from './Transaction'

const Cart = () => {

    const { deleteProduct, cart, increment, decrement } = useContext(GlobalContext);



    return (
        <ul>
            {cart.map(product => (
                <li >
                    {product.text} <span> {product.quantity} </span>
                    <button onClick={() => increment(product.id)}>+</button>
                    <button onClick={()=> decrement(product.id) } >-</button>
                    <button onClick={() => deleteProduct(product.id)} className="delete-btn">x</button>
                </li>
            ))}
        </ul>


    )
}

export default Cart



