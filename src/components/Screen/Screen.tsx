import React, {FC} from 'react';
import styles from './screen.module.scss'
import {isNum} from "../../utils";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface ScreenProps {
    theme:boolean
}
const Screen:FC<ScreenProps> = ({theme}) => {
    const screen = useSelector((state:RootState) => state.screen.screen)
    const fastResult =  isNum(screen[screen.length - 1])
                            ? eval(screen)
                            : eval(screen.slice(0,-1))

    return (
        <div className={[styles.screen,!theme ? styles.light : ''].join(' ')}>
            <div className={styles.calculation}>{screen}</div>
                <div className={styles.fast__calculation}>{ '=' + (fastResult ? fastResult : '0')}</div>
        </div>
    );
};

export default Screen;