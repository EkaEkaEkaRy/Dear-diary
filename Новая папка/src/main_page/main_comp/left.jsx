import Text from './thoughts'
import Mood from "./mood"
import Draw from "./draw"
import Chat from './chat'
import Music from './music'
import Exer from './exercises'
import Quest from './questions'
import s from './nav.module.css'
import l from './left.module.css'
import { Component } from "react"


class Left extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            shouldShowElem1: false,
            shouldShowElem2: false,
            shouldShowElem3: false,
            shouldShowElem4: false,
            shouldShowElem5: false,
            shouldShowElem6: false,
        };
    }
    handleClick(a) {
        var el = a;
        if (el == "1") {
            this.setState({
                shouldShowElem1: true,
                shouldShowElem2: false,
                shouldShowElem3: false,
                shouldShowElem4: false,
                shouldShowElem5: false,
                shouldShowElem6: false,
            })
        }
        if (el == "2") {
            this.setState({
                shouldShowElem1: false,
                shouldShowElem2: true,
                shouldShowElem3: false,
                shouldShowElem4: false,
                shouldShowElem5: false,
                shouldShowElem6: false,
            })
        }
        if (el == "3") {
            this.setState({
                shouldShowElem1: false,
                shouldShowElem2: false,
                shouldShowElem3: true,
                shouldShowElem4: false,
                shouldShowElem5: false,
                shouldShowElem6: false,
            })
        }
        if (el == "4") {
            this.setState({
                shouldShowElem1: false,
                shouldShowElem2: false,
                shouldShowElem3: false,
                shouldShowElem4: true,
                shouldShowElem5: false,
                shouldShowElem6: false,
            })
        }
        if (el == "5") {
            this.setState({
                shouldShowElem1: false,
                shouldShowElem2: false,
                shouldShowElem3: false,
                shouldShowElem4: false,
                shouldShowElem5: true,
                shouldShowElem6: false,
            })
        }
        if (el == "6") {
            this.setState({
                shouldShowElem1: false,
                shouldShowElem2: false,
                shouldShowElem3: false,
                shouldShowElem4: false,
                shouldShowElem5: false,
                shouldShowElem6: true,
            })
        }

    }
    render() {
        const Input = (props) => {
            return (
                <input className={s.button} type="button" value={props.value} onClick={() => { this.handleClick(props.id) }} />
            )
        }
        return (
            <div className={l.main}>

                <div className={s.nav_wrapper}>
                    <header className={s.header}>
                        <div>Ежедневные задания</div>
                    </header>
                    <main>
                        <div className={s.list}>
                            <div className={s.list_item + ' ' + s.thoughts}><Input value={"Напиши свои мысли"} id="1" /></div>
                            <div className={s.list_item + ' ' + s.mood}><Input value={"Отметь свое настроение"} id="2" /></div>
                            <div className={s.list_item + ' ' + s.draw}><Input value={"Порисуй"} id="3" /></div>
                            <div className={s.list_item + ' ' + s.music}><Input value={"Послушай расслабляющую музыку"} id="4" /></div>
                            <div className={s.list_item + ' ' + s.exersice}><Input value={"Выполни упражнения"} id="5" /></div>
                            <div className={s.list_item + ' ' + s.quest}><Input value={"Ответь на вопрос"} id="6" /></div>
                        </div>
                    </main>
                </div>

                <div id="right">
                    {this.state.shouldShowElem1 && <Text />}
                    {this.state.shouldShowElem2 && <Mood />}
                    {this.state.shouldShowElem3 && <Draw />}
                    {this.state.shouldShowElem4 && <Music />}
                    {this.state.shouldShowElem5 && <Exer />}
                    {this.state.shouldShowElem6 && <Quest />}
                </div>

            </div>
        )
    }
}

export default Left