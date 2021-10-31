export const initialState = {
    basket: [{
        id: 3244,
        image: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg",
        price: "36,990.00",
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
        case 'REMOVE_TO_BASKET':
            //Logic fro removing basket
            return {...state};
        default:
            return state;
    }
}


export default reducer;

