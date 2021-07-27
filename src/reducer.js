

export const initialState = {
    basket: [],

    loggedinuser:'dina'
}


const reducer = (state,action) => {
    console.log("Hello dina");
    console.log(action);
    switch(action.type) {
        case "ADD-TO-BASKET":
            return {
                ...state,
                basket:[...state.basket , action.item],
            };
         case "SET_LOGIN":
         return {
             ...state,
             loggedinuser: action.user
         } 
        case 'REMOVE FROM THE CART':
            let newcart = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if(index >=0) {

                newcart.splice(index,1)
            }
            else {
                console.log ("There were errors while removing the cart")
            }
            return {...state,basket: newcart}
    }
};

export default reducer;