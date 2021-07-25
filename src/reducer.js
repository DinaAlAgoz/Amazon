

export const initialState = {
    basket: [],

    loggedinuser:null
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
         case 'SET_LOGIN':
             
         return {
             ...state,
             loggedinuser: action.user

         }
    }
};

export default reducer;