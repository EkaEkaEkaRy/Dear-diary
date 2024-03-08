import m from "./mood.module.css"
import happy from './emotions/smiley.png'
import energy from './emotions/full_battery.png'
import calm from './emotions/relieved.png'
import irrit from './emotions/irritability.png'
import apathy from './emotions/tired.png'
import up_down from './emotions/up-down.png'
import sad from './emotions/sadness.png'
import anxious from './emotions/anxious.png'
import no_energy from './emotions/low_battery.png'
import {useState} from "react";

const moods = [
    {name: 'Радость'},
    {name: 'Много энергии'},
    {name: 'Спокойствие'},
    {name: 'Раздражительность'},
    {name: 'Апатия'},
    {name: 'Перепады настроения'},
    {name: 'Грусть'},
    {name: 'Тревожность'},
    {name: 'Нет энергии'},
];
const Names = (props) => {
    let func = props.onClick
    let name = props.name
    return (
        <label className={m.checkbox}><input className={m.box} onClick={func} name={name} type="checkbox"/>{props.name}</label>
    )
}

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

function delete_element(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return arr.splice(i, 1);
        }
    }
    console.log("error")
}

const mood_isTrue = []


const Mood = () => {

    let [user, setuser] = useState({
        id_user: localStorage.getItem('userMailId'),
        task: "Ваши эмоции",
        message: "",
    })

    const postUserTasks = async () => {
        const {id_user, task, message} = user;
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
            mood_isTrue.splice(0, -1);
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
        name = event.target.name;
        if (contains(mood_isTrue, name))
        {
            value = false;
            delete_element(mood_isTrue, name);
        }
        else {
            value = true;
            mood_isTrue.push(name);
        }
        setuser({...user, ["message"]: mood_isTrue.join(', ')})
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
            postUserTasks();
            editUserLevel();
            const form = document.forms["userTask"];
            form.reset();
    }

    return (
        <div className={m.mood_wrapper}>
            <header className={m.header}>
                Что ты чувствуешь? Отметь свое настроение
            </header>
            <main className={m.main}>
                <div>
                    Можешь отметить сколько угодно вариантов
                </div>
                <div className={m.moods}>
                    <form method="POST" name="userTask" onSubmit={handlerSubmit}>
                    <div className={m.list}>
                        <div className={m.list_item}><img className={m.img} src={happy} alt="Радость" /><Names name="Радость" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={energy} alt="Много энергии" /><Names name="Много энергии" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={calm} alt="Спокойствие" /><Names name="Спокойствие" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={irrit} alt="Злость" /><Names name="Злость" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={apathy} alt="Апатия" /><Names name="Апатия" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={up_down} alt="Перепады настроения" /><Names name="Перепады настроения" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={sad} alt="Грусть" /><Names name="Грусть" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={anxious} alt="Тревожность" /><Names name="Тревожность" onClick={handlerChange}/></div>
                        <div className={m.list_item}><img className={m.img} src={no_energy} alt="Нет энергии" /><Names name="Нет энергии" onClick={handlerChange}/></div>
                    </div>
                    <input className={m.button} type="submit" value={"Отправить"} />
                    </form>
                    
                </div>
            </main>
        </div>
    )
}

export default Mood