import q from './questions.module.css'
import {useState} from "react";

const qwests = [
    "Кто всегда делает твой день лучше?",
    "Если бы у тебя оставались последние деньги, как бы ты их использовал(а)?",
    "Где ты чувствуешь себя лучше всего?",
    "Какова была твоя самая сложная задача на этой неделе?",
    "Что помогает тебе чувствовать себя лучше?",
    "Какая самая полезная вещь находится у тебя в комнате?",
    "Какой самый лучший подарок ты когда-либо получал(а)?",
    "Что тебе нужно прямо сейчас?",
    "Есть ли такое место или общество, где ты чувствуешь себя своим?",
    "У тебя есть финансы на твои расходы?",
    "У тебя есть секрет, о котором никто не знает?",
    "Оказал(а) ли ты влияние на кого-то/что-то сегодня?",
    "Есть ли кто-то, перед кем бы ты хотел(а) извиниться?",
    "Какие виды отдыха тебе нравятся?",
    "Какое твое лучшее зимнее воспоминание?",
    "Что ты хочешь запомнить из сегодняшнего дня?",
    "Как бы ты описал(а) себя 5 словами?",
    "Чему ты хочешь научиться в будущем?",
    "Чего ты боишься больше всего?",
    "Какой твой идеальный день?",
    "Есть ли у тебя какие-нибудь зависимости? Если да, то хотел(а) бы от них избавиться?",
    "О чем ты думал(а) сегодня больше всего?",
    "Кто твой самый близкий человек сейчас?",
    "От чего ты устаешь больше всего?",
    "Ты скорее оптимист или пессимист?",
    "Есть ли у тебя проблемы в отношениях с родителями?",
    "Когда ты последний раз плакал(а)? Почему?",
    "О чем ты больше всего сожалеешь?",
    "Какая твоя любимая песня на данный момент?",
    "С каким выдуманным персонажем ты себя ассоциируешь?",
    "О чем была твоя последняя ложь?",
    "Что ты больше всего любил(а) делать в дестве?",
];

var r = Math.floor(Math.random() * qwests.length);

const Quest = () => {

    let [user, setuser] = useState({
        id_user: localStorage.getItem('userMailId'),
        task: qwests[r],
        message: "",
    })

    const postUserTasks = async () => {
        const {id_user, task, message} = user;
        setuser({ ...user, ['message']: ""});
        r = Math.floor(Math.random() * qwests.length);
            if (id_user !== "unknown_user") {
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
        postUserTasks();
        editUserLevel();
    }

    return (
        <div className={q.q_wrapper}>
            <header className={q.header}>
                Постарайся ответить на вопрос максимально честно
            </header>
            <main className={q.main}>
                <div className={q.question}>
                    <i>{qwests[r]}</i>
                </div>
                <form className={q.form} method="POST" name="userTask" onSubmit={handlerSubmit}>
                    <textarea className={q.text} placeholder='Введи свой ответ сюда' minlength="1" value = {user.message} onChange={handlerChange} required>
                    </textarea>
                    <div className={q.ps}>Чтобы изменить размер текстового поля, потяни за правый нижний угол</div>
                    <input className={q.button} type="submit" value={"Отправить"} />
                </form>
            </main>
        </div>
    )
}

export default Quest