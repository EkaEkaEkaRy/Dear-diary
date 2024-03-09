import s from "./header_m.module.css"
import profile from "../../profile_page/profile.svg"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    let id_user = localStorage.getItem('userMailId')

    const getUserInfo = async () => {
        const res = await fetch('http://localhost:1337/api/get_daily_tasks', {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type":
            "application/json" },
            body: JSON.stringify({
                id_user,
            })
        });
        const user_data = await res.json();
        if (res.status === 400 || !user_data) console.log("пользователя не существует");
        else if (res.ok) {
            let entrance = []
            user_data.forEach(element => {
                entrance.push({date: element.date.slice(0, 10), qwesion: element.task, answer: element.message})
            });
            console.log(entrance)
            localStorage.setItem('userInfoId', JSON.stringify(entrance))
          }
    }

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
        if (res.status === 400 || !data) console.log("пользователя не существует");
        else if (res.ok) {
            localStorage.setItem('userNameId', data.name)
            localStorage.setItem('userLevelId', data.level)
            getUserInfo()
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