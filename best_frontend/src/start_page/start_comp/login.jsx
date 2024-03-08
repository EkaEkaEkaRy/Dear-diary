/*import Main from "../../main_page/main"*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import a from "./login.module.css"

const LoginForm = () => {

    const navigate = useNavigate();
    /*
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));
    */
    
    let [user, setuser] = useState({
        mail: "",
        password: ""
    })

    let name, value;


    const handlerChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const {mail, password} = user;
        const res = await fetch('http://localhost:1337/api/login', {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type":
            "application/json" },
            body: JSON.stringify({
            mail,
            password,
            })
        });
        const data = res.json();
        if (res.status === 400 || !data) console.log("пользователя с таким именем не существует")
        else if (res.status === 402) console.log("неверный пароль")
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
            localStorage.setItem('userMailId', mail);
            navigate("/Main");

        
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