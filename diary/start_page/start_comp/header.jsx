import a from "./header.module.css"

const header = () => {
    return (
        <header className={a.header}>
            <div>Твой <i>личный</i> дневник</div>
        </header>
    )
}

export default header