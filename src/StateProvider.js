//set up Data layer for Basket

import { createContext, useContext, useReducer } from "react";


//This is the Data Layer
export const StateContext = createContext();

// Build Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);