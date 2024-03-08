import t from './thoughts.module.css'
import {useState} from "react";


const Text = () => {

    let [user, setuser] = useState({
        id_user: localStorage.getItem('userMailId'),
        task: "Ваши мысли",
        message: "",
    })

    const postUserTasks = async () => {
        const {id_user, task, message} = user;
        setuser({ ...user, ['message']: ""});
        const res = await fetch('http://localhost:1337/api/daily_tasks', {
                    method: "POST",
                    headers: { "Accept": "application/json", "Content-Type":
                    "application/json" },
                    body: JSON.stringify({
                    id_user,
                    task,
                    message,
                    })
                });
                const data = res.json();
                if (res.status === 400 || !data) console.log("пользователь уже существует")
    }

    const editUserLevel = async () => {
        const {id_user, task, message} = user;
        const res = await fetch('http://localhost:1337/api/login', {
            method: "PUT",
            headers: { "Accept": "application/json", "Content-Type":
            "application/json" },
            body: JSON.stringify({
            id_user,
            })
        });
        const data = res.json();
        if (res.status === 400 || !data) console.log("пользователя с таким именем не существует")
        else if (res.status === 402) console.log("неверный пароль")
         
    }

    let name, value;

    const handlerChange = (event) =>
    {
        name = 'message';
        value = event.target.value;
        setuser({ ...user, [name]: value})
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        if (user.id_user !== 'unknown_user') {
            postUserTasks();
            editUserLevel();
        }
    }

    return (
        <div className={t.text_wrapper}>
            <header className={t.header}>
                Место для твоих мыслей
            </header>
            <form className={t.form} method="POST" name="userTask" onSubmit={handlerSubmit}>
                <textarea className={t.text} placeholder='Напиши сюда все, что хочешь' minLength='1' value = {user.message} onChange={handlerChange} required></textarea>
                <div className={t.ps}>Чтобы изменить размер текстового поля, потяни за правый нижний угол</div>
                <input className={t.button} type="submit" value={"Отправить"} />
            </form>
        </div>
    )
}

export default Text