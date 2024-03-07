/*import Main from "../../main_page/main"*/
import { Link, NavLink } from "react-router-dom"
import {useState} from "react";

import a from "./login.module.css"

const Input = (props) => {
    var type = props.type;
    var text = props.placeholder;
    return (
        <div><input className={a.input} type={type} placeholder={text} required/></div>
    )
}
const LoginForm = () => {

    let [user, setuser] = useState({
        name: "",
        mail: "",
        password: ""
    })

    let name, value;

    const handlerChange = (event) =>
    {
        console.log(1);
        name = event.target.name;
        console.log(name);
        value = event.target.value;
        console.log(value);
        setuser({ ...user, [name]: value})
    }

    const handlerSubmit = async (event) => {
            event.preventDefault();
            const {name, mail, password} = user;
            const res = await fetch('http://localhost:1337/api/users', {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type":
                "application/json" },
                body: JSON.stringify({
                name,
                mail,
                password,
                })
            });
            const data = res.json();
            if (res.status === 400 || !data) console.log("error")
    };
    return (
        <div className={a.signup}>
            <form className={a.login} action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
            <div className={a.title}>Вход</div>
            <div className={a.login_wrapper}>
                <div><input className={a.input} name="mail" type = "text" placeholder='Почта' onChange={handlerChange} required/></div>
                <div><input className={a.input} name="password" type="password" placeholder='Пароль' onChange={handlerChange} required/></div>
                <div>
                    <NavLink to="/Main">
                        <input className={a.button} type="submit" value={"Войти"}/>
                    </NavLink>
                </div>
            </div>
        </form>
        </div>
        

    )
}

export default LoginForm