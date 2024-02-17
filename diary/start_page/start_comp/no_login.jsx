import c from "./no_login.module.css"
import { Link } from "react-router-dom"

const noLogin = (props) => {
    return (
        <div className={c.item}>
            <Link to="/Main">
                <div className={c.no_login}>{props.text}</div>
            </Link>
        </div>
    )
}

export default noLogin