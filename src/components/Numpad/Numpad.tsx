import {FC, MouseEvent,useState} from 'react';
import styles from './numpad.module.scss'
import {isNum} from "../../utils";
import {Calculation} from "../../models/calculation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import NumButtons from "../NumButtons/NumButtons";
import OperationButtons from "../OperationButtons/OperationButtons";
import NumOperationButtons from "../NumOperationButtons/NumOperationButtons";


interface NumpadProps {
    theme:boolean
}

const Numpad:FC<NumpadProps> = ({theme}) => {
    const dispatch = useDispatch()
    const [calculation] = useState(new Calculation(dispatch))
    const screen = useSelector((state:RootState) => state.screen.screen)

    const addToScreen = (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        const {button} = e.currentTarget.dataset
        if (isNum(button ?? '')){

            calculation.addNum(button ?? '')
        }else if ((screen !== '-' && screen.length) || button === '-'){

            calculation.addOperation(button ?? '')
        }
    }

    return (
        <div className={styles.numpad}>
            <OperationButtons calculation={calculation} theme={theme} addToScreen={addToScreen}/>
            <NumButtons theme={theme} moreFunc={true}  addToScreen={addToScreen}/>
            <NumOperationButtons addToScreen={addToScreen} calculation={calculation}/>
        </div>
    );
};
export default Numpad;