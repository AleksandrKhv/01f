import React from 'react';
import st from './Sidebar.module.css'


const Sidebar = () => {
    return (
        <div className={st.friends}>
            <div><h3>Friends</h3></div>
            <div className={st.friend}>
                <div><a href="">Masha</a></div>
                <div><a href="">Dasha</a></div>
                <div><a href="">Ira</a></div>
            </div>
        </div>
    );
};
export default Sidebar;