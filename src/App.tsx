import React, {useState} from 'react';
import Screen from "./components/Screen/Screen";
import Numpad from "./components/Numpad/Numpad";
import Navbar from "./components/Navbar/Navbar";
import styles from './styles/app.module.scss'

const App = () => {
    const [darkTheme,setDarkTheme] = useState(true)


    return (
        <div className={[styles.app,!darkTheme ? styles.light :''].join(' ')}>
            <div className={styles.container}>
                <Navbar setTheme={setDarkTheme} theme={darkTheme}/>
                <div className={styles.calc}>
                    <Screen theme={darkTheme}/>
                    <Numpad  theme={darkTheme} />
                </div>
            </div>
        </div>
    );
};

export default App;