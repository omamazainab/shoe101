import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
// import {} from './Transaction'

const Cart = () => {

    const { cart } = useContext(GlobalContext);



    return (
        <ul>
            {cart.map(product => (
                <li >
                    {product.text} <span> {product.quantity} </span>
                    {/* <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button> */}
                </li>
            ))}
        </ul>


    )
}

export default Cart



