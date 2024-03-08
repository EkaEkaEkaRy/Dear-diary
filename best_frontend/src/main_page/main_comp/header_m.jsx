import s from "./header_m.module.css"
import profile from "../../profile_page/profile.svg"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    let id_user = localStorage.getItem('userMailId')
    const handlerSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:1337/api/find', {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type":
            "application/json" },
            body: JSON.stringify({
                id_user,
            })
        });
        const data = await res.json();
        console.log(data)
        if (res.status === 400 || !data) console.log("пользователя не существует");
        else if (res.ok) {
            localStorage.setItem('userNameId', data.name)
            localStorage.setItem('userLevelId', data.level)
            navigate("/Profile")
          }
          
        
    };


    if (localStorage.getItem('userMailId') === "unknown_user")
    return (
        // здесь я передаю имя пользователя в state на страницу profile
        <header className={s.header}>
            <NavLink to="/Start"> 
                <div className={s.profile}>
                    <img className={s.ava} src={profile} alt="Профиль" />
                </div>
            </NavLink>
        </header>
    )
    else
    
    return (
        <header className={s.header}>
            <NavLink to="/Profile"> 
                <div onClick={handlerSubmit} className={s.profile}>
                    <img className={s.ava} src={profile} alt="Профиль" />
                </div>
            </NavLink>
        </header>
    )
}

export default Header