import { Link, NavLink } from "react-router-dom"
import classes from "./login.module.css"

const Input = (props) => {
    var type = props.type;
    var text = props.placeholder;
    return (
        <div><input className={classes.input} type={type} placeholder={text} required /></div>
    )
}
const Signup = () => {
    
    return (
        <div className={classes.signup}>
            <form class="form_auth" action="#" method="post">
                <div className={classes.title}>Регистрация</div>
                <div className={classes.login_wrapper}>
                    <Input type="text" placeholder='Имя'/>
                    <Input type="email" placeholder='Почта'/>
                    <Input type="password" placeholder='Пароль'/>
                    <Input type="password" placeholder='Повторный пароль'/>
                    <div>
                        <NavLink to="/Main">
                            <input className={classes.button} type="submit" value={"Создать аккаунт"} />
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup