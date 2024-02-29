import { store } from "./store";

export const isNum = (num:string):boolean => {
    return !!num === /\d/.test(num);
}
export const getLastOperation = () =>{
    let screen:string =  store.getState().screen.screen
    for(let i = 0; i < screen.length;i++){
        if(isNum(screen[screen.length-1])){
            screen = screen.slice(0,-1)    
        }else{
            return screen[screen.length-1]
        }
        
    }
}