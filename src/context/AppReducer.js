export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }

        case 'ADD_PRODUCT':
            return{
                ...state,
                cart: [action.payload, ...state.cart]
            }
        default:
            return state;
    }
}