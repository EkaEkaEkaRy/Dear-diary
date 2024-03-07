

import { Component } from 'react'
import h from './history.module.css'
const entrances = [
    {
        date: "01.02.2001",
        category: 'мысли',
        ans: ["Сегодня меня били дома, в школе, на доп занятиях и по дороге домой! Люблю жизнь"]
    },
    {
        date: "01.02.2001",
        category: "вопрос",
        ans: ["Какая самая полезная вещь находится у тебя в комнате?", "Гранатомет. В нужный момент никогда не подводил"]
    },
    {
        date: "15.01.2001",
        category: 'настроение',
        ans: ["Тревожность", "Апатия"]
    },
    {
        date: "16.01.2001",
        category: 'настроение',
        ans: ["радость"]
    },
]

class History extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            shouldshowElem: false,
        };
    }
    handleClick() {
        this.setState({
            shouldshowElem: true,
        })

    }
    render() {
        const Main = () => {
            return (
                <main>
                    {
                        entrances.map(en => {
                            return (
                                <div key={en.id} className={h.item}>
                                    <div className={h.date}>{en.date}</div>
                                    <div className={h.cat}>{en.category}</div>
                                    {
                                        en.ans.map(a => {
                                            return (
                                                <div>{a}</div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </main>
            )
        }
        return (
            <div className={h.history_wrapper}>
                <header className={h.header}>
                    <input className={h.button} type="button" value="История записей" onClick={() => { this.handleClick() }} />
                </header>
                <div>
                    {this.state.shouldshowElem && <Main />}
                </div>
            </div>
        )
    }
}

export default History