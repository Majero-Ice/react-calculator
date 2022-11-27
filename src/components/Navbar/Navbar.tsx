import React, {FC} from 'react';
import styles from './navbar.module.scss'
import burgerMenu from '../../assets/burger-menu.png'
import burgerMenuDark from '../../assets/burger-menu-dark.png'
import themeLight from '../../assets/light.png'
import themeDark from '../../assets/dark.png'
import Button from "../UI/Button/Button";

interface NavbarProps {
    theme:boolean
    setTheme:React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar:FC<NavbarProps> = ({theme,setTheme}) => {
    return (
        <div className={styles.navbar}>
            <Button click={()=>{}}><img src={theme ? burgerMenu : burgerMenuDark} alt=""/></Button>
            <Button click={()=> setTheme(!theme)}><img src={theme ? themeLight : themeDark} alt=""/></Button>
        </div>
    );
};

export default Navbar;