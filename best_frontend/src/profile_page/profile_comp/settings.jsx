import s from './settings.module.css'
import { useNavigate } from 'react-router-dom'

const SButton = (props) => {
    return (
        <input className={s.button} type="button" value={props.val} onClick={props.onClick}/>
    )
}
const Settings = () => {
    const navigate = useNavigate();
    const handlerSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('userMailId', null)
        navigate("/Start");
    }
    return (
        <div className={s.settings_wrapper}>
            <header className={s.header}>
                Настройки
            </header>
            <ul className={s.list}>
                <li className={s.list_item + ' ' + s.acc}><SButton val={"Настройки аккаунта"} /></li>
                <li className={s.list_item + ' ' + s.theme}><SButton val={"Настройки темы"} /></li>
                <li className={s.list_item + ' ' + s.leave}><SButton val={"Выход"} onClick={handlerSubmit}/></li>
            </ul>
        </div>
    )
}

export default Settings