import s from "./header_m.module.css"
import profile from "../../profile_page/profile.svg"
import { Link, NavLink } from "react-router-dom"

const Header = (props) => {
    var userName = props.name; // здесь я присваиваю переменной значение из name из props (можно и без этого, но так удобнее)
    return (
        <header className={s.header}>
            <NavLink to="/Profile" state={{name: userName}}> // здесь я передаю имя пользователя  в state (здесь оно просто Name) на страницу profile
                <div className={s.profile}>
                    <img className={s.ava} src={profile} alt="АВА" />
                </div>
            </NavLink>
        </header>
    )
}

export default Header