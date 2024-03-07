
import h from "./header.module.css"

const header = () => {
    return (
        <header className={h.header}>
            <div className={h.name}>SELFHELP - </div>
            <div className={h.disc}>Твой личный дневник</div>
        </header>
    )
}

export default header