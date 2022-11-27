import React, {FC, MouseEvent} from 'react';
import styles from './numButtons.module.scss'
import Button from "../UI/Button/Button";
import {isNum} from "../../utils";
import {Calculation} from "../../models/calculation";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import moreFuncButton from '../../assets/more-func.png'

interface NumButtonsProps {
    calculation:Calculation
    theme:boolean
    moreFunc:boolean
    addToScreen:(e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}



const NumButtons:FC<NumButtonsProps> = ({calculation,theme,moreFunc,addToScreen}) => {

    const buttonData = ['7','8','9','4','5','6','1','2','3',moreFunc ? moreFuncButton : '','0','.']



    return (
        <div className={styles.num__buttons}>
            {buttonData.map(button =>
                <Button click={addToScreen} theme={theme} data={button} key={button}>
                    <img src={button} alt={button}/>
                </Button>
            )}
        </div>
    );
};

export default NumButtons;