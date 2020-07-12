import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state

const initialState = {
    cart: []
};

// create context

export const GlobalContext = createContext(initialState);


// provider compnent

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions 
    function deleteProduct(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addProduct(product){
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        });
    }

    function increment(id){
        dispatch({
            type: 'INCREMENT',
            payload: id
        });
    }

    function decrement(id){
        dispatch({
            type: 'DECREMENT',
            payload: id
        });
    }


    return (
        <GlobalContext.Provider value={{ 
            cart: state.cart,
            increment,
            decrement,
            deleteProduct,
            addProduct
             }}>
            {children}
        </GlobalContext.Provider>
    );
}