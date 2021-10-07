import React from "react";
import st from './Header.module.css'

const Header = () => {
    return (
        <header className={st.header}>
            <div>
                <img
                    src='https://img2.freepng.ru/20180329/xlq/kisspng-dragon-logo-dragon-5abd132a48cdd4.4875859315223406502982.jpg'/>
                TooTTi
            </div>
        </header>
    );
}

export default Header;