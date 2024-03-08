import s from "./header_m.module.css"
import profile from "../../profile_page/profile.svg"
import { Link, NavLink } from "react-router-dom"

const Header = (props) => {
    var userName = props.name; // здесь я присваиваю переменной значение из name из props (можно и без этого, но так удобнее)
    /*
    if (localStorage.getItem('userMailId') === "unknown_user")
    return (
        // здесь я передаю имя пользователя в state на страницу profile
        <header className={s.header}>
            <NavLink to="/Start" state={{name: userName}}> 
                <div className={s.profile}>
                    <img className={s.ava} src={profile} alt="АВА" />
                </div>
            </NavLink>
        </header>
    )
    else
    */
    return (
        // здесь я передаю имя пользователя в state на страницу profile
        <header className={s.header}>
            <NavLink to="/Profile" state={{name: userName}}> 
                <div className={s.profile}>
                    <img className={s.ava} src={profile} alt="АВА" />
                </div>
            </NavLink>
        </header>
    )
}

export default Header