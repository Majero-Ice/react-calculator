import {AppDispatch} from "../store";
import {getPercent,addNum,addOperation,getResult,clearScreen,removeLast} from "../store/reducers/screenReducer";

export class Calculation{
    dispatcher:AppDispatch
    currentNum:string
    prevNum:string
    operation:string


    constructor(dispatcher:AppDispatch) {
        this.dispatcher = dispatcher
        this.currentNum = ''
        this.prevNum = ''
        this.operation = ''
    }


    addNum = (button:string) =>{
        this.currentNum = this.currentNum + button
        this.dispatcher(addNum(button))

    }


    getResult = () => {
        if (this.currentNum){
            this.dispatcher(getResult())
        }
    }


    clearScreen = () => {
        this.dispatcher(clearScreen())
        this.currentNum = ''
        this.prevNum = ''
        this.operation = ''
    }

    removeLast = () => {
        if (this.currentNum){
            this.currentNum = this.currentNum.slice(0,-1)
        }
        this.dispatcher(removeLast())
    }

    addOperation = (operation:string) =>{
        this.operation = operation
        this.operationLogic(this.operation)


    }

    private operationLogic = (operation:string) =>{
        let result: string = ''
        switch (operation) {

            case '%':
                if (!this.currentNum){
                    return
                }

                this.prevNum
                    ? result = String( Number(this.currentNum) / 100 * Number(this.prevNum))
                    : result = String(this.prevNum + +this.currentNum / 100)
                this.dispatcher(getPercent({percent:result,currentNum:this.currentNum}))
                this.currentNum = result
                break

            default:  // '+', '-', '*', '/' logic
                this.dispatcher(addOperation(operation))
                this.prevNum = String(Number(this.prevNum) + Number(this.currentNum))
                this.currentNum = ''
                break
        }
    }
}

