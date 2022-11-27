import React, {FC, MouseEvent} from 'react';
import Button from "../UI/Button/Button";
import divided from '../../assets/divided.png'
import {Calculation} from "../../models/calculation";
import styles from './NumOperationButton.module.scss'
interface NumOperationButtonsProps {
    addToScreen:(e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
    calculation:Calculation

}


const NumOperationButtons:FC<NumOperationButtonsProps> = ({addToScreen,calculation}) => {
    return (
        <div className={styles.num__operation__module}>
            <Button click={addToScreen} operation={true} data={'/'}><img src={divided} alt=""/></Button>
            <Button click={addToScreen} operation={true} data={'*'}>x</Button>
            <Button click={addToScreen} operation={true} data={'-'}>-</Button>
            <Button click={addToScreen} operation={true} data={'+'}>+</Button>
            <Button click={calculation.getResult} equal={true}>=</Button>
        </div>
    );
};

export default NumOperationButtons;