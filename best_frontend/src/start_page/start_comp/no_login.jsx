import c from "./no_login.module.css"
import { Link, NavLink } from "react-router-dom"

const noLogin = (props) => {
    return (
        <div className={c.item}>
            <NavLink to="/Main">
                <div className={c.no_login}>{props.text}</div>
            </NavLink>
        </div>
    )
}

export default noLogin