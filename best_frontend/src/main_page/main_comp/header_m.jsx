import s from "./header_m.module.css"
import profile from "../../profile_page/profile.svg"
import { Link, NavLink } from "react-router-dom"

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to="/Profile" state={{name: "Name"}}>
                <div className={s.profile}>
                    <img className={s.ava} src={profile} alt="АВА" />
                </div>
            </NavLink>
        </header>
    )
}

export default Header