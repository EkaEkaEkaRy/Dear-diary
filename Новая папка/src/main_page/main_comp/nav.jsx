import s from "./nav.module.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from 'react';


const Input = (props) => {
    
    const handleClick = () => {
        this.style.backgroundColor = 'black';
        
    }
    return (
        <input className={s.button} type="button" value={props.value} onClick={() => {
            handleClick(props.id);
        }} />
    )
}
const Nav = () => {

    return (
        <div className={s.nav_wrapper}>
            <header className={s.header}>
                <div>Ежедневные задания</div>
            </header>
            <main>
                <div className={s.list}>
                    <div className={s.list_item + ' ' + s.thoughts}><Input value={"Напиши свои мысли"} id="1" /></div>
                    <div className={s.list_item + ' ' + s.mood}><Input value={"Отметь свое настроение"} id="2"/></div>

                    <div className={s.list_item + ' ' + s.draw}><Input value={"Порисуй"} /></div>

                    <div className={s.list_item + ' ' + s.music}><Input value={"Послушай расслабляющую музыку"} /></div>
                    <div className={s.list_item + ' ' + s.task}><Input value={"Выполни упражнения"} /></div>
                    <div className={s.list_item + ' ' + s.quest}><Input value={"Ответь на вопрос"} /></div>
                </div>
            </main>
        </div>
    );
}

export default Nav