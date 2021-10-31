import React from 'react';
import st from './Sidebar.module.css'


const Sidebar = () => {
    return (
        <div className={st.friends}>
            <div><h3>Friends</h3></div>
            <div className={st.friend}>
                <div>Masha</div>
                <div>Dasha</div>
                <div>Ira</div>
            </div>
        </div>
    );
};
export default Sidebar;