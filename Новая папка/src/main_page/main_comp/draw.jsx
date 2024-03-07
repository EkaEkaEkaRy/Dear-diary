import { Component } from "react";
import d from './drawing.module.css'
class Draw extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {

        };
    }
    handleClick(id) {
        var a = id;
        console.log(a)
    }
    render() {
        const Input = (props) => {
            return (
                <input className={d.button} type="button" value={props.value} onClick={() => { this.handleClick(props.id) }} />
            )
        }
        return (
            <div>
                <div className={d.list_item + ' ' + d.thoughts}><Input value={"Красный"} id="1" /></div>
                <div className={d.list_item + ' ' + d.mood}><Input value={"Оранжевый"} id="2" /></div>
                <div className={d.list_item + ' ' + d.draw}><Input value={"Желтый"} id="3" /></div>
                <div className={d.list_item + ' ' +d.music}><Input value={"Послушай расслабляющую музыку"} id="4" /></div>
                <div className={d.list_item + ' ' + d.exersice}><Input value={"Выполни упражнения"} id="5" /></div>
                <div className={d.list_item + ' ' + d.quest}><Input value={"Ответь на вопрос"} id="6" /></div>

                
            </div>

        )
    }
}
export default Draw