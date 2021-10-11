import React from "react";
import st from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {



    let dialogsElements =
        props.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.messagesData.map((m: { dialog: string; }) => <Message dialog={m.dialog}/>);

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;