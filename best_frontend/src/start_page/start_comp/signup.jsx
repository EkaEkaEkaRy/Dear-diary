import l from "./login.module.css"
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));

    let [user, setuser] = useState({
        name: "",
        mail: "",
        password: "",
        password2: "",
    })

    let name, value;

    const handlerChange = (event) =>
    {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value})
    }

    const handlerSubmit = async (event) => {
            event.preventDefault();
            const {name, mail, password, password2} = user;
            if (password !== password2) console.log("пароли не совпадают");
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
            if (res.status === 400 || !data) console.log("пользователь уже существует")
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            navigate("/Main");
    };
    return (
        <div className={l.signup}>
            <form class="form_auth" action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                <div className={l.title}>Регистрация</div>
                <div className={l.login_wrapper}>
                    <div><input className={l.input} name="name" type="text" placeholder='Имя' value = {user.name} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="mail" type="email" placeholder='Почта' value = {user.mail} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="password" type="password" placeholder='Пароль' value = {user.password} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="password2" type="password" placeholder='Повторный пароль' value = {user.password2} onChange={handlerChange} required /></div>
                    <div>
                            <input className={l.button} type="submit" value={"Создать аккаунт"} />

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup