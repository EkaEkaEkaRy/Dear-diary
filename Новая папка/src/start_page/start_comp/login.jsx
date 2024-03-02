/*import Main from "../../main_page/main"*/
import { Link, NavLink } from "react-router-dom"
import a from "./login.module.css"

const Input = (props) => {
    var type = props.type;
    var text = props.placeholder;
    return (
        <div><input className={a.input} type={type} placeholder={text} required/></div>
    )
}
const LoginForm = () => {

    
    return (
        <form className={a.login} action="#" method="post">
            <div className={a.title}>Вход</div>
            <div className={a.login_wrapper}>
                <Input type = "text" placeholder='Почта' onChange={e => this.setState({value: e.target.value})}/>
                <Input type="password" placeholder='Пароль'/>
                <div>
                    <NavLink to="/Main">
                        <input className={a.button} type="submit" value={"Войти"} />
                    </NavLink>
                </div>
            </div>
        </form>

    )
}

export default LoginForm