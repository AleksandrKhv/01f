import React from "react";
import st from './../Dialogs.module.css';


const Message = (props: { dialog: string }) => {
    return (
        <div className={st.message}>{props.dialog}</div>
    );
}


export default Message;