import s from './settings.module.css'
import { useNavigate } from 'react-router-dom'
import Edit_form from "./edit_profile"
import { useState } from 'react'

const SButton = (props) => {
    return (
        <input className={s.button} type="button" value={props.val} onClick={props.onClick}/>
    )
}
const Settings = () => {
    const navigate = useNavigate();
    const [user_form, setUser_form] = useState(false)
    const handlerSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('userMailId', null)
        navigate("/Start");
    }

    const edit_form = async (event) => {
        event.preventDefault();
        const id_user = localStorage.getItem('userMailId');
        const res = await fetch('http://localhost:1337/api/edit', {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type":
            "application/json" },
            body: JSON.stringify({
            id_user,
            })
        });
        const data = await res.json();
        console.log(res.ok)
        if (res.status === 400 || !data) console.log("пользователя с таким именем не существует")
        else if (res.ok){
            localStorage.setItem('userFormInfo', JSON.stringify(data))
        }
        setUser_form(!user_form)
    }
    if (user_form) {
        return (<div className={s.settings_wrapper} id="settings">
            <Edit_form />
        </div>)
    }
    else
    return (
        <div className={s.settings_wrapper} id="settings">
            <header className={s.header}>
                Настройки
            </header>
            <ul className={s.list}>
                <li className={s.list_item + ' ' + s.acc}><SButton val={"Настройки аккаунта"} onClick={edit_form}/></li>
                <li className={s.list_item + ' ' + s.theme}><SButton val={"Настройки темы"} /></li>
                <li className={s.list_item + ' ' + s.leave}><SButton val={"Выход"} onClick={handlerSubmit}/></li>
            </ul>
        </div>
    )
}

export default Settings