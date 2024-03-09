import l from "./edit_profile.module.css"
import {useState} from "react";
//import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Edit_form = () => {
    const navigate = useNavigate();
    //const [authenticated, setauthenticated] = useState(false);

    let [user, setuser] = useState({
        name: JSON.parse(localStorage.getItem('userFormInfo')).name,
        password: "",
        password2: "",
    })
    /*
    useEffect(() => {
        localStorage.setItem('authenticated', authenticated);
      }, [authenticated]);

    localStorage.getItem(authenticated)
      */

    let name, value;

    const handlerChange = (event) =>
    {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value})
    }

    const delete_accaunt = async (event) => {
        event.preventDefault();
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const {name, password, password2} = user;
        if (password !== password2) document.getElementById("answer_for_user").innerHTML = "Пароли не совпадают"
        else {
            let mailuserID = String(localStorage.getItem('userMailId'))
            console.log(mailuserID)
            const res = await fetch('http://localhost:1337/api/users', {
                method: "PUT",
                headers: { "Accept": "application/json", "Content-Type":
                "application/json" },
                body: JSON.stringify({
                mailuserID,
                name,
                password,
                })
            });
            const data = res.json();
            console.log(res.status)
            if (res.status === 404 || !data) document.getElementById("answer_for_user").innerHTML = "Пользователь уже существует"
            else if (res.status === 500) document.getElementById("answer_for_user").innerHTML = "Попробуйте позже"
            //setauthenticated(true)
            else if (res.status === 200){
                localStorage.setItem('userNameId', name);
                navigate('/Profile')
            }

            }
            
    };
    return (
        <div>
            <form class="form_auth" action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                <div className={l.login_wrapper}>
                    <div><input className={l.input} name="name" type="text" placeholder='Имя' value = {user.name} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="password" type="password" placeholder='Пароль' value = {user.password} onChange={handlerChange} required /></div>
                    <div><input className={l.input} name="password2" type="password" placeholder='Повторный пароль' value = {user.password2} onChange={handlerChange} required /></div>
                    <div id="answer_for_user"></div>
                    <div>
                            <input className={l.button} type="submit" value={"Сохранить изменения"} />
                    </div>
                </div>
            </form>
            <input className={l.button} onClick={delete_accaunt} value={"Удалить аккаунт"} />
        </div>    
    )
}

export default Edit_form