import s from './settings.module.css'
const Settings = () => {
    return (
        <div className={s.settings_wrapper}>
            <header className={s.header}>
                Настройки
            </header>
            <ul className={s.list}>
                <li className={s.list_item + ' ' + s.acc}><input className={s.button} type="button" value={"Настройки аккаунта"} /></li>
                <li className={s.list_item + ' ' + s.theme}><input className={s.button} type="button" value={"Настройки темы"} /></li>
                <li className={s.list_item + ' ' + s.leave}><input className={s.button} type="button" value={"Выход"} /></li>
            </ul>
        </div>
    )
}

export default Settings