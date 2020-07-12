export default (state, action) => {
    switch (action.type) {

        case 'INCREMENT':
            state.cart.map(product => (product.id === action.payload ? (product.quantity+=1 , true) : false))
            return {
                ...state,
                cart: state.cart 
            }

        case 'DECREMENT':
            state.cart.map(product => 
                (product.id === action.payload ?
                     (product.quantity <= 1 ? product.quantity : product.quantity -=1 , true) : false)
                )
            
            return {
                ...state,
                cart: state.cart 
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }

        case 'ADD_PRODUCT':
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }

     
        default:
            return state;
    }
}