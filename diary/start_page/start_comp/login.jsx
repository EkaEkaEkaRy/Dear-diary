/*import Main from "../../main_page/main"*/
import { Link } from "react-router-dom"
import a from "./login.module.css"

const login = () => {
    return (
        <div className={a.login}>
            <div className={a.title}>Вход</div>
            <div className={a.login_wrapper}>
                <div><input className={a.input} type="text" placeholder='Логин' /></div>
                <div><input className={a.input} type="password" placeholder='Пароль' /></div>
                <div>
                    <Link to="/Main">
                        <input className={a.button} type="button" value={"Войти"} />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default login