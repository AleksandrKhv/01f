import React from "react";
import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <NavLink to='/profile' activeClassName={st.activeLink}>Profile</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/dialogs' activeClassName={st.activeLink}>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/news' activeClassName={st.activeLink}>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/music' activeClassName={st.activeLink}>Music</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/settings' activeClassName={st.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;