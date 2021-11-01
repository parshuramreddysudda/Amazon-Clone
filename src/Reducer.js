import { integerPropType } from "@mui/utils";

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

export const initialState = {
    basket: [],
    user: null
};

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            console.log("Called")
            let newBasket = [...state.basket];
            const index = newBasket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn("Can't remove Product id", action.id, " from basket");
            }
            return { ...state, basket: newBasket };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'RESET_BASKET':
            return {
                ...state,
                basket:action.basket
            }
        default:
            return state;
    }
}


export default reducer;

