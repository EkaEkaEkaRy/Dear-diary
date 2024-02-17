import { Link } from "react-router-dom"
import classes from "./login.module.css"

const signup = () => {
    return (
        <div className={classes.signup}>
            <div className={classes.title}>Регистрация</div>
            <div className={classes.login_wrapper}>
                <div><input className={classes.input} type="text" placeholder='Имя' /></div>
                <div><input className={classes.input} type="email" placeholder='Почта' /></div>
                <div><input className={classes.input} type="text" placeholder='Логин' /></div>
                <div><input className={classes.input} type="password" placeholder='Пароль' /></div>
                <div><input className={classes.input} type="password" placeholder='Повторный пароль' /></div>

                <div>
                    <Link to="/Main">
                        <input className={classes.button} type="button" value={"Создать аккаунт"} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default signup