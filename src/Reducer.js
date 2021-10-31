import { integerPropType } from "@mui/utils";

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

export const initialState = {
    basket: [{
        id: 3244,
        image: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg",
        price: "36990.00",
        rating: 4,
        title: "Samsung Galaxy S20 FE 5G (Cloud Navy"
    }],
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
        default:
            return state;
    }
}


export default reducer;

