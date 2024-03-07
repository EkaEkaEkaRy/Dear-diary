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
    return (
        <label className={m.checkbox}><input className={m.box} type="checkbox"/>{props.name}</label>
    )
}
const Mood = () => {
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
                    <form>
                    <div className={m.list}>
                        <div className={m.list_item}><img className={m.img} src={happy} alt="Радость" /><Names name="Радость"/></div>
                        <div className={m.list_item}><img className={m.img} src={energy} alt="Много энергии" /><Names name="Много энергии"/></div>
                        <div className={m.list_item}><img className={m.img} src={calm} alt="Спокойствие" /><Names name="Спокойствие"/></div>
                        <div className={m.list_item}><img className={m.img} src={irrit} alt="Злость" /><Names name="Злость"/></div>
                        <div className={m.list_item}><img className={m.img} src={apathy} alt="Апатия" /><Names name="Апатия"/></div>
                        <div className={m.list_item}><img className={m.img} src={up_down} alt="Перепады настроения" /><Names name="Перепады настроения"/></div>
                        <div className={m.list_item}><img className={m.img} src={sad} alt="Грусть" /><Names name="Грусть" /></div>
                        <div className={m.list_item}><img className={m.img} src={anxious} alt="Тревожность" /><Names name="Тревожность"/></div>
                        <div className={m.list_item}><img className={m.img} src={no_energy} alt="Нет энергии" /><Names name="Нет энергии"/></div>
                    </div>
                    </form>
                    <input className={m.button} type="submit" value={"Отправить"} />
                </div>
            </main>
        </div>
    )
}

export default Mood