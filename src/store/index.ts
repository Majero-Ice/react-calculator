import {combineReducers, createStore} from "redux";
import screenReducer, {screenSlice} from "./reducers/screenReducer";
import {configureStore} from "@reduxjs/toolkit";



const rootReducer = combineReducers({
    screen:screenReducer
})



export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch