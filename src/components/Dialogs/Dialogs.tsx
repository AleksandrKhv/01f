import React from "react";
import st from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {

    let dialogsElements =
        props.state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.state.messagesData.map((m: { dialog: string; }) => <Message dialog={m.dialog}/>);

    let newTextElement: any = React.createRef()

    let addPost = () => {
        let text = newTextElement.current.value;
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newTextElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>push message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;