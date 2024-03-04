import t from './thoughts.module.css'

const Text = () => {
    return (
        <div className={t.text_wrapper}>
            <header className={t.header}>
                Место для твоих мыслей
            </header>
            <form className={t.form}>
                <textarea className={t.text} placeholder='Напиши сюда все, что хочешь' minLength='1' required></textarea>
                <div className={t.ps}>Чтобы изменить размер текстового поля, потяни за правый нижний угол</div>
                <input className={t.button} type="submit" value={"Отправить"} />
            </form>
        </div>
    )
}

export default Text