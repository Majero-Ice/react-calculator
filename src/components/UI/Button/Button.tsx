import React, {FC, MouseEvent} from 'react';
import styles from './button.module.scss'



interface ButtonProps {
    children?:JSX.Element | string | number
    click:(e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
    operation?:boolean
    equal?:boolean
    data?:string
    theme?:boolean
}


const Button:FC<ButtonProps> = ({children,click,operation = false,equal=false,data,theme=true}) => {
    return (
        <button
            className={[styles.button,operation ? styles.operation : '',equal ? styles.equal : '',!theme ? styles.light : ''].join(' ')}
            onClick={e => click(e)}
            data-button={data}
        >
            {children}
        </button>
    );
};

export default Button;