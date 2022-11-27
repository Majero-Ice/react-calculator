import React, {FC, MouseEvent} from 'react';
import styles from './operationButtons.module.scss'
import Button from "../UI/Button/Button";
import backspace from '../../assets/backspace.png'
import {Calculation} from "../../models/calculation";

interface OperationButtonsProps {
    calculation:Calculation
    theme:boolean
    addToScreen:(e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}


const OperationButtons:FC<OperationButtonsProps> = ({calculation,theme,addToScreen}) => {

    return (
        <div className={styles.operation__buttons}>
            <Button click={calculation.clearScreen} operation={true} theme={theme} >AC</Button>
            <Button click={calculation.removeLast} operation={true} ><img src={backspace} alt=""/></Button>
            <Button click={addToScreen} operation={true} data={'%'}>%</Button>
        </div>
    );
};

export default OperationButtons;