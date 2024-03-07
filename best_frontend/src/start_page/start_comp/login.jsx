/*import Main from "../../main_page/main"*/
import { useState } from "react";

import a from "./login.module.css"

const LoginForm = () => {

    let [user, setuser] = useState({
        mail: "",
        password: ""
    })

    let name, value;

    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));


    const handlerChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const { mail, password } = user;
        const response = await fetch("http://localhost:1337/api/users", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            const users = await response.json();
            users.forEach(user => {
                console.log(user.mail)
                if (mail === user.mail) {
                    if (password !== user.password) console.log('Неправильный пароль');
                    else {
                        console.log("правильно");
                        setauthenticated(true)
                        localStorage.setItem("authenticated", true);
                    }
                }
            });
            console.log("Пользователь не найден")
        }
    };
    return (
        <div className={a.signup}>
            <form className={a.login} action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                <div className={a.title}>Вход</div>
                <div className={a.login_wrapper}>
                    <div><input className={a.input} name="mail" type="text" placeholder='Почта' value={user.mail} onChange={handlerChange} required /></div>
                    <div><input className={a.input} name="password" type="password" placeholder='Пароль' value={user.password} onChange={handlerChange} required /></div>
                    <div>

                        <input className={a.button} type="submit" value={"Войти"} />
                    </div>
                </div>
            </form>
        </div>


    )
}

export default LoginForm