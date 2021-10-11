import React from "react";
import {NavLink} from "react-router-dom";
import st from './../Dialogs.module.css';

const DialogItem = (props: { name: string, id: number }) => {

    // let dia = '/dialog/' + props.id;   -- уходит на пустой диалог , смена страницы
    let dia = `/dialogs/${props.id}`;          //страница не уходит в пустой диалог

    return (
        <div className={st.dialog}>
            <NavLink to={dia} activeClassName={st.use}>{props.name}</NavLink>
        </div>
    );                                           //добавлен активный класс юзер для подсвечивания выбранного юзера
}

export default DialogItem;