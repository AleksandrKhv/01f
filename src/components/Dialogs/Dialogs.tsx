import React from "react";
import {NavLink} from "react-router-dom";
import st from './Dialogs.module.css';

const DialogItem = (props: { name: string, id: number }) => {

    // let dia = '/dialog/' + props.id;   -- уходит на пустой диалог , смена страницы
    let dia = `/dialogs/${props.id}`;          //страница не уходит в пустой диалог

    return (
        <div className={st.dialog}>
            <NavLink to={dia} activeClassName={st.use}>{props.name}</NavLink>
        </div>
    );                                                                             //добавлен активный класс юзер для подсвечивания выбранного юзера
}

const Message = (props: { dialog: string }) => {
    return (
        <div className={st.message}>{props.dialog}</div>
    );
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Tom'},
        {id: 3, name: 'Leo'},
        {id: 4, name: 'Jakub'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Denis'},
        {id: 7, name: 'Ilariya'},
        {id: 8, name: 'Iolanta'},
        {id: 9, name: 'Sasha'},
        {id: 10, name: 'Daddy'},
    ]

    let messagesData = [
        {id: 1, dialog: 'Hi'},
        {id: 2, dialog: 'Go to park'},
        {id: 3, dialog: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map(m => <Message dialog={m.dialog}/>);

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