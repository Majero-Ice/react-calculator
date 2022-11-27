
import {ScreenState} from "../../types/screen";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {isNum} from "../../utils";


 const initialState:ScreenState = {screen:''}

export const screenSlice = createSlice({
    name:'screen',
    initialState,
    reducers:{
        addNum(state,action:PayloadAction<string>){
            state.screen+= action.payload
        },
        addOperation(state,action:PayloadAction<string>){
            isNum(state.screen[state.screen.length - 1])
                ? state.screen+= action.payload
                : state.screen = state.screen.slice(0, -1) + action.payload
        },
        getPercent(state,action:PayloadAction<{currentNum:string,percent:string}>){
            state.screen = state.screen
                .slice(0,-action.payload.currentNum.length) + action.payload.percent
        },
        clearScreen(state){
            state.screen = ''
        },
        removeLast(state){
            state.screen = state.screen.slice(0,-1)
        },
        getResult(state){
            state.screen = String(eval(state.screen))
        }

    }
})

export default screenSlice.reducer
export const {getPercent,addOperation,addNum,clearScreen,removeLast,getResult} = screenSlice.actions