import s from "./header_m.module.css"
import profile from "./profile.svg"
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.profile}>
                <img className={s.ava} src={profile} alt="АВА" />
            </div>
        </header>
    )
}

export default Header