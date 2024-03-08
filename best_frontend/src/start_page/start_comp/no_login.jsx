import c from "./no_login.module.css"
import { NavLink } from "react-router-dom"
//import { Link} from "react-router-dom"

const noLogin = (props) => {
    localStorage.setItem('userMailId', "unknown_user");
    return (
        <div className={c.item}>
            <NavLink to="/Main">
                <div className={c.no_login}>{props.text}</div>
            </NavLink>
        </div>
    )
}

export default noLogin