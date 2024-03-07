import { Link, NavLink } from "react-router-dom"
import l from "./login.module.css"
import {useState} from "react";

const Input = (props) => {
    var type = props.type;
    var text = props.placeholder;
    return (
        <div><input className={l.input} type={type} placeholder={text} required /></div>
    )
}
const Signup = () => {
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
        <div className={l.signup}>
            <form class="form_auth" action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                <div className={l.title}>Регистрация</div>
                <div className={l.login_wrapper}>
                    <div><input className={l.input} name="name" type="text" placeholder='Имя' value = {user.name} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="mail" type="email" placeholder='Почта' value = {user.mail} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="password" type="password" placeholder='Пароль' value = {user.password} onChange={handlerChange} required /></div>
                    <div><input className={l.input} type="password" placeholder='Повторный пароль' required /></div>
                    <div>
                        <NavLink to="/Main">
                            <input className={l.button} type="submit" value={"Создать аккаунт"} />
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup